# Rules

Adopt the Trunk-Based Development Workflow for New Work: From now on, whenever you want to add a new feature or fix a bug, you will follow these steps: * Pull the Latest Changes: Always start by pulling the latest changes from the trunk branch to ensure your local is up-to-date:
```bash
git pull origin trunk
```

*   **Create a Short-Lived Feature/Bugfix Branch:** Create a new branch for your work. Give it a descriptive name (e.g., `feat/contact-form-submission`, `fix/api-error`).
```bash
git checkout -b feat/new-feature
```

*   **Develop and Commit Locally:** Work on your feature or bug fix on this new branch. Make small, frequent commits with clear messages following your `COMMIT_RULES.md`.
*   **Push Your Feature Branch (Optional but Recommended):** Regularly push your feature branch to the remote repository. This provides a backup and allows for collaboration if needed (even if you're solo, it's good practice).
```bash
git push origin feat/new-feature
```


*   **Run CI on the Feature Branch (Recommended):** If your CI is configured to run on feature branches, check the CI results to ensure your changes haven't introduced issues before merging to `trunk`.
*   **Merge into the Trunk:** Once your feature is complete and all tests pass (locally and/or on the feature branch CI), merge your changes into the `trunk` branch.
    *   Switch back to the `trunk` branch:

    ```bash
    git checkout trunk
    ```

    * Merge your feature branch:
    ```bash
    git merge --no-ff feat/new-feature
    ```
    (Using `--no-ff` creates a merge commit, which keeps a clearer history of when features were merged.)
    *   Resolve any merge conflicts that arise.
*   **Push the Merged Changes to Remote Trunk:**
```bash
git push origin trunk
```

*   **Verify CI on Trunk:** The CI pipeline on GitHub Actions will automatically trigger on this push to `trunk`. **Crucially, wait for this CI build to pass before considering the changes on `trunk` as ready for manual deployment.**
*   **Delete the Feature Branch (Optional but Recommended):** Once the feature is merged and the CI on `trunk` is successful, you can delete the feature branch locally and remotely:

```bash
# Delete locally
git branch -d feat/new-feature
# Delete remotely
git push origin --delete feat/new-feature 
```