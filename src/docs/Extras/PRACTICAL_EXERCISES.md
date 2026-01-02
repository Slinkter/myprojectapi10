# Ejercicios Prácticos del Proyecto

Este documento propone ejercicios para extender el proyecto y practicar habilidades de desarrollo Frontend avanzadas.

## Nivel 1: UI & Estilos
1.  **Modo Oscuro:** Implementar un toggle en el Header para cambiar entre tema claro y oscuro usando la clase `dark` de Tailwind.
2.  **Toast Notifications:** Reemplazar las alertas de error con "Toasts" flotantes (ej. `react-hot-toast`) cuando se agrega un producto al carrito.

## Nivel 2: Lógica & Estado
3.  **Persistencia:** Implementar `localStorage` en el `cartSlice` para que el carrito no se pierda al recargar la página.
4.  **Filtros de Categoría:** Agregar botones en el Home para filtrar productos por categoría (Electronics, Jewelery, etc.).

## Nivel 3: Arquitectura & Backend
5.  **Detalle de Producto:** Crear una nueva ruta `/product/:id` y una página `ProductDetail` para ver más información del item.
6.  **Checkout Real:** Integrar Stripe Elements simulado en el botón de "Proceed to Checkout".

## Reto de Arquitectura (FSD)
*   **Refactorizar Header:** Mover la lógica de navegación a un feature `features/navigation`.
*   **Crear Capa de Auth:** Implementar un slice `authSlice` en `entities/session` y un formulario de login en `features/auth/LoginForm`.
