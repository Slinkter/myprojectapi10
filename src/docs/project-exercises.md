# Project Exercises

This document outlines practical exercises designed to familiarize new team members with the project's codebase, architecture, and development workflow. These exercises are structured to facilitate hands-on learning and reinforce understanding of key concepts.

## Exercise 1: Implement a New Product Field

**Objective:** Understand how to modify existing `entities` and `features` to support new data.

**Task:** Add a `brand` field to the `Product` entity and display it on the `ProductTile`.

1.  **Modify `api-integration.md`:** Update the conceptual `Product` model to include a `brand: string` property.
2.  **Simulate API Response:** Imagine the Fake Store API now returns a `brand` field. Update `productSlice.js` (mentally, or if a local mock is set up) to acknowledge this.
3.  **Update `ProductTile.jsx`:**
    *   Modify `ProductTile.propTypes` to include `brand`.
    *   Render the `product.brand` below the product title.
4.  **Verify:** Run the application and confirm the brand is displayed.

## Exercise 2: Create a New Feature - "Add to Wishlist"

**Objective:** Practice implementing a new `feature` following FSD principles, including Redux state management and optimistic UI.

**Task:** Create a new button on `ProductTile` that allows users to add/remove products from a wishlist.

1.  **New Redux Slice:**
    *   Create `entities/wishlist/model/wishlistSlice.js`.
    *   Define initial state, `add` and `remove` async thunks (simulating API calls with `setTimeout`), and handle optimistic UI.
2.  **Update Root Reducer:** Add the new `wishlistSlice` to `src/app/store.js`.
3.  **New Feature Component:**
    *   Create `features/add-to-wishlist/ui/AddToWishlistButton.jsx`.
    *   This component will dispatch the `add` or `remove` actions from `wishlistSlice`.
    *   It should toggle its appearance (e.g., heart icon) based on whether the product is in the wishlist.
4.  **Integrate:** Import `AddToWishlistButton` into `ProductTile.jsx` and render it.
5.  **New Page (Optional but recommended):** Create `pages/WishlistPage.jsx` to display the contents of the wishlist, similar to `Cart.jsx`.
6.  **Verify:** Add items to wishlist, remove them, and check the state on the wishlist page.

## Exercise 3: Refactor Layout - Global Container

**Objective:** Understand and implement global layout patterns.

**Task:** Implement a consistent page layout using a global `container` class.

1.  **Define `container` class:** In a central CSS file (e.g., `src/index.css` or `src/styles/globals.css` if it existed), define a `container` class using `@apply` for `max-width`, `margin-x: auto`, and responsive `padding-x`.
2.  **Apply to `app/App.jsx`:** Wrap the main routing content (`<Outlet />`) with a `div` that uses this global `container` class.
3.  **Remove local containers:** Remove `page-container` from `Cart.jsx` and any similar custom padding/width from `Home.jsx`.
4.  **Verify:** Check that both `Home` and `Cart` pages now have a consistent max-width and horizontal padding across all breakpoints.

## Exercise 4: Create a Reusable Button Component

**Objective:** Practice creating `shared/ui` components and leveraging Tailwind's `@apply`.

**Task:** Create a generic `Button` component in `shared/ui` that can be reused across the application.

1.  **Define Base Styles:** Create a CSS file (e.g., `src/styles/components.css`) and define a base `.btn` class and variant classes (`.btn-primary`, `.btn-destructive`, `.btn-outline`) using `@apply` for common Tailwind utilities.
2.  **Create `shared/ui/Button.jsx`:**
    *   This component should accept `children`, `onClick`, and a `variant` prop (`'primary'`, `'destructive'`, `'outline'`).
    *   It should apply the appropriate CSS classes based on the `variant` prop.
    *   Use `PropTypes` for validation.
3.  **Refactor Existing Buttons:**
    *   Replace the existing button in `ProductTile.jsx` with the new `Button` component.
    *   Replace the buttons in `Cart.jsx` and `CartTile.jsx` with the new `Button` component.
4.  **Verify:** Ensure all buttons function and appear as expected.
