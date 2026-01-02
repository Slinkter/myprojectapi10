# Project Structure

The project follows a feature-based structure, with a clear separation of concerns between the different parts of the application.

```
src/
├── components/      # Reusable UI components
│   ├── CartTile.jsx
│   ├── ErrorComponent.jsx
│   ├── Header.jsx
│   ├── ProductTile.jsx
│   ├── SkeletonTile.jsx
│   └── docs/
│       ├── COLOR_GUIDELINES.md
│       ├── IMPROVEMENTS_REPORT.md
│       └── STRUCTURE.md
├── pages/           # Page components (Home, Cart)
│   ├── Cart.jsx
│   └── Home.jsx
├── services/        # API service layer
│   └── api.js
├── store/           # Redux setup (store, slices)
│   └── slices/
│       ├── cart-slice.js
│       ├── product-slice.js
│       └── store.js
├── config.js        # Environment configuration
└── utils/           # Utility functions
    └── format.js
```

## Components

The `components` directory contains reusable UI components that are used throughout the application.

## Pages

The `pages` directory contains the main pages of the application, such as the Home page and the Cart page.

## Services

The `services` directory contains the API service layer, which is responsible for all communication with the backend API.

## Store

The `store` directory contains the Redux setup, including the store configuration and the different slices of the state.

## Config

The `config.js` file contains the environment configuration, such as the API base URL.

## Utils

The `utils` directory contains utility functions that are used throughout the application.