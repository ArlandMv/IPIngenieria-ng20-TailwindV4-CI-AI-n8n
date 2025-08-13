# GitHub Actions Workflow Report

This report outlines the suggested GitHub Actions workflow strategy for this project, aligning with a trunk-based branching model and aiming to automate build, test, and deployment processes.

## Workflow Strategy Overview:

The suggested strategy involves three main workflows:

1.  **CI on Pull Request and Feature Branch Push:** This workflow runs on every pull request targeting the `trunk` branch and on every push to feature branches. Its primary purpose is to provide rapid feedback to developers on the quality and buildability of their code before it's considered for merging into `trunk`. It includes linting, unit tests, and E2E tests. It also includes an optional step for deploying a preview environment for pull requests.

2.  **CI on Trunk Push:** This workflow runs whenever changes are pushed directly to the `trunk` branch (typically after a pull request merge). It serves as a final verification step on the main development line, running linting, unit tests, and E2E tests. Upon successful completion, it triggers the production deployment workflow.

3.  **Production Deployment:** This workflow is triggered by the successful completion of the "CI on Trunk Push" workflow. It builds the application in production mode and deploys it to the production environment.

## Suggested Workflows:

Here is the YAML code for the suggested workflows. You should save each code block as a separate file in your `.github/workflows` directory (e.g., `ci-pr.yml`, `ci-trunk.yml`, `deploy-prod.yml`).

---

### Workflow 1: CI on Pull Request and Feature Branch Push (`ci-pr.yml`)

This workflow runs linting, unit tests, and E2E tests on pull requests targeting `trunk` and pushes to feature branches. It also includes an optional step for deploying a preview for pull requests.


    ```yaml
    yaml name: CI (PR and Feature Branches)

    on: pull_request: branches: [ "trunk" ] push: branches: - 'feature/' # Trigger on pushes to branches starting with 'feature/' - 'fix/' # Trigger on pushes to branches starting with 'fix/' # Add other feature/bug fix branch patterns as needed

    jobs: build-lint-test: runs-on: ubuntu-latest

    strategy:
        matrix:
            node-version: [20]

    steps:
    - name: Checkout code
        uses: actions/checkout@v3

    - name: Set up Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
        cache-dependency-path: package-lock.json

    - name: Install dependencies
        run: npm ci

    - name: Run Linting
        run: npm run lint

    - name: Run Unit Tests
        run: npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI

    - name: Run E2E Tests
        # Assuming you have Cypress configured, adjust if using a different E2E framework
        uses: cypress-io/github-action@v6
        with:
        build: npm run build # Assuming 'npm run build' builds your app for E2E
        start: npm start     # Assuming 'npm start' serves your app for E2E

    # Optional: Deploy Preview for Pull Requests
    # This step is highly dependent on your hosting provider.
    # Example using Firebase Hosting Preview Channels:
    # - name: Deploy to Firebase Hosting Preview Channel
    #   if: github.event_name == 'pull_request' # Only run on pull requests
    #   uses: FirebaseExtended/action-hosting-deploy@v0
    #   with:
    #     repoToken: '${{ secrets.GITHUB_TOKEN }}'
    #     firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_YOUR_PROJECT_ID }}' # Replace with your secret name
    #     projectId: 'your-project-id' # Replace with your Firebase project ID
    #     channelId: 'pr-${{ github.event.number }}' # Unique channel for each PR
    #     target: your-hosting-target # Optional: Specify a hosting target if you have multiple sites
    #   env:
    #     FIREBASE_CLI_EXPERIMENTS: webframeworks

    # If not using a platform-specific preview deployment, you can remove this step.
    # The SSH deploy step from your original workflow is not recommended for PR previews.
    ```

    ---

### Workflow 2: CI on Trunk Push (`ci-trunk.yml`)

This workflow runs linting, unit tests, and E2E tests when changes are pushed to the `trunk` branch. Upon success, it triggers the production deployment workflow.

