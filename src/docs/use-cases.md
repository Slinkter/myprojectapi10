# Use Cases

This document describes the key interactions users have with the application in terms of use cases.

## Use Case: View Product List

*   **Actor:** Customer
*   **Description:** The customer wants to browse available products.
*   **Preconditions:**
    *   The customer has access to the application.
    *   The API service is available.
*   **Main Flow:**
    1.  The customer navigates to the home page.
    2.  The system displays a loading indicator.
    3.  The system fetches products from the API.
    4.  The system displays a list of products with images, titles, categories, and prices.
*   **Alternative Flows:**
    *   **3a. API call fails:**
        1.  The system displays an error message.
*   **Postconditions:** The customer sees a list of products or an error message.

## Use Case: Add Product to Cart

*   **Actor:** Customer
*   **Description:** The customer wants to add a product to their shopping cart.
*   **Preconditions:**
    *   The customer is viewing the product list.
    *   The product is available.
*   **Main Flow:**
    1.  The customer clicks the "Add to Cart" button on a product tile.
    2.  The system optimistically updates the UI to show the product in the cart (e.g., button changes to "Remove", cart count increases).
    3.  The system dispatches an action to add the product to the Redux store.
    4.  (Optional: If there was a backend cart API) The system sends an API request to add the item to the backend cart.
    5.  (Optional: If API request succeeds) The system confirms the cart update.
*   **Alternative Flows:**
    *   **5a. API request fails (backend cart):**
        1.  The system reverts the optimistic UI change.
        2.  The system displays an error message.
*   **Postconditions:** The product is added to the cart, and the UI reflects the change (optimistically).

## Use Case: View Shopping Cart

*   **Actor:** Customer
*   **Description:** The customer wants to review the items in their shopping cart and see the total cost.
*   **Preconditions:**
    *   The customer has added items to the cart.
*   **Main Flow:**
    1.  The customer clicks on the cart icon in the header.
    2.  The system navigates to the cart page.
    3.  The system displays a list of all products in the cart, each with its image, title, and price.
    4.  The system displays the total number of items and the total price of all items.
*   **Alternative Flows:**
    *   **3a. Cart is empty:**
        1.  The system displays a message indicating the cart is empty.
        2.  The system provides a link to the home page ("Shop Now").
*   **Postconditions:** The customer views the contents and summary of their shopping cart.

## Use Case: Remove Product from Cart

*   **Actor:** Customer
*   **Description:** The customer wants to remove an item from their shopping cart.
*   **Preconditions:**
    *   The customer is viewing the cart page.
    *   The cart contains the product to be removed.
*   **Main Flow:**
    1.  The customer clicks the "Remove" button (or trash icon) on a cart item.
    2.  The system optimistically updates the UI to remove the product from the cart.
    3.  The system dispatches an action to remove the product from the Redux store.
    4.  (Optional: If there was a backend cart API) The system sends an API request to remove the item from the backend cart.
    5.  (Optional: If API request succeeds) The system confirms the cart update.
*   **Alternative Flows:**
    *   **5a. API request fails (backend cart):**
        1.  The system reverts the optimistic UI change.
        2.  The system displays an error message.
*   **Postconditions:** The product is removed from the cart, and the UI reflects the change (optimistically).
