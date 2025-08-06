# Project Overview

[Provide a concise overview of the project's purpose and capabilities.]
This project is a landing page for IPIngeniería.net, a company offering services related to IT, Software Development, Artificial Intelligence and consulting for those 3 services. The landing page is designed for small and medium-sized enterprises (PYMEs) in Latin America. The page highlights the company's offerings, the problems they solve, their work process, customer testimonials, support plans, and contact information.


# Implemented Features

[Detail the style, design, and features implemented so far.]
style:
design:
features: Contact Form.

The landing page currently includes the following sections, styled with Tailwind CSS:

*   **Header:** Contains navigation links (Servicios, Clientes, Consultoría, Contacto) and a "Solicitar Demo" button. Uses inline styles.
*   **Hero:** Features a prominent heading ("Soluciones de Inteligencia Artificial para PYMEs en evolución digital"), a descriptive paragraph, and calls to action ("Solicitar Cotización," "Ver Servicios").
*   **Problemas que Resolvemos:** Lists common technological problems faced by businesses and how IPIngeniería.net addresses them (Conectividad Intermitente, Control de Accesos y CCTV, Procesos Manuales).
*   **Servicios de Inteligencia Artificial:** Details the specific AI services offered:
    *   Generative AI Integrations
    *   AI File Interactions with OCR
    *   AI Strategy & Consulting
    *   API & CRM Integrations
    *   Custom Chatbots & Automations (LLMs + RAG)
*   **Servicios de Consultoría:** Outlines consulting services in IT, Web Development, and AI Transformation.
*   **Cómo Trabajamos:** Explains the company's 3-step process (Evaluación, Implementación, Monitoreo & Optimización con IA).
*   **Lo que Dicen Nuestros Clientes:** Showcases a testimonial and client logos.
*   **Planes de Soporte:** Presents different support plans (Básico, Plus, Premium) with pricing and features.
*   **Solicitar Información:** A contact form for users to request more information.
*   **Footer:** Contains company logo, description, social media links (LinkedIn, Twitter, GitHub), and navigation links to services and company information.


# Current Plan: Update Components in app.html

Implement Contact Form Functionality: Make the "Solicitar Información" form actually work. This involves:
Creating a service to handle form submissions (e.g., sending data to a backend endpoint or a third-party service like Formspree or Netlify Forms).
Adding form validation to ensure the user provides necessary information.
Providing user feedback upon successful submission or errors.
Set up Automated Tests:
Unit Tests: Write unit tests for your services and components to ensure individual parts of your application work correctly in isolation.
End-to-End (E2E) Tests: Set up E2E tests to simulate user interactions and verify that the entire application flows as expected. This is especially important for the contact form to ensure submissions work correctly.
CI with GitHub Actions: Integrate your tests with GitHub Actions to automatically run tests whenever you push changes to your repository. This helps catch bugs early in the development process.

# Future Plans

Here are some potential features to consider for future development to enhance the landing page and provide more value:

## Blog Section

*   **Description:** Create a blog to share insights, case studies, and company news, improving SEO and demonstrating expertise.
*   **Steps Hint:** Set up a content management system or a static site generator for blog posts, design blog listing and detail pages, integrate with the main navigation.

## Client Case Studies Page

*   **Description:** Develop a dedicated page to showcase detailed examples of successful client projects and their outcomes.
*   **Steps Hint:** Design the case study page layout, create individual case study content, link from the testimonials section or navigation.
*   **Commit Suggestion:**

MESSAGE1=<
feat(case-studies): add client case studies page

Creates a dedicated page to showcase detailed client success stories.

Design the layout for the case studies page.
Add structure for individual case study content.
Link the case studies page from relevant sections.
>

## Services Detail Pages

*   **Description:** Create individual pages for each AI and consulting service to provide comprehensive information.
*   **Steps Hint:** Design a service detail page template, create content for each service, update service links on the landing page to point to the detail pages.

## Multi-language Support

*   **Description:** Implement the ability to display the website content in multiple languages to reach a wider audience.
*   **Steps Hint:** Choose an internationalization (i18n) library or framework, extract text strings for translation, provide language switching functionality.

## Interactive Elements

*   **Description:** Add interactive features like a chatbot or cost calculator to engage users and provide immediate value.
*   **Steps Hint:** Research and integrate a chatbot service or develop a custom one, design the user interface for interactive elements, integrate with relevant data or APIs.