```yaml
yaml name: CI (Trunk)

on: push: branches: [ "trunk" ]

jobs: build-lint-test-e2e: runs-on: ubuntu-latest outputs: build_status: ${{ steps.build.outcome }} # Output build status to trigger deployment
strategy:
  matrix:
    node-version: [20]

steps:
  - name: Checkout code
    uses: actions/checkout@v3

  - name: Set up Node.js ${{ matrix.node-version }}
    uses: actions/setup-node@v3
    with:
      node-version: ${{ matrix.node-version }}
      cache: 'npm'
      cache-dependency-path: package-lock.json

  - name: Install dependencies
    run: npm ci

  - name: Run Linting
    run: npm run lint

  - name: Run Unit Tests
    run: npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI

  - name: Run E2E Tests
    # Assuming you have Cypress configured, adjust if using a different E2E framework
    uses: cypress-io/github-action@v6
    with:
      build: npm run build # Assuming 'npm run build' builds your app for E2E
      start: npm start     # Assuming 'npm start' serves your app for E2E

  - name: Build for Production
    id: build # Give this step an ID to reference its outcome
    run: npm run build -- --configuration production
    # this job triggers the production deployment workflow
    trigger-deployment: runs-on: ubuntu-latest needs: build-lint-test-e2e # This job depends on the successful completion of the CI job if: needs.build-lint-test-e2e.outputs.build_status == 'success' # Only run if CI job succeeded

steps:
  - name: Trigger Production Deployment
    uses: actions/github-script@v6
    with:
      script: |
        github.rest.actions.createWorkflowDispatch({
          owner: context.repo.owner,
          repo: context.repo.repo,
          workflow_id: 'deploy-prod.yml', # The filename of your production deployment workflow
          ref: context.ref
        });
```

---

### Workflow 3: Production Deployment (`deploy-prod.yml`)

This workflow is triggered manually (via workflow_dispatch) by the "CI on Trunk Push" workflow and deploys the production build.



```yaml
yaml name: Production Deployment
on: workflow_dispatch: # Allows manual triggering and triggering from other workflows

jobs: deploy: runs-on: ubuntu-latest

steps:
  - name: Checkout code
    uses: actions/checkout@v3

  - name: Set up Node.js
    uses: actions/setup-node@v3
    with:
      node-version: '20' # Use the same Node.js version as your build
      cache: 'npm'
      cache-dependency-path: package-lock.json

  - name: Install dependencies
    run: npm ci --only=production # Install only production dependencies

  - name: Build for Production
    # Rebuild the application in production mode
    run: npm run build -- --configuration production

  - name: Deploy to Production Web Server
    # This step uses the SSH deploy action from your original workflow.
    # Ensure your secrets (SSH_PRIVATE_KEY, REMOTE_HOST, REMOTE_USER, REMOTE_TARGET) are correctly configured in your GitHub repository settings.
    uses: easingthemes/ssh-deploy@v5.0.0
    with:
      SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
      REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
      REMOTE_USER: ${{ secrets.REMOTE_USER }}
      TARGET: ${{ secrets.REMOTE_TARGET }}
      SOURCE: "dist/your-project-name/" # Replace 'your-project-name' with the actual output directory of your build
      EXCLUDE: "/.git/, /node_modules/"

```
---

## How to Use:

1.  Create the `.github/workflows` directory in your project's root if it doesn't exist.
2.  Save each of the workflow code blocks above as separate `.yml` files (e.g., `ci-pr.yml`, `ci-trunk.yml`, `deploy-prod.yml`) inside the `.github/workflows` directory.
3.  **Configure Secrets:** Add the necessary secrets (`SSH_PRIVATE_KEY`, `REMOTE_HOST`, `REMOTE_USER`, `REMOTE_TARGET`, and `FIREBASE_SERVICE_ACCOUNT_YOUR_PROJECT_ID` if using Firebase Hosting previews) to your GitHub repository settings (`Settings > Secrets > Actions`).
4.  **Adjust Placeholders:** Replace placeholder values like `your-project-id` and `your-project-name` with your actual project details.
5.  **Customize Triggers and Steps:** Adjust the branch patterns in the `push` triggers and the steps within each job as needed to fit your specific project structure and requirements (e.g., if you use different commands for linting, testing, or building, or if you use a different E2E framework).
6.  **Implement Branch Protection:** Configure branch protection rules for the `trunk` branch to require the "CI (PR and Feature Branches)" workflow to pass before merging.

This setup provides a robust CI/CD pipeline that automates testing and deployment, which is highly beneficial for a trunk-based development workflow.
