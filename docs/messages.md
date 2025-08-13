feat(ci): set up some unit test examples
    
    Set up headless browser and initial unit tests for CI.
    
    - Update header component tests
    - Update hero component tests
    - Incomplete update to call to action component

--- 

contact form

feat(contact-form): add validations &  notifications

-Implement a basic contact form with client-side validation using Reactive Forms.
-Integrate audio notification and SweetAlert2 for success feedback on submission.

--- ACTUAL
feat(contact-form): implement emailjs & update contact form 

Integrates EmailJS Service for sending contact form submissions and update the contact form.

- Use environment variables for EmailJS keys.
- Adds loading/error state handling and form reset.
- Adds new fields subject and phone with validators (need testing).

---

refactor(contact-form): Enhance contact form 

---

send mail to info@ipingenieria.net
https://youtu.be/r4RQ38EoLds?si=0BcnIWy3sDlTWWOu

alternative brevo for marketing.
https://www.brevo.com/es/pricing/marketing-platform/see-all-features/

--- FUTURE

format(contact-form): updated fields

--- 

feat(email-service): integrate emailjs

https://libraries.io/npm/emailjs

---

feat(blog): implement blog functionality

Sets up the infrastructure and initial pages for a blog section on the website.

Integrate a content management system or static site generator.
Design and implement blog listing and detail pages.
Add navigation links to the blog section.

---

feat(case-studies): add client case studies page

Creates a dedicated page to showcase detailed client success stories.

Design the layout for the case studies page.
Add structure for individual case study content.
Link the case studies page from relevant sections.

---

feat(case-studies): add client case studies page

Creates a dedicated page to showcase detailed client success stories.

Design the layout for the case studies page.
Add structure for individual case study content.
Link the case studies page from relevant sections.

---

feat(services): create service detail pages

Adds individual pages to provide comprehensive information for each service offered.

Design a template for service detail pages.
Generate placeholder content for each service page.
Update existing service links to point to the new detail pages.

feat(i18n): add multi-language support

Integrates internationalization capabilities to display content in multiple languages.

Implement an i18n library or framework.
Extract translatable text strings from the application.
Add a user interface for language switching.

---

IPIngenieria-ng20-TailwindV4-CI-AI-n8n

A modern, standalone Angular 20+ app for IPIngenieria.net, serving the Latin American market with IT, software development, and AI services. Features a responsive design with Tailwind CSS and includes unit tests, e2e testing, and CI setup. It also incorporates a functional contact form with backend automation powered by n8n for seamless integrations.


Features a functional contact form with backend automation powered by n8n, enabling seamless integrations with third-party APIs for tasks like sending email notifications, saving data to databases, or connecting with CMSs.