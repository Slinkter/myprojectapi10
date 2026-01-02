# Sistema de Diseño (Design System)

## 1. Filosofía de Diseño
El diseño prioriza la claridad, la usabilidad y la estética moderna ("Clean UI"). Se utiliza **Tailwind CSS** como motor de diseño, estableciendo un conjunto restringido de tokens para mantener la consistencia.

## 2. Paleta de Colores
Colores definidos en `tailwind.config.js` y variables CSS.

| Token | Color (Hex/Ref) | Uso |
| :--- | :--- | :--- |
| `primary` | `#1a1a1a` (Gray-900) | Texto principal, encabezados, bordes activos. |
| `brand` | `#4f46e5` (Indigo-600) | Acciones principales, botones primarios, enlaces activos. |
| `surface-primary` | `#ffffff` (White) | Fondo de tarjetas, modales, header. |
| `surface-secondary` | `#f3f4f6` (Gray-100) | Fondo general de la página. |
| `destructive` | `#ef4444` (Red-500) | Acciones de eliminar, errores. |
| `muted` | `#6b7280` (Gray-500) | Textos secundarios, descripciones. |

## 3. Tipografía
*   **Familia:** `Inter`, sans-serif.
*   **Escala:**
    *   `h1`: 24px/32px (Desktop), Bold.
    *   `h2`: 20px, Bold.
    *   `body`: 16px, Regular.
    *   `small`: 14px, Medium (Botones).

## 4. Componentes Base (UI Kit)

### Botones (`src/shared/ui/Button`) (Propuesto)
*   **Variants:** `primary` (Brand), `destructive` (Red), `outline` (Border).
*   **Sizes:** `sm`, `md`, `lg`.

### Tarjetas (`.card` utility)
*   Uso de sombras suaves (`shadow-md`) que crecen en hover (`shadow-xl`).
*   Borde redondeado `rounded-xl` para una apariencia moderna.
*   Micro-interacción de elevación (`-translate-y-1`).

## 5. Espaciado y Layout
*   **Grid:** Sistema de grilla de 4 columnas (Desktop), 2 columnas (Mobile).
*   **Container:** `max-w-6xl` centrado horizontalmente.
*   **Spacing Unit:** Base 4px (Tailwind standard). Separación estándar de `gap-4` (16px) y `gap-8` (32px).
