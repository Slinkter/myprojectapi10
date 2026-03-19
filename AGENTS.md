# AGENTS.md - Development Guide for AI Agents

This document provides essential information for AI agents working on this codebase.

## Project Overview

React-based shopping cart application using Vite, Redux Toolkit, React Router, and Tailwind CSS. Feature-based directory structure with absolute imports via `@/` alias.

---

## 1. Build, Lint, and Test Commands

### Development
```bash
npm run dev        # Start dev server at http://localhost:5173
```

### Build & Preview
```bash
npm run build           # Build for production (output: dist/)
npm run preview         # Preview production build locally
npm run deploy          # Deploy to GitHub Pages (gh-pages -d dist)
```

### Linting
```bash
npm run lint           # Run ESLint (js,jsx) - max warnings 0
```

### Testing
Testing not yet installed. To enable tests:
```bash
# Install dependencies
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

# Run tests
npx vitest run src/entities/product/model/productSlice.test.js
npx vitest              # Watch mode
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
| Utilities/Config | camelCase.js | `priceFormatter.js`, `appConfig.js` |

### Variables, Functions & Constants
- **Variables/Functions:** `camelCase` - `userName`, `fetchProducts`
- **Constants:** `SCREAMING_SNAKE_CASE` - `API_BASE_URL`, `MAX_ITEM_COUNT`

### Imports (Always Use Absolute Paths)
```jsx
// Good
import { Button } from '@/shared/ui/Button';
import { fetchProducts } from '@/entities/product/model/productSlice';

// Avoid relative paths
import Button from '../../../../shared/ui/Button';
```

**Import Order:** External libs → Project configs/utilities → Features/Entities → Local modules

### Components
- Functional components with Hooks only
- Destructure props at function signature
- Use PropTypes for type checking
- JSX: wrap multi-line in parentheses, self-closing tags when possible

```jsx
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

### State Management (Redux Toolkit)
Use `createSlice` and `createAsyncThunk`:
```javascript
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const data = await apiService.get("/products");
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState: { data: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.status = "loading"; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});
```

### Styling
- Tailwind utility classes directly
- Use `@apply` in CSS for reusable classes only

### Error Handling
- Handle all API errors with user-friendly messages
- Use `ErrorComponent` from `@/shared/ui`
- Log errors for debugging

### Documentation
- Use JSDoc for functions, components, hooks, services
- Focus on *why*, not *what*

---

## 3. Project Structure

```
src/
├── app/           # App entry, store, styles
├── entities/      # Business entities (product, cart) - model + ui
├── features/      # Feature-specific modules (add-to-cart)
├── pages/        # Page components (Home, Cart)
├── shared/       # Shared: api, config, lib, ui
├── widgets/      # Composite widgets (Header, CartSummary)
└── docs/         # Documentation
```

---

## 4. Key Configuration

| File | Purpose |
|------|---------|
| `vite.config.js` | Vite config with `@/` alias |
| `jsconfig.json` | Path aliases for IDE |
| `.eslintrc.cjs` | ESLint rules |
| `tailwind.config.js` | Tailwind config |

---

## 5. Before Commit

Always run `npm run lint` and fix errors/warnings before committing.