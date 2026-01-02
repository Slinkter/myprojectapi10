# Documento de Requerimientos (Requirements Document)

## 1. Requerimientos Funcionales (FR)

### FR-01: Catálogo de Productos
*   **FR-01.1:** El sistema debe obtener la lista de productos desde una API externa (FakeStoreAPI) al cargar la página de inicio.
*   **FR-01.2:** Cada producto debe mostrar: Imagen, Título, Categoría y Precio.
*   **FR-01.3:** Si la carga falla, se debe mostrar un mensaje de error amigable.
*   **FR-01.4:** Mientras se cargan los datos, se deben mostrar componentes "Skeleton" para mejorar la percepción de velocidad.

### FR-02: Gestión del Carrito
*   **FR-02.1:** El usuario debe poder agregar un producto al carrito desde la tarjeta del producto.
*   **FR-02.2:** Si el producto ya está en el carrito, el botón debe cambiar a "Remove" (Eliminar).
*   **FR-02.3:** El usuario debe poder eliminar productos desde la página del carrito.
*   **FR-02.4:** El contador de items en el Header debe actualizarse en tiempo real.

### FR-03: Resumen de Orden
*   **FR-03.1:** La página del carrito debe mostrar un resumen con: Cantidad total de items y Monto total a pagar.
*   **FR-03.2:** El monto total debe formatearse como moneda (USD).

## 2. Requerimientos No Funcionales (NFR)

### NFR-01: Arquitectura y Calidad de Código
*   **NFR-01.1:** El código debe seguir estrictamente la metodología **Feature-Sliced Design (FSD)**.
*   **NFR-01.2:** Se deben respetar los principios **SOLID**, especialmente Single Responsibility Principle (SRP).
*   **NFR-01.3:** El código debe estar documentado con **JSDoc** estándar.

### NFR-02: UX / UI
*   **NFR-02.1:** La interfaz debe ser **Responsive** y adaptarse a dispositivos móviles, tablets y escritorio.
*   **NFR-02.2:** El diseño debe utilizar **Tailwind CSS** sin frameworks de componentes externos (Material UI, Chakra).
*   **NFR-02.3:** Feedback visual inmediato para todas las acciones del usuario (hover, active, loading states).

### NFR-03: Performance
*   **NFR-03.1:** El puntaje de Lighthouse en Performance debe ser superior a 90.
*   **NFR-03.2:** Minimizar re-renders innecesarios mediante el uso correcto de `useSelector` y `React.memo` donde aplique.
