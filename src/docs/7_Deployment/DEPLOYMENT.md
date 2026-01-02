# Deployment

This document outlines the deployment strategy and procedures for the React Shopping Cart application.

## 1. Build Process

The application is built using Vite, which bundles the React application for production.

*   **Command:** `pnpm run build`
*   **Output:** Generates optimized static assets (HTML, CSS, JavaScript, images) in the `dist/` directory.

The build process includes:
*   Tree-shaking to remove unused code.
*   Minification of JavaScript, CSS, and HTML.
*   Asset hashing for cache busting.

## 2. Deployment Environment

The application is a Single Page Application (SPA) that consists entirely of static files. This makes it suitable for deployment on various static hosting services.

*   **Recommended Hosting:**
    *   **GitHub Pages:** Excellent for open-source projects or simple deployments.
    *   **Vercel / Netlify:** Cloud platforms offering seamless deployments for SPAs, CDN, and custom domains.
    *   **AWS S3 + CloudFront:** For highly scalable and robust static site hosting on AWS.
    *   **NGINX / Apache:** Can serve the `dist/` folder from a traditional web server.

## 3. Deployment Procedure (GitHub Pages Example)

This project is configured to deploy to GitHub Pages, which is triggered via a script in `package.json`.

### 3.1. Prerequisites for GitHub Pages

*   **`homepage` field in `package.json`:** Ensure this field is set to your GitHub Pages URL (e.g., `"homepage": "https://<your-username>.github.io/<your-repo-name>"`).
*   **`gh-pages` package:** Installed as a dev dependency (`pnpm add -D gh-pages`).
*   **`deploy` script in `package.json`:**
    ```json
    "scripts": {
      "predeploy": "pnpm run build",
      "deploy": "gh-pages -d dist"
    }
    ```

### 3.2. Manual Deployment Steps

1.  **Build the application:**
    ```bash
    pnpm run build
    ```
2.  **Deploy to GitHub Pages:**
    ```bash
    pnpm run deploy
    ```
    This command executes `gh-pages -d dist`, which pushes the contents of your `dist` folder to a `gh-pages` branch in your repository. GitHub Pages then serves content from this branch.

## 4. Continuous Integration / Continuous Deployment (CI/CD) (Future)

For a professional setup, a CI/CD pipeline should automate the build and deployment process.

### Recommended CI/CD Workflow:

1.  **Code Commit:** Developer pushes code to a feature branch.
2.  **Pull Request:** Developer opens a Pull Request (PR) to `main`.
3.  **CI Checks (GitHub Actions / GitLab CI / Jenkins):**
    *   Run linters (`pnpm run lint`).
    *   Run unit and integration tests (`pnpm run test`).
    *   Perform a production build (`pnpm run build`).
4.  **Code Review:** Team members review the PR.
5.  **Merge to `main`:** Once approved, the PR is merged into the `main` branch.
6.  **CD Trigger:** Merging to `main` automatically triggers a deployment job.
    *   The application is built.
    *   The `dist/` contents are deployed to the hosting environment (e.g., Vercel, Netlify, or GitHub Pages).
    *   A notification is sent upon successful deployment.

### Benefits of CI/CD:

*   **Faster Releases:** Automated process reduces manual effort and errors.
*   **Improved Quality:** Automated testing ensures changes do not introduce regressions.
*   **Early Feedback:** Developers get immediate feedback on code quality and functionality.
*   **Consistency:** Ensures deployments are consistent and repeatable.
