# Testing Strategy

This document outlines the testing strategy for the React Shopping Cart application, covering different levels of testing to ensure software quality and reliability.

## 1. Testing Pyramid

We will follow the testing pyramid approach, which suggests a larger number of low-level tests (unit tests), a smaller number of mid-level tests (integration tests), and an even smaller number of high-level tests (end-to-end tests).

*   **Unit Tests:** Fast, isolated tests for individual functions, components, and Redux slices.
*   **Integration Tests:** Verify interactions between multiple units (e.g., a component and its Redux store, or two interacting components).
*   **End-to-End (E2E) Tests:** Simulate real user scenarios to ensure the entire application flows correctly from start to finish.

## 2. Tools and Frameworks

*   **Unit & Integration Testing:**
    *   **Vitest:** A fast, next-generation testing framework.
    *   **React Testing Library:** For testing React components in a way that simulates user interactions and focuses on accessibility.
    *   **@testing-library/jest-dom:** For custom Jest matchers to extend testing capabilities.
*   **End-to-End Testing (Future Consideration):**
    *   **Cypress** or **Playwright:** For simulating full user journeys across the application.

## 3. Unit Testing

### Focus:
*   Individual functions (`formatPrice`).
*   Redux slices (reducers, selectors, thunks).
*   Small, pure presentational components (`shared/ui/*`).

### Guidelines:
*   Tests should be isolated: mock external dependencies (API calls, Redux store interactions).
*   Test expected outputs for given inputs.
*   Test edge cases (e.g., empty arrays, null values, error states).

### Example (Redux Slice):

```javascript
// entities/product/model/productSlice.test.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer, { fetchProducts } from './productSlice';
import { vi } from 'vitest';
import apiClient from '@/shared/api/apiClient'; // Assuming aliased import

vi.mock('@/shared/api/apiClient'); // Mock the API client

describe('productSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        products: productReducer,
      },
    });
  });

  it('should handle fetchProducts.pending correctly', () => {
    store.dispatch(fetchProducts.pending());
    const state = store.getState().products;
    expect(state.status).toBe('loading');
    expect(state.error).toBeNull();
  });

  it('should handle fetchProducts.fulfilled correctly', async () => {
    const mockProducts = [{ id: 1, title: 'Test Product' }];
    apiClient.get.mockResolvedValue(mockProducts); // Mock successful API call

    await store.dispatch(fetchProducts());

    const state = store.getState().products;
    expect(state.status).toBe('succeeded');
    expect(state.data).toEqual(mockProducts);
    expect(state.error).toBeNull();
  });

  it('should handle fetchProducts.rejected correctly', async () => {
    const errorMessage = 'Network Error';
    apiClient.get.mockRejectedValue(new Error(errorMessage)); // Mock failed API call

    await store.dispatch(fetchProducts());

    const state = store.getState().products;
    expect(state.status).toBe('failed');
    expect(state.error).toBe(errorMessage);
    expect(state.data).toEqual([]); // Data should remain initial or previous successful state
  });
});
```

## 4. Integration Testing

### Focus:
*   How components interact with Redux store.
*   How multiple components render together (e.g., `ProductList` rendering `ProductTile`s).
*   Router interactions.

### Guidelines:
*   Render components with a real (or mock) Redux store and router.
*   Simulate user events and assert UI changes.
*   Focus on public APIs of components (what the user sees and interacts with).

### Example (Component with Redux):

```javascript
// widgets/product-list/ui/ProductList.test.jsx
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import productReducer from '@/entities/product/model/productSlice'; // Assuming aliased import
import ProductList from './ProductList'; // Assuming a ProductList component

describe('ProductList integration', () => {
  const mockStore = configureStore({
    reducer: {
      products: productReducer,
    },
    preloadedState: {
      products: {
        data: [
          { id: 1, title: 'Product 1', price: 10, image: 'img1.jpg', category: 'cat' },
          { id: 2, title: 'Product 2', price: 20, image: 'img2.jpg', category: 'cat' },
        ],
        status: 'succeeded',
        error: null,
      },
    },
  });

  it('should render products from the store', () => {
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <ProductList />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  // Test loading state, error state, and interaction with add to cart (mocking dispatch)
});
```

## 5. End-to-End (E2E) Testing (Future)

### Focus:
*   Critical user journeys (e.g., "browse products -> add to cart -> view cart -> checkout").
*   Ensure all parts of the system (frontend, API, database) work together seamlessly.

### Guidelines:
*   Tests run against a deployed (staging or production-like) environment.
*   Focus on user perspective and business value.
*   Keep E2E test suite small and focused on high-impact flows.

## 6. Code Coverage

*   Aim for a reasonable code coverage percentage (e.g., 80% for statements, branches, functions, and lines).
*   Use coverage reports to identify untested areas, but do not use coverage as the sole metric for test quality.

## 7. Test Review

*   All pull requests should include relevant tests.
*   Tests should be reviewed alongside the feature code.
*   Tests should be clear, concise, and easy to understand.
