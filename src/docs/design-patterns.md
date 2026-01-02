# Documento de Patrones y Arquitecturas Aplicadas

Este documento detalla los patrones de diseño y arquitecturas implementadas en el proyecto para asegurar la escalabilidad, mantenibilidad y calidad del código.

## 1. Feature-Sliced Design (FSD)

*   **Descripción:** FSD es una metodología arquitectónica para el frontend que organiza el código en capas por dominios (app, pages, widgets, features, entities, shared) y slices dentro de esas capas. Su objetivo es proporcionar una estructura de proyecto coherente y escalable.
*   **Aplicación en el Proyecto:**
    *   **Separación de Capas:** El proyecto se estructura en las capas `app/`, `pages/`, `widgets/`, `features/`, `entities/`, y `shared/`.
    *   **Encapsulación:** Cada "slice" dentro de una capa (por ejemplo, `shared/ui/Button` o `entities/product/model/productSlice.js`) encapsula su lógica y expone solo las interfaces necesarias.
*   **Beneficios:** Mejora la escalabilidad, facilita el mantenimiento, promueve la reutilización y mejora la colaboración en equipos grandes.

## 2. Container / Presentation Pattern

*   **Descripción:** Un patrón que separa los componentes en dos categorías:
    *   **Container Components (Smart Components):** Se encargan de la lógica, el fetching de datos, la gestión del estado y el dispatch de acciones. No tienen marcado (JSX) propio, o tienen muy poco, y pasan los datos y callbacks a los componentes presentacionales.
    *   **Presentational Components (Dumb Components):** Se preocupan únicamente por cómo se ve la UI. Reciben datos y funciones exclusivamente a través de sus `props` y no tienen dependencia directa del store de Redux ni de la API.
*   **Aplicación en el Proyecto:**
    *   **Containers:** Las `pages` (ej. `Home`, `Cart`) y algunos `widgets` (ej. `ProductList`) actúan como contenedores. Son responsables de obtener los datos de los Redux slices y de coordinar las acciones.
    *   **Presentational:** La mayoría de los componentes en `shared/ui` (ej. `Button`, `Card`, `SkeletonTile`) y `entities` (ej. `ProductTile`, `CartTile` después del refactor) son componentes presentacionales que solo renderizan UI basada en props.
*   **Beneficios:** Mejora la separación de preocupaciones, facilita la reutilización de componentes UI y hace que las pruebas sean más sencillas.

## 3. Redux Toolkit para Gestión de Estado

*   **Descripción:** Redux Toolkit (RTK) es la forma oficial y recomendada de escribir lógica de Redux. Proporciona utilidades para simplificar el desarrollo de Redux, incluyendo `createSlice` para definir reducers y acciones, y `createAsyncThunk` para gestionar efectos secundarios asíncronos.
*   **Aplicación en el Proyecto:**
    *   **`createSlice`:** Utilizado en `productSlice.js` y `cartSlice.js` (después del refactor) para definir el estado inicial, reducers y acciones.
    *   **`createAsyncThunk`:** Utilizado en `productSlice.js` para el fetching asíncrono de productos y en `cartSlice.js` para simular operaciones asíncronas de carrito, facilitando la gestión de estados `pending`, `fulfilled` y `rejected`.
*   **Beneficios:** Reduce el boilerplate de Redux, simplifica la lógica asíncrona y promueve las mejores prácticas de Redux.

## 4. Patrón de Servicio API

*   **Descripción:** Centraliza todas las llamadas a la API en un módulo de servicio dedicado, desacoplando la lógica de fetching de datos de los componentes y del store de Redux.
*   **Aplicación en el Proyecto:**
    *   Se ha implementado un `apiClient.js` en `shared/api` que encapsula la lógica para realizar peticiones HTTP (actualmente solo `GET`). Este servicio es el único punto de contacto con la API externa.
*   **Beneficios:** Permite una gestión centralizada de errores HTTP, añade interceptores (para autenticación, logging), facilita el mocking para pruebas y simplifica el cambio de la URL base de la API.

## 5. Optimistic UI

*   **Descripción:** Un patrón de diseño de UI donde la interfaz de usuario se actualiza inmediatamente para reflejar el resultado esperado de una acción del usuario, incluso antes de que el servidor confirme la operación. Si la operación falla, la UI se revierte al estado anterior.
*   **Aplicación en el Proyecto:**
    *   Implementado en `cartSlice.js` para las acciones `addToCart` y `removeFromCart`. Cuando el usuario añade/elimina un producto, la UI del carrito se actualiza instantáneamente. Si la operación asíncrona (simulada) falla, el estado se revierte.
*   **Beneficios:** Mejora significativamente la percepción de rendimiento y la experiencia del usuario, haciendo que la aplicación se sienta más rápida y reactiva.
