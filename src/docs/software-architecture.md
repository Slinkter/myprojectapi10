# Software Architecture

This document describes the architectural decisions and structure of the React Shopping Cart application, following the Feature-Sliced Design (FSD) methodology.

## Architectural Style: Feature-Sliced Design (FSD)

FSD is a scalable architectural approach for frontend applications that organizes code by domain layers (app, pages, widgets, features, entities, shared) and slices within those layers.

### Core Principles of FSD:

*   **Layered Architecture:** Code is divided into distinct layers, each with specific responsibilities. Dependencies flow downwards (e.g., `pages` can depend on `widgets`, but `widgets` cannot depend on `pages`).
*   **Feature Slicing:** Each feature (e.g., "authentication", "product-listing") is a self-contained unit, reducing coupling between different parts of the application.
*   **Encapsulation:** Modules within a slice encapsulate their internal logic and expose only what's necessary, promoting modularity and reusability.

## Project Structure Overview

```
src/
├── app/                  # Application-level logic (store, router, providers)
├── pages/                # Top-level views (Home, Cart)
├── widgets/              # Reusable complex UI blocks/sections (Header, ProductList)
├── features/             # Self-contained business logic with UI (e.g., AddToCart, RemoveFromCart)
├── entities/             # Core domain models and their UI representations (Product, CartItem)
├── shared/               # Reusable, domain-agnostic code
│   ├── ui/               # Generic UI components (Button, Card, Skeleton)
│   ├── lib/              # Utility functions, helpers (formatPrice)
│   ├── api/              # API client for external services
│   └── config/           # Environment-specific configurations
└── docs/                 # Project documentation
```

## Layers Description

### `app/`
Contains code relevant to the entire application lifecycle and setup, such as:
*   Redux store configuration.
*   React Router setup.
*   Global providers (e.g., Redux Provider).

### `pages/`
These are the top-level components that represent full-screen views in the application. They compose `widgets` and `features` to build a complete page. They often act as "Container" components, orchestrating data fetching and state.

### `widgets/`
Larger, reusable blocks of UI that combine multiple `features` or `entities`. Examples include `Header`, `ProductList`, `CartSummary`. They often have their own state and business logic but are intended to be placed directly into `pages`.

### `features/`
Small, self-contained pieces of business logic that perform a specific user action or provide a specific piece of functionality. They might interact with `entities` or `shared` services. Examples: `AddToCartButton`, `RemoveFromCartButton`.

### `entities/`
Represents core domain objects (data structures and their associated logic/UI). For this project, `Product` and `CartItem` would be examples. An entity might contain its own Redux slice, components for displaying itself, etc.

### `shared/`
This layer contains truly universal, domain-agnostic code that can be reused across any part of the application without introducing domain-specific dependencies.
*   `shared/ui`: Generic, dumb UI components (e.g., `Button`, `Card`, `ErrorComponent`, `SkeletonTile`). These receive data via props and emit events.
*   `shared/lib`: Utility functions, formatters (`formatPrice`), constants.
*   `shared/api`: The `apiClient` service, responsible for making HTTP requests.
*   `shared/config`: Environment variables, API base URLs.

## Data Flow

Data generally flows downwards:
*   `pages` fetch data (via `features` or directly from `entities` if they manage state).
*   `pages` pass data to `widgets`.
*   `widgets` pass data to `features` and `entities`.
*   `features` and `entities` use `shared` components and utilities.

Actions (e.g., user clicks) typically flow upwards from `shared/ui` components through `features` to `widgets` or `pages`, eventually dispatching actions to the Redux store.

## Benefits of FSD

*   **Scalability:** Easier to add new features without affecting existing ones.
*   **Maintainability:** Clear separation of concerns makes code easier to understand, debug, and refactor.
*   **Reusability:** Promotes the creation of highly reusable components and logic.
*   **Team Collaboration:** Facilitates parallel development by different teams on different features.

## Decisions and Trade-offs

*   **Initial Overhead:** FSD can introduce a steeper learning curve and more boilerplate initially compared to simpler architectures.
*   **Flexibility vs. Strictness:** While FSD provides strict rules, there's flexibility to adapt it to project needs. This project will adhere closely to the FSD principles for maximum benefit.
