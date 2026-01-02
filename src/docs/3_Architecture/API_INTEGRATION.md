# API Integration

This document describes how the application integrates with external RESTful APIs, focusing on the `apiClient` service and data modeling.

## 1. API Client (`shared/api/apiClient.js`)

The `apiClient` service is the central point for all outgoing API requests. It abstracts away the details of `fetch` or `axios` and provides a consistent interface for interacting with backend services.

### Responsibilities:
*   **Base URL Management:** Uses `API_BASE_URL` from `shared/config/app-config.js` (once implemented) to construct full API endpoints.
*   **Request Methods:** Provides wrapper methods for common HTTP verbs (GET, POST, PUT, DELETE, PATCH). Currently, only `get` is implemented.
*   **Error Handling:** Catches network errors and HTTP response errors, providing a consistent error format to the consuming layers.
*   **Request/Response Interception (Future):** Can be extended to include:
    *   Authentication token injection.
    *   Logging requests and responses.
    *   Response data transformation.

### Example Usage:

```javascript
// In a Redux thunk or service layer
import apiClient from '@/shared/api/apiClient';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  try {
    const products = await apiClient.get('/products');
    return products;
  } catch (error) {
    // Handle error (e.g., dispatch a rejected action)
    console.error('Failed to fetch products:', error);
    throw error;
  }
});
```

## 2. API Endpoints

The application primarily consumes data from the [Fake Store API](https://fakestoreapi.com/).

### Currently Used Endpoints:

*   **`GET /products`:** Fetches a list of all products.
    *   **Response Structure (example):**
        ```json
        [
          {
            "id": 1,
            "title": "Fjallraven, Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest...",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            }
          },
          // ... more products
        ]
        ```

## 3. Data Models

To maintain type safety and consistency, especially if TypeScript were introduced, it's crucial to define data models for API responses.

### `Product` Model (Conceptual JavaScript Object Structure):

```javascript
/**
 * @typedef {object} Product
 * @property {number} id - Unique identifier for the product.
 * @property {string} title - The name of the product.
 * @property {number} price - The price of the product.
 * @property {string} description - A detailed description of the product.
 * @property {string} category - The category the product belongs to.
 * @property {string} image - URL of the product image.
 * @property {object} rating - Rating information for the product.
 * @property {number} rating.rate - The average rating.
 * @property {number} rating.count - The number of ratings.
 */
```

## 4. Error Handling Strategy

The `apiClient` is designed to throw errors for non-`2xx` HTTP responses or network issues. These errors should be caught by the consuming thunks or services.

*   **Network Errors:** Handled by the `catch` block in `apiClient`.
*   **HTTP Errors (e.g., 404 Not Found, 500 Internal Server Error):** The `apiClient` checks `response.ok` and throws an error if `false`. The error message should include the HTTP status.
*   **User Feedback:** Components consuming these thunks should handle `rejected` states to display appropriate error messages to the user (e.g., using an `ErrorComponent`).

## 5. Future Enhancements

*   **Authentication:** Implement interceptors in `apiClient` to add `Authorization` headers for protected routes.
*   **Caching:** Integrate a caching mechanism to reduce redundant API calls.
*   **Request Cancellation:** Add support for canceling ongoing API requests to prevent race conditions and improve performance.
*   **GraphQL Integration:** If the project were to adopt GraphQL, a separate client (e.g., Apollo Client, Relay) would be introduced alongside or instead of `apiClient`.
