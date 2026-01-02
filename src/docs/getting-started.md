# Getting Started

This document provides instructions for setting up the development environment and running the React Shopping Cart application locally.

## 1. Prerequisites

Before you begin, ensure you have the following installed on your system:

*   **Node.js:** Version 18.x or higher. You can download it from [nodejs.org](https://nodejs.org/).
*   **pnpm:** A fast, disk space efficient package manager. If not installed, you can install it via npm:
    ```bash
    npm install -g pnpm
    ```
    (Note: If you prefer npm, you can use `npm install` and `npm run ...` commands instead of `pnpm install` and `pnpm run ...`).
*   **Git:** For cloning the repository.

## 2. Setup Instructions

Follow these steps to get the project up and running on your local machine:

### 2.1. Clone the Repository

Open your terminal or command prompt and clone the project repository:

```bash
git clone https://github.com/slinkter/myprojectapi0x.git
```

### 2.2. Navigate to the Project Directory

Change into the newly created project directory:

```bash
cd myprojectapi0x
```

### 2.3. Install Dependencies

Install all the required project dependencies using pnpm:

```bash
pnpm install
```

### 2.4. Start the Development Server

Once the dependencies are installed, you can start the development server:

```bash
pnpm run dev
```

This command will:
*   Start the Vite development server.
*   Open the application in your default web browser (usually at `http://localhost:5173`).
*   Provide Hot Module Replacement (HMR) for a fast development experience.

## 3. Building for Production

To create a production-ready build of the application, run:

```bash
pnpm run build
```

This command will:
*   Bundle your application's assets into the `dist/` directory.
*   Optimize the code for performance.

## 4. Previewing the Production Build

You can preview the production build locally before deploying it:

```bash
pnpm run preview
```

This will start a local server serving the contents of the `dist/` folder.

## 5. Deployment

To deploy the application to GitHub Pages (as configured in `package.json`), run:

```bash
pnpm run deploy
```

*(Note: Ensure your `package.json`'s `homepage` field is correctly set and your GitHub Actions are configured if using CI/CD.)*
