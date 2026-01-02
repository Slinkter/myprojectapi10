# Coding Standards

This document outlines the coding standards and conventions to be followed in the React Shopping Cart project. Adhering to these standards ensures code consistency, readability, and maintainability across the development team.

## 1. General Principles

*   **Readability:** Code should be easy to read and understand.
*   **Consistency:** Follow existing patterns and styles within the codebase.
*   **Maintainability:** Write code that is easy to modify and extend.
*   **Performance:** Optimize for performance where necessary, but prioritize clarity first.

## 2. Naming Conventions

*   **Folders (`kebab-case`):**
    *   Example: `shared/ui`, `entities/product`, `features/add-to-cart`.
*   **Files:**
    *   **Components (`PascalCase.jsx`):** Example: `Button.jsx`, `ProductCard.jsx`.
    *   **Hooks (`useCamelCase.js`):** Example: `useAuth.js`, `useWindowWidth.js`.
    *   **Redux Slices (`camelCaseSlice.js`):** Example: `productSlice.js`, `cartSlice.js`.
    *   **Services (`camelCaseClient.js`, `camelCaseService.js`):** Example: `apiClient.js`.
    *   **Utilities (`camelCase.js`):** Example: `formatPrice.js`.
    *   **Configuration (`kebab-case.js`):** Example: `app-config.js`.
*   **Variables, Functions, Instances (`camelCase`):**
    *   Example: `userName`, `fetchProducts`, `productData`.
*   **Constants (`SCREAMING_SNAKE_CASE`):**
    *   Example: `API_BASE_URL`, `MAX_ITEM_COUNT`.
*   **Classes (for non-React JS classes):** `PascalCase`.

## 3. Imports

*   **Absolute Imports:** Use absolute imports for better readability and easier refactoring. Configure path aliases (e.g., `@`) in `vite.config.js`.
    *   Example: `import { Button } from '@/shared/ui/Button';`
    *   **Avoid:** Excessive use of relative paths like `../../components/SomeComponent`.
*   **Order of Imports:**
    1.  External libraries (React, Redux, etc.)
    2.  Project-wide configurations and utilities (`@/app/`, `@/shared/`)
    3.  Components, hooks, or slices from other features/entities
    4.  Local modules (if any, within the same feature/entity slice)
*   **Destructuring:** Destructure imports where appropriate.

## 4. Components

*   **Functional Components:** Prefer functional components with Hooks.
*   **Props:**
    *   Destructure props at the component's function signature.
    *   Use `PropTypes` for type checking (if not using TypeScript).
*   **JSX:**
    *   Wrap JSX in parentheses if it spans multiple lines.
    *   Self-closing tags when no children.
    *   One prop per line if there are many.
*   **Conditional Rendering:** Prefer ternary operators for simple conditions, and `&&` for rendering elements conditionally. For complex conditions, extract to a helper function or use `if/else` outside JSX.

## 5. State Management (Redux Toolkit)

*   **Slices:** Use `createSlice` for defining reducers, actions, and initial state.
*   **Thunks:** Use `createAsyncThunk` for handling asynchronous logic.
*   **Selectors:** Write memoized selectors using `createSelector` (from `reselect`) for efficient state access.

## 6. Styling (Tailwind CSS)

*   **Utility-First:** Prefer direct application of Tailwind utility classes.
*   **`@apply`:** Use `@apply` in CSS files (e.g., `globals.css` or `components.css`) only for creating reusable component classes or for encapsulating complex utility combinations that are used repeatedly.
    *   Example: Define a `.btn` class for base button styles.
*   **Component-Specific Styles:** For unique styles to a component, create a CSS module (e.g., `ComponentName.module.css`) and import it, or use inline styles sparingly.

## 7. Error Handling

*   Implement robust error handling for API calls, user input, and unexpected scenarios.
*   Provide clear and user-friendly feedback for errors.
*   Log errors for debugging and monitoring.

## 8. Comments and Documentation

*   **JSDoc:** All functions, components, hooks, and services must be documented using JSDoc. (See **Phase 4: Code Documentation** for detailed standards and examples).
*   **Inline Comments:** Use sparingly, only for explaining complex logic or workarounds. Focus on *why* not *what*.

## 9. Linting and Formatting

*   Use ESLint with a consistent configuration (e.g., `eslint-config-react-app`) to enforce code quality.
*   Use Prettier for automatic code formatting to ensure consistent style.

---
This document is a living guide and will be updated as the project evolves and new best practices emerge.
