# Estructura de carpetas y archivos — myprojectapi10

## Propósito

Organizar el proyecto para facilitar el mantenimiento, la escalabilidad y la colaboración.

## Estructura recomendada

```
/
├─ public/                # Archivos estáticos (favicon, imágenes, etc.)
├─ src/
│  ├─ components/         # Componentes reutilizables (ProductTile, CartTile, Header...)
│  ├─ pages/              # Páginas principales (Home.jsx, Cart.jsx)
│  ├─ store/              # Redux slices y store
│  │   └─ slices/         # Slices individuales (cart-slice.js)
│  ├─ styles/             # CSS global o utilidades SASS (index.css)
│  ├─ utils/              # Helpers y utilidades JS (format.js)
│  ├─ App.jsx             # Componente raíz
│  └─ main.jsx            # Entry point de React
├─ docs/                  # Documentación técnica y de diseño
│  ├─ COLOR_GUIDELINES.md # Guía de colores y estilos
│  └─ STRUCTURE.md        # Esta guía de estructura
├─ .github/               # Workflows, instrucciones para AI agents
│  └─ copilot-instructions.md
├─ tailwind.config.js     # Configuración de Tailwind
├─ package.json           # Configuración de npm y scripts
└─ README.md              # Descripción general del proyecto
```

## Decisiones clave

-   **Separación de componentes y páginas:** Facilita la reutilización y el mantenimiento.
-   **Store y slices:** Centraliza el estado global y las acciones de Redux.
-   **Utils:** Permite compartir lógica común (ej. formateo de precios).
-   **Styles:** Mantiene el CSS global y utilidades en un solo lugar.
-   **Docs:** Documentación accesible para onboarding y cambios futuros.

## Beneficios

-   **Escalabilidad:** Fácil de agregar nuevas páginas, componentes o utilidades.
-   **Mantenimiento:** Localización rápida de archivos y lógica.
-   **Colaboración:** Estructura clara para equipos y contribuyentes externos.

---

Para cambios mayores, actualiza esta guía y comunica al equipo.
