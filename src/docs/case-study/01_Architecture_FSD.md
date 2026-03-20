# 01. Arquitectura y Feature-Sliced Design (FSD)

En aplicaciones React que escalan rápidamente, organizar los archivos por tipo (`/components`, `/hooks`, `/services`) suele llevar al fracaso. Cuando necesitas modificar la funcionalidad del "Carrito de Compras", terminas saltando por 10 carpetas distintas, perdiendo contexto.

En este proyecto, aplicamos una variante de **Feature-Sliced Design (FSD)**.

## FSD: Organización Basada en Dominio y Responsabilidad

El código se organiza en "Rebanadas" (Slices) de funcionalidad. Cada rebanada contiene todo lo necesario para que ese módulo funcione (UI, lógica, estado, utilidades). 

La estructura de `src/` impone una jerarquía estricta. Una capa inferior **nunca** puede importar de una superior.

### Jerarquía de Capas (De más general a más específico)

1. **`app/` (Capa de Inicialización)**
   - **Qué contiene:** El punto de entrada (`main.jsx`), configuración global de rutas, el Store central de Redux (`store.js`) y proveedores de contexto globales.
   - **Por qué:** Mantiene la configuración global aislada de la lógica de negocio y los componentes visuales.

2. **`pages/` (Capa de Enrutamiento)**
   - **Qué contiene:** Componentes de alto nivel mapeados a rutas (Ej. `Home.jsx`, `Cart.jsx`).
   - **Regla Estricta:** Las páginas son **puramente composicionales**. No deben contener llamadas directas a APIs (`fetch`), lógica compleja ni CSS extenso. Solo agrupan `Widgets` o `Features` e inician peticiones de carga global si es estrictamente necesario.

3. **`widgets/` (Capa de Composición Independiente)**
   - **Qué contiene:** Bloques funcionales independientes y completos formados por varias entidades y features (Ej. `Header.jsx`, `CartSummary.jsx`).
   - **Por qué:** Permite reutilizar grandes bloques de la UI sin acoplar las páginas entre sí.

4. **`features/` (Capa de Interacción)**
   - **Qué contiene:** Escenarios de interacción del usuario que aportan valor al negocio (Ej. `AddToCartButton`).
   - **Por qué:** Antes, el botón de "Agregar al carrito" vivía dentro de la tarjeta del producto (`ProductTile`). Eso rompía el Principio de Responsabilidad Única (SRP), haciendo que un componente puramente visual dependiera de la lógica del carrito. Al extraerlo a un "Feature", podemos inyectar este botón en cualquier lugar (una tarjeta, un modal, un listado) sin duplicar código de Redux.

5. **`entities/` (Capa de Dominio de Negocio)**
   - **Qué contiene:** La lógica central del negocio y los componentes visuales base para representar esas entidades (Ej. `product/`, `cart/`). Aquí viven los Slices de Redux y los `Tiles`/`Cards` estúpidos (dumb components).
   - **Regla Estricta:** Una entidad no conoce nada sobre "Features" o "Widgets". Un `ProductTile` solo sabe dibujar un producto, no sabe cómo agregarlo al carrito.

6. **`shared/` (Capa Fundacional)**
   - **Qué contiene:** Código agnóstico al dominio del negocio. Utilidades (`cn()`), configuración de red (`apiClient.js`), diccionarios (`ROUTES`), y componentes UI base muy atómicos (`Spinner`, `SkeletonTile`).
   - **Por qué:** Permite compartir código entre todo el proyecto sin crear dependencias circulares. 

---

### Beneficios para Estudiantes
Al leer este código, notarás que encontrar un error es fácil:
- ¿Falla la red? Vas a `shared/api/`.
- ¿Falla el botón de comprar? Vas a `features/cart/ui/AddToCartButton`.
- ¿Falla la renderización de la lista general? Vas a `pages/Home`.

El código no está acoplado, está **compuesto**.