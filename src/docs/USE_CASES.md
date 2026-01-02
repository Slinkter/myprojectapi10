# Casos de Uso (Use Cases)

## Diagrama (Textual)
`Actor: Usuario (Cliente)` -> `Sistema`

## UC-01: Ver Productos
**Actor:** Cliente
**Descripción:** El cliente navega por la página principal para ver el catálogo.
**Precondiciones:** La API debe estar online.
**Flujo Principal:**
1.  Cliente entra a la URL raíz `/`.
2.  Sistema muestra skeletons de carga.
3.  Sistema obtiene datos de la API.
4.  Sistema renderiza la grilla de productos.
**Flujo Alternativo (Error):**
3a. La API falla.
4a. Sistema muestra componente de error con mensaje.

## UC-02: Agregar al Carrito
**Actor:** Cliente
**Descripción:** Agregar un item interesado a la cesta de compra.
**Flujo Principal:**
1.  Cliente hace clic en "Add to Cart" en una tarjeta de producto.
2.  Sistema valida si el producto ya existe (no duplicados).
3.  Sistema agrega el producto al estado global `cart`.
4.  Sistema actualiza el contador del Header.
5.  El botón cambia de estado a "Remove".

## UC-03: Eliminar del Carrito
**Actor:** Cliente
**Descripción:** Quitar un producto no deseado.
**Flujo Principal (Desde Home):**
1.  Cliente hace clic en "Remove" en un producto ya agregado.
2.  Sistema elimina el item del estado.
3.  Botón vuelve a estado "Add to Cart".

**Flujo Alternativo (Desde Cart Page):**
1.  Cliente entra a `/cart`.
2.  Cliente hace clic en el icono de papelera.
3.  Item desaparece de la lista.
4.  Total se recalcula automáticamente.
