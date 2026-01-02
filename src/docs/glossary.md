# Glosario Técnico (Technical Glossary)

## A
*   **API (Application Programming Interface):** Conjunto de definiciones y protocolos que permite que dos aplicaciones de software se comuniquen entre sí. En este proyecto, usamos FakeStoreAPI.
*   **Async Thunk:** Función en Redux Toolkit que permite manejar lógica asíncrona (como llamadas API) dentro del ciclo de vida de Redux.

## B
*   **Barrel File:** Archivo `index.js` que re-exporta múltiples módulos de un directorio, simplificando los imports.

## C
*   **Component (React):** Bloque de construcción independiente y reutilizable de código UI.
*   **Container Pattern:** Patrón donde un componente padre maneja la lógica y el estado, pasando datos a componentes hijos "presentacionales".

## F
*   **Feature-Sliced Design (FSD):** Metodología de arquitectura frontend que organiza el código en capas (Layers), slices (Slices) y segmentos (Segments) según su responsabilidad y alcance de negocio.
*   **Flexbox:** Modelo de diseño CSS unidimensional.

## H
*   **Hook (React):** Función especial que permite "engancharse" a características de React (como estado y ciclo de vida) desde componentes funcionales. `useState`, `useEffect`.

## P
*   **Prop Drilling:** Paso de datos a través de múltiples niveles de componentes intermedios que no los necesitan, solo para llegar a un componente profundo. (Evitado aquí usando Redux).

## R
*   **Reducer:** Función pura que toma el estado anterior y una acción, y devuelve el nuevo estado.
*   **Redux Toolkit:** Conjunto de herramientas oficial para desarrollar con Redux de manera eficiente y estandarizada.

## S
*   **Selector:** Función que extrae o "selecciona" datos específicos del estado global de Redux. Ayuda a evitar renderizados innecesarios y encapsula la estructura del estado.
*   **SPA (Single Page Application):** Aplicación web que carga un solo documento HTML y actualiza dinámicamente el contenido a medida que el usuario interactúa, sin recargar la página.

## T
*   **Tailwind CSS:** Framework CSS "utility-first" que proporciona clases de bajo nivel para construir diseños personalizados sin salir del HTML.
