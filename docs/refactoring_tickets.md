# Refactoring Tickets for IPIngeniería.net Landing Page HTML Structure

## 1. Ticket: Create Header Component

**Description:** Create a standalone Angular component for the header section.

**Tasks:**

*   Generate a new standalone component named `header` in `src/app/components/header`.
*   Move the header HTML from `app.html` to `header.component.html`.
*   Move the header CSS from `app.css` to `header.component.css`.
*   Ensure the component uses `ChangeDetectionStrategy.OnPush`.
*   Update `app.html` to use the `<app-header>` tag.

## 2. Ticket: Create Hero Component

**Description:** Create a standalone Angular component for the hero section.

**Tasks:**

*   Generate a new standalone component named `hero` in `src/app/components/hero`.
*   Move the hero HTML from `app.html` to `hero.component.html`.
*   Move the hero CSS from `app.css` to `hero.component.css`.
*   Ensure the component uses `ChangeDetectionStrategy.OnPush`.
*   Update `app.html` to use the `<app-hero>` tag.

## 3. Ticket: Create Problemas Component

**Description:** Create a standalone Angular component for the "Problemas que resolvemos" section.

**Tasks:**

*   Generate a new standalone component named `problemas` in `src/app/components/problemas`.
*   Move the "Problemas que resolvemos" HTML from `app.html` to `problemas.component.html`.
*   Move the corresponding CSS from `app.css` to `problemas.component.css`.
*   Ensure the component uses `ChangeDetectionStrategy.OnPush`.
*   Update `app.html` to use the `<app-problemas>` tag.

## 4. Ticket: Create AIServices Component

**Description:** Create a standalone Angular component for the "AI Services" section.

**Tasks:**

*   Generate a new standalone component named `ai-services` in `src/app/components/ai-services`.
*   Move the "AI Services" HTML from `app.html` to `ai-services.component.html`.
*   Move the corresponding CSS from `app.css` to `ai-services.component.css`.
*   Ensure the component uses `ChangeDetectionStrategy.OnPush`.
*   Update `app.html` to use the `<app-ai-services>` tag.

## 5. Ticket: Create Consultoria Component

**Description:** Create a standalone Angular component for the "Consultoría" section.

**Tasks:**

*   Generate a new standalone component named `consultoria` in `src/app/components/consultoria`.
*   Move the "Consultoría" HTML from `app.html` to `consultoria.component.html`.
*   Move the corresponding CSS from `app.css` to `consultoria.component.css`.
*   Ensure the component uses `ChangeDetectionStrategy.OnPush`.
*   Update `app.html` to use the `<app-consultoria>` tag.

## 6. Ticket: Create HowItWorks Component

**Description:** Create a standalone Angular component for the "Cómo Funciona" section.

**Tasks:**

*   Generate a new standalone component named `how-it-works` in `src/app/components/how-it-works`.
*   Move the "Cómo Funciona" HTML from `app.html` to `how-it-works.component.html`.
*   Move the corresponding CSS from `app.css` to `how-it-works.component.css`.
*   Ensure the component uses `ChangeDetectionStrategy.OnPush`.
*   Update `app.html` to use the `<app-how-it-works>` tag.

## 7. Ticket: Create Testimonials Component

**Description:** Create a standalone Angular component for the "Testimonios" section.

**Tasks:**

*   Generate a new standalone component named `testimonials` in `src/app/components/testimonials`.
*   Move the "Testimonios" HTML from `app.html` to `testimonials.component.html`.
*   Move the corresponding CSS from `app.css` to `testimonials.component.css`.
*   Ensure the component uses `ChangeDetectionStrategy.OnPush`.
*   Update `app.html` to use the `<app-testimonials>` tag.

## 8. Ticket: Create Pricing Component

**Description:** Create a standalone Angular component for the "Precios" section.

**Tasks:**

*   Generate a new standalone component named `pricing` in `src/app/components/pricing`.
*   Move the "Precios" HTML from `app.html` to `pricing.component.html`.
*   Move the corresponding CSS from `app.css` to `pricing.component.css`.
*   Ensure the component uses `ChangeDetectionStrategy.OnPush`.
*   Update `app.html` to use the `<app-pricing>` tag.

## 9. Ticket: Create CallToAction Component

**Description:** Create a standalone Angular component for the final call-to-action section.

**Tasks:**

*   Generate a new standalone component named `call-to-action` in `src/app/components/call-to-action`.
*   Move the final call-to-action HTML from `app.html` to `call-to-action.component.html`.
*   Move the corresponding CSS from `app.css` to `call-to-action.component.css`.
*   Ensure the component uses `ChangeDetectionStrategy.OnPush`.
*   Update `app.html` to use the `<app-call-to-action>` tag.

## 10. Ticket: Create Footer Component

**Description:** Create a standalone Angular component for the footer section.

**Tasks:**

*   Generate a new standalone component named `footer` in `src/app/components/footer`.
*   Move the footer HTML from `app.html` to `footer.component.html`.
*   Move the footer CSS from `app.css` to `footer.component.css`.
*   Ensure the component uses `ChangeDetectionStrategy.OnPush`.
*   Update `app.html` to use the `<app-footer>` tag.

## 11. Ticket: Update app.component.html

**Description:** Update the main app.component.html file to include all the new components in the correct order.

**Tasks:**

*   Remove all the section-specific HTML from `app.html`.
*   Add the new component tags in the correct order to `app.html`.

## 12. Ticket: Clean up app.css

**Description:** Remove the section-specific CSS from `app.css`.

**Tasks:**

*   Remove all the CSS rules that have been moved to the individual component CSS files.
*   Keep only general styles that apply to the entire application (if any).

## 13. Ticket: Verify Refactoring

**Description:** Ensure the refactored application builds and displays the landing page correctly with all sections and styling intact.

**Tasks:**

*   Run `ng build` to check for compilation errors.
*   (Manual Step) View the application in the browser to verify the layout and styling.
*   (Manual Step) Check responsiveness on different screen sizes.