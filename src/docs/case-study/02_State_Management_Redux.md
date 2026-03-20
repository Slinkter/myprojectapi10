# 02. Gestión de Estado y Redux Toolkit

El manejo del estado global es uno de los mayores desafíos en el frontend moderno. Para este caso de estudio, utilizamos **Redux Toolkit (RTK)**, no solo como un almacén de datos (Store), sino como un motor de orquestación de flujos asíncronos y sincronización de UI.

## 1. El Patrón AsyncThunk (Peticiones Asíncronas)

No realizamos operaciones `fetch` directas dentro de los componentes funcionales (`useEffect`). Esto crea componentes impuros y dificulta el testing.

En `src/entities/product/model/productSlice.js`, delegamos el fetching a `createAsyncThunk`:
- **Por qué:** RTK despacha automáticamente tres acciones (`pending`, `fulfilled`, `rejected`) durante el ciclo de vida de la promesa. Nuestro reductor captura estas acciones para actualizar la variable `fetchStatus` (idle, loading, succeeded, failed) de manera determinista.

## 2. Abstracción del Cliente HTTP (`apiClient.js`)

En `src/shared/api/apiClient.js`, abstrajimos la API `fetch` nativa del navegador.
- **Por qué:**
  - Evitamos repetir `response.json()` y las comprobaciones `!response.ok` en cada petición.
  - Estandarizamos el lanzamiento de errores (`ApiError`) que incluyen el status HTTP, vital para el debugging.
  - Manejamos casos atípicos automáticamente, como los códigos de respuesta `204 No Content` (donde parsear JSON daría error).

## 3. Memoización Estricta: El Poder de `createSelector`

Si revisas los componentes, nunca verás esto:
❌ `const cartTotal = useSelector(state => state.cart.items.reduce(...))`

En su lugar, usamos:
✅ `const cartTotal = useSelector(selectCartTotal)` (definido en `cartSlice.js`).

### ¿Por qué es crucial?
Cada vez que el *Store* de Redux cambia, todos los hooks `useSelector` de la aplicación se reevalúan. 
Si la función de cálculo devuelve un objeto o array nuevo cada vez (como `map`, `filter`, `reduce`), React pensará que el dato cambió y **re-renderizará** el componente y todos sus hijos enteros, arruinando el rendimiento.

Con la librería `Reselect` (integrada en RTK como `createSelector`), la función se **memoiza**. Solo vuelve a calcular el total si `state.cart.items` ha cambiado físicamente en memoria. Si no, devuelve el valor en caché instantáneamente.

## 4. Orquestación Visual con `StateBoundary`

Para consumir el estado, introducimos un patrón avanzado en `src/shared/ui/StateBoundary.jsx`.

Normalmente, el código React para manejar asincronía está lleno de anidamiento ilegible:
```jsx
// ❌ Código espagueti visual
return isLoading ? <Spinner /> : hasError ? <Error /> : items.length === 0 ? <Empty /> : <Grid />
```

Usando el componente Boundary:
```jsx
// ✅ Código declarativo
<StateBoundary isLoading={isLoading} hasError={!!error} isEmpty={!items.length}>
    <ProductGrid data={items} />
</StateBoundary>
```
Este componente encapsula las lógicas de escape, limpiando radicalmente el código de las páginas (`Home`, `Cart`), dejándolas enfocadas solo en el "Happy Path" (el escenario donde todo funciona bien).