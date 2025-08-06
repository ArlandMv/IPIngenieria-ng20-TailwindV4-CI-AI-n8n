# Brainstorming: Refactoring app.html

*   Break down the large `app.html` file into smaller, focused Angular components.
*   Create a component for each major section of the landing page (e.g., Header, Hero, Problemas, Services, etc.).
*   Use standalone components for better encapsulation and easier integration.
*   Improve code organization and maintainability by grouping related files.
*   Enhance readability and collaboration among developers.
*   Prepare the application for potential future features and scaling by creating a modular base.
*   Define clear inputs and outputs for components where necessary (though for a landing page, many might be presentational).

# Product Plan: Refactoring IPIngeniería.net Landing Page HTML Structure

**Goal:** To refactor the monolithic `app.html` file into a professional and maintainable Angular component structure, improving code organization, readability, and reusability.

**Proposed File Structure:**

*   Create a dedicated folder for each major section of the landing page within `src/app/components`.
*   Each section folder will contain the component's TypeScript (`.ts`), HTML (`.html`), and CSS (`.css`) files.
*   All new components will be standalone, promoting modularity.

```
src/app/
├── components/
│   ├── header/
│   │   ├── header.component.ts
│   │   ├── header.component.html
│   │   └── header.component.css
│   ├── hero/
│   │   ├── hero.component.ts
│   │   ├── hero.component.html
│   │   └── hero.component.css
│   ├── problemas/
│   │   ├── problemas.component.ts
│   │   ├── problemas.component.html
│   │   └── problemas.component.css
│   ├── ai-services/
│   │   ├── ai-services.component.ts
│   │   ├── ai-services.component.html
│   │   └── ai-services.component.css
│   ├── consultoria/
│   │   ├── consultoria.component.ts
│   │   ├── consultoria.component.html
│   │   └── consultoria.component.css
│   ├── how-it-works/
│   │   ├── how-it-works.component.ts
│   │   ├── how-it-works.component.html
│   │   └── how-it-works.component.css
│   ├── testimonials/
│   │   ├── testimonials.component.ts
│   │   ├── testimonials.component.html
│   │   └── testimonials.component.css
│   ├── pricing/
│   │   ├── pricing.component.ts
│   │   ├── pricing.component.html
│   │   └── pricing.component.css
│   ├── cta-form/
│   │   ├── cta-form.component.ts
│   │   ├── cta-form.component.html
│   │   └── cta-form.component.css
│   └── footer/
│       ├── footer.component.ts
│       ├── footer.component.html
│       └── footer.component.css
└── app.component.ts
└── app.component.html
└── app.component.css
└── ... (other app files)
```
**Benefits:**

*   **Improved Readability:** Smaller, single-purpose files are significantly easier to read, understand, and debug.
*   **Enhanced Maintainability:** Changes or updates to a specific section of the page are isolated within its component, reducing the risk of introducing bugs in other areas.
*   **Increased Reusability:** Components like the header, footer, or even individual service items could potentially be reused on other pages or within other applications.
*   **Better Collaboration:** Multiple developers can work on different components concurrently without significant merge conflicts in a single large file.
*   **Preparation for Scaling:** A modular architecture is fundamental for building larger, more complex applications and incorporating new features seamlessly.
*   **Improved Performance (with OnPush):** Using `ChangeDetectionStrategy.OnPush` in standalone components can improve application performance by limiting change detection cycles.

**Refactoring Steps:**

1.  Create new standalone components for each major section of the landing page (Header, Hero, Problemas, AI Services, Consultoría, How It Works, Testimonials, Pricing, Call to Action Form, Footer) in their respective folders within `src/app/components`.
2.  For each new component, move the relevant HTML markup from `src/app/app.html` into the component's `.html` file.
3.  For each new component, move the corresponding CSS rules from `src/app/app.css` into the component's `.css` file. Update CSS selectors to be specific to the component to prevent styling conflicts.
4.  Update the `src/app/app.component.html` file to remove the section-specific HTML and replace it with the selectors of the newly created components.
5.  Ensure each new component is marked as `standalone: true` in its `@Component` decorator and utilizes `changeDetection: ChangeDetectionStrategy.OnPush`.
6.  Update `src/app/app.component.ts` to import and include the new standalone components in its `imports` array.
7.  Thoroughly test the refactored application to verify that the page renders correctly, all sections are displayed as intended, and responsiveness is maintained.
8.  Review the `src/app/app.css` file to remove the styles that have been moved to individual component CSS files, leaving only global styles or styles specific to the `app.component`.