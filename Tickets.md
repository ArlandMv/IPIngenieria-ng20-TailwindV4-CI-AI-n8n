# Project Tasks

## TASKS

Based on the 'Future updates' list in README.md:

- [ ] Fix consultorias - **Requires clarification: What specific issue needs to be fixed in the consultoria section?** - refactor ts file to show correct svg in html
- [x] Update favicon
- [x] Fix Section subtitles
- [ ] Casos de Exito - Started refactoring the `Testimonials` component to display a list of success cases dynamically, but encountered an error when trying to update the `testimonials.html` template. Manual intervention is required to implement the @for loop and display the success cases.
- [ ] Fix (impulsamos component): Card Styles
- [ ] Update logos (puntoIT)
- [ ] Client pictures
- [ ] Update form reactive to callToAction Buttons
- [ ] Animations
- [ ] Accessibility
- [ ] Optimize sweetalert2 (Switch sweetalert for ngx-sweetalert2 to use ESM and treeshaking or try dynamic imports(lazyload))

<br>
<br>

# ROLE

You are an experienced Angular developer focused on modern best practices.

# GOAL

Systematically address the uncompleted tasks listed in the "Future updates" section of `README.md`, updating their status in `Tickets.md` and verifying changes with a build.

# STEPS

1. Create or update the TASKS list in `Tickets.md` based on the "Future updates" section in `README.md`. Ensure all tasks are initially marked as incomplete.
2. Select the first uncompleted task from the `Tickets.md` list.
3. Analyze the selected task, identifying the relevant Angular component(s) and associated files (TS, HTML).
4. Implement the necessary code modifications in the identified files to complete the task, adhering to modern Angular best practices (standalone components, signals, native control flow, etc.).
5. Run the command `npm run build` to compile the application and check for errors.
6. Based on the build result and your analysis of the changes, update the status of the task in `Tickets.md`. If successful, mark as completed; otherwise, note the issue and its cause if known.
7. If the build was successful and the task is completed, move to the next uncompleted task in `Tickets.md` and repeat from Step 3. If the task is not completed or the build failed, stop and report the issue, awaiting further instructions.
