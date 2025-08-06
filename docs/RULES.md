# Conventional Commits Rules

This document outlines the rules for creating commit messages based on the Conventional Commits specification. Following these guidelines ensures a clear, readable, and maintainable commit history.

## Commit Message Structure

A commit message should be structured as follows:

```
type(scope): subject

body

footer
```
### Type

The `type` is a mandatory word that describes the nature of the change. It must be one of the following:

*   **feat**: A new feature
*   **fix**: A bug fix
*   **docs**: Documentation only changes
*   **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
*   **refactor**: A code change that neither fixes a bug nor adds a feature
*   **perf**: A code change that improves performance
*   **test**: Adding missing tests or correcting existing tests
*   **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
*   **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
*   **chore**: Routine tasks, maintenance, or code cleanup that doesn't fit into other categories

### Scope

The `scope` is an optional phrase providing context for the change. It should be enclosed in parentheses and use lowercase letters. Examples include a component name, a module, or a file path.

### Subject

The `subject` is a concise description of the change. It is mandatory and should follow these rules:

*   Use imperative, present-tense language (e.g., "add", "change", "fix" instead of "added", "changed", "fixed").
*   Do not capitalize the first letter.
*   Do not end with a period.
*   Keep it brief (ideally 50 characters or less).

### Body

The `body` is an optional, longer description that provides additional context about the change. It should explain the motivation for the change and contrast it with previous behavior.

*   Use imperative, present-tense language.
*   Wrap lines at 72 characters.
*   Separate the body from the subject with a blank line.

### Footer

The `footer` is an optional section that can contain information about breaking changes, closed issues, or other metadata.

*   **Breaking Changes**: Indicate breaking changes by starting a paragraph with `BREAKING CHANGE:` followed by a description of the change and the rationale.
*   **Issue References**: Reference related issues using keywords like `Closes`, `Fixes`, or `Resolves` followed by the issue number (e.g., `Closes #123`).

## Examples of Good Commit Messages
