# IPIngeniería.net Landing Page

This project is a professional, responsive landing page for IPIngeniería.net, a Chilean engineering and IT consulting firm.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.4.

## Development Strategy

Our development strategy for this landing page followed an iterative approach, breaking down the project into smaller, manageable components. We adopted a Test-Driven Development (TDD) methodology, writing unit tests for each component before implementing the component's code. This approach helps ensure code quality and maintainability.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project for production, use the following command:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
ng test --no-watch --no-progress --browsers=ChromeHeadless
```
**note:** for running tests in firebase studio we will to run the following commands:
which chromium
export CHROME_BIN=$(which chromium)
echo "CHROME_BIN=${CHROME_BIN}"


```bash
export CHROME_BIN=$(which chromium)
npm run test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Acknowledgments

The notification sound used in this application is from <a href="https://freesound.org/people/Joao_Janz/sounds/504849/">Vintage Alert Notification 1_2</a> by <a href="https://freesound.org/people/Joao_Janz/">Joao_Janz</a> | License: <a href="http://creativecommons.org/publicdomain/zero/1.0/">Creative Commons 0</a>

## Future updates

Switch sweetalert for ngx-sweetalert2 to use ESM and treeshaking or try dynamic imports(lazyload)

```typescript
async showAlert() {
  const Swal = await import('sweetalert2');
  Swal.fire({ ... });
}
```

<!--
https://npm-compare.com/html2pdf.js,jspdf,pdfmake

TOOLTIPS
native alternative https://youtu.be/GJnICmQ87AM?si=LzNw-8GBWGH4oJX0
popover api https://youtu.be/0_wgyB64a8I?si=v2T3oEerF-i2QdIX
npm packets https://npm-compare.com/ng2-tooltip-directive,ngx-tippy-wrapper,ngx-tooltip/#timeRange=ALL
-->