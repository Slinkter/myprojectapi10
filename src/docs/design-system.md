# Design System

This document outlines the foundational elements of the application's visual design, including color palettes, typography, spacing, and reusable UI patterns. These elements serve as the "design tokens" for consistent and scalable UI development.

## 1. Color Palette

Our primary color palette is derived from the Tailwind CSS configuration, providing semantic names for easy access and consistent application.

| Variable Name           | Hex Value | Description                                |
| :---------------------- | :-------- | :----------------------------------------- |
| `--color-primary`       | `#6366F1` | Primary brand color, used for main actions |
| `--color-brand`         | `#EF4444` | Accent color, used for important highlights |
| `--color-text-main`     | `#1F2937` | Main text color, for high contrast         |
| `--color-text-secondary`| `#6B7280` | Secondary text color, for less emphasis    |
| `--color-background`    | `#F3F4F6` | Light background for pages                 |
| `--color-surface`       | `#FFFFFF` | Background for cards and containers        |
| `--color-destructive`   | `#DC2626` | Color for destructive actions or errors    |

## 2. Typography

We use a sans-serif font stack for readability and a clean modern aesthetic.

*   **Font Family:** `Inter`, `system-ui`, `sans-serif` (as defined in `tailwind.config.js`).
*   **Font Sizes (Tailwind Scale):**
    *   `text-sm` (14px)
    *   `text-base` (16px) - Body copy
    *   `text-lg` (18px)
    *   `text-xl` (20px)
    *   `text-2xl` (24px) - Page titles
    *   `text-3xl` (30px)
*   **Font Weights (Tailwind Scale):** `font-normal`, `font-medium`, `font-semibold`, `font-bold`.

## 3. Spacing

Spacing is consistently applied using the Tailwind CSS default spacing scale (multiples of 4px).

*   **Small (e.g., `p-2`, `m-2`):** 8px
*   **Medium (e.g., `p-4`, `m-4`):** 16px
*   **Large (e.g., `p-8`, `m-8`):** 32px
*   Consistent use of `gap-x`, `gap-y` for grid and flex layouts.

## 4. Reusable UI Patterns (Components)

This section describes the intended usage and visual guidelines for key UI components. These will be implemented as `shared/ui` components.

### Button (`shared/ui/Button`)

*   **Variants:** `primary`, `destructive`, `outline`.
*   **States:** Default, Hover, Active, Disabled.
*   **Usage:** For primary actions, secondary actions, and critical operations.

#### Examples:
*   `btn btn-primary`: Primary call to action.
*   `btn btn-destructive`: Used for "Remove from Cart" or delete actions.
*   `btn btn-outline`: Secondary, less prominent actions.

### Card (`shared/ui/Card`)

*   **Structure:** Image area, content area.
*   **Spacing:** Consistent padding and gap between elements.
*   **Shadows:** Subtle shadow for depth.
*   **Usage:** Displaying individual products (`ProductTile`), cart items (`CartTile`), or any content block requiring clear separation.
*   **Consistency:** All cards should aim for consistent internal alignment and sizing using flex/grid.

### Input (`shared/ui/Input`)

*   Standard text inputs, ideally with focus states and error handling. (Not currently present but vital for future forms).

### Loading States (`shared/ui/SkeletonTile`, `shared/ui/Spinner`)

*   **Skeleton Loading:** Used for product lists to indicate content is being fetched.
*   **Spinner:** For general loading states when content structure is not yet known.

## 5. Responsive Design

*   The application uses Tailwind's mobile-first approach.
*   Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).
*   **Layout Container:** A global `max-width` container (e.g., `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`) should be used to ensure consistent content width and centering across all pages. This should be applied at the `app` layer.
*   **Grid Usage:** The main product listing uses a responsive grid (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`).
