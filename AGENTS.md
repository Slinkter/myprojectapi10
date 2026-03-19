# AGENTS.md - Development Guide for AI Agents

This document provides essential information for AI agents working on this codebase.

## Project Overview

This is a React-based shopping cart application using Vite, Redux Toolkit, React Router, and Tailwind CSS. It follows a feature-based directory structure with absolute imports via the `@/` alias.

---

## 1. Build, Lint, and Test Commands

### Development
```bash
npm run dev        # Start development server at http://localhost:5173
```

### Build & Preview
```bash
npm run build           # Build for production (output in dist/)
npm run preview         # Preview production build locally
npm run predeploy       # Runs build before deploy
npm run deploy          # Deploy to GitHub Pages (gh-pages -d dist)
```

### Linting
```bash
npm run lint           # Run ESLint with all extensions (js,jsx)
```

### Testing
**Note:** Testing dependencies (Vitest, React Testing Library) are documented in `src/docs/5_Quality/TESTING_STRATEGY.md` but not yet installed. To run tests:
```bash
# Install test dependencies first (if needed)
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

# Run all tests
npx vitest

# Run a single test file
npx vitest run src/entities/product/model/productSlice.test.js

# Run tests in watch mode
npx vitest
```

---

## 2. Code Style Guidelines

### Directory & File Naming

| Type | Convention | Example |
|------|-----------|---------|
| Folders | kebab-case | `shared/ui`, `entities/product` |
| Components | PascalCase + .jsx | `ProductTile.jsx`, `Header.jsx` |
| Hooks | useCamelCase.js | `useAuth.js`, `useWindowWidth.js` |
| Redux Slices | camelCaseSlice.js | `productSlice.js`, `cartSlice.js` |
| API Clients | camelCaseClient.js | `apiClient.js` |
| Utilities | camelCase.js | `priceFormatter.js` |
| Config | kebab-case.js | `appConfig.js` |

### Variables, Functions & Constants
- **Variables/Functions:** `camelCase` - `userName`, `fetchProducts`, `productData`
- **Constants:** `SCREAMING_SNAKE_CASE` - `API_BASE_URL`, `MAX_ITEM_COUNT`
- **Classes:** `PascalCase` (if used)

### Imports

**Always use absolute imports** with the `@/` alias (configured in `vite.config.js` and `jsconfig.json`):
```jsx
// Good
import { Button } from '@/shared/ui/Button';
import { fetchProducts } from '@/entities/product/model/productSlice';

// Avoid
import Button from '../../../../shared/ui/Button';
```

**Import Order:**
1. External libraries (React, Redux, React Router)
2. Project-wide configs and utilities (`@/app/`, `@/shared/`)
3. Components/hooks/slices from other features/entities
4. Local modules within the same feature/entity

### Components

- Use **functional components** with Hooks exclusively
- Destructure props at function signature
- Use **PropTypes** for type checking (defined in `prop-types` package)
- JSX formatting:
  - Wrap multi-line JSX in parentheses
  - Use self-closing tags when no children
  - One prop per line for many props

```jsx
// Good
function ProductTile({ id, title, price, onAddToCart }) {
  return (
    <div className="product-tile">
      <h3>{title}</h3>
      <span>${price}</span>
      <button onClick={() => onAddToCart(id)}>Add</button>
    </div>
  );
}

ProductTile.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductTile;
```

### Conditional Rendering
- Ternary operators for simple conditions
- `&&` for rendering elements conditionally
- Extract complex conditions to helper functions

### State Management (Redux Toolkit)

- Use `createSlice` for reducers, actions, and initial state
- Use `createAsyncThunk` for async logic (API calls)
- Write selectors for state access

```javascript
// entities/product/model/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "@/shared/api/apiClient";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const data = await apiService.get("/products");
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
```

### Styling (Tailwind CSS)

- Use Tailwind utility classes directly
- Use `@apply` in CSS files only for reusable component classes or complex utility combinations
- Create CSS modules for unique component styles if needed

### Error Handling

- Implement robust error handling for all API calls
- Provide user-friendly error messages (use `ErrorComponent` from `@/shared/ui`)
- Log errors for debugging

```javascript
// Handle in thunk
.caseCase(fetchProducts.rejected, (state, action) => {
  state.status = "failed";
  state.error = action.error.message || "Failed to fetch products";
});
```

### Comments & Documentation

- Use **JSDoc** for all functions, components, hooks, and services
- Focus on *why*, not *what*, in inline comments
- Document async thunks with description, name, and return type

```javascript
/**
 * @description Asynchronous thunk for fetching products from the API.
 * @name fetchProducts
 * @returns {Promise<Array>} A promise that resolves to an array of products.
 */
```

---

## 3. Project Structure

```
src/
├── app/           # App entry, store, styles
├── entities/     # Business entities (product, cart) with model/ui
├── features/     # Feature-specific modules (add-to-cart)
├── pages/        # Page components (Home, Cart)
├── shared/       # Shared code: api, config, lib, ui
├── widgets/      # Composite widgets (Header, CartSummary)
└── docs/         # Project documentation
```

---

## 4. Key Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.js` | Vite config with `@/` alias |
| `jsconfig.json` | Path aliases for IDE support |
| `.eslintrc.cjs` | ESLint rules (React, React Hooks, React Refresh) |
| `tailwind.config.js` | Tailwind configuration |
| `postcss.config.js` | PostCSS configuration |

---

## 5. Running Lint Before Commit

Always run lint before committing:
```bash
npm run lint
```

Fix any errors or warnings before submitting code.
