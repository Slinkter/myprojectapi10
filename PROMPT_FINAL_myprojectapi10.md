# OPTIMIZACIÓN myprojectapi10
# Modelo: gemini-3.1-pro-preview
# Modo: Multi-agente paralelo

## ROL
Senior React Engineer 20yr. Stack: React 18 + Redux Toolkit + Tailwind v3 + FSD parcial.
Objetivo: completar FSD, clean code, JSDoc, cn(), selectores memoizados, animaciones Tailwind.
Regla única: lee antes de modificar. Un archivo a la vez. pnpm lint después de cada cambio.

---

## FASE 0 — AUDITORÍA (tú solo, no delegues)

```bash
find src/ -type f \( -name "*.jsx" -o -name "*.js" \) | sort | xargs grep -l "" | head -30
cat src/app/store.js src/app/App.jsx
cat src/entities/product/model/productSlice.js src/entities/cart/model/cartSlice.js
cat src/shared/api/apiClient.js src/shared/config/appConfig.js src/shared/lib/priceFormatter.js
for f in src/entities/product/ui/ProductTile.jsx src/entities/cart/ui/CartTile.jsx src/features/cart/ui/AddToCartButton.jsx src/widgets/Header/Header.jsx src/widgets/CartSummary/CartSummary.jsx src/pages/Home.jsx src/pages/Cart.jsx src/pages/Projects.jsx src/pages/ReclamationBook.jsx src/shared/ui/EmptyState.jsx src/shared/ui/ErrorComponent.jsx src/shared/ui/SkeletonTile.jsx; do echo "==$f=="; cat "$f"; done
grep -rn "fetch\|useSelector(state =>" src/ --include="*.js" --include="*.jsx"
```

Genera tabla compacta:
```
| archivo | naming_issues | solid_violation | needs_jsdoc | needs_cn | split_needed |
```

Luego crea PLAN_REFACTOR.md y haz commit:
```bash
git add -A && git commit -m "chore: snapshot pre-refactor"
```

---

## FASE 1 — LANZAR SUB-AGENTES

Después de la auditoría lanza estos 4 agentes.
AGENTE_A primero — los demás dependen de shared/.
AGENTES B, C, D en paralelo cuando A reporte DONE.

---

## AGENTE_A | shared/ | EJECUTAR PRIMERO

Área exclusiva: src/shared/** y tailwind.config.js
No tocar ninguna otra carpeta.

PASO 1 — instalar deps:
```bash
pnpm add clsx tailwind-merge
pnpm remove react-loader-spinner
```

PASO 2 — crear src/shared/lib/cn.js:
```js
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
/** @param {...any} inputs @returns {string} */
export const cn = (...inputs) => twMerge(clsx(inputs))
```

PASO 3 — crear src/shared/lib/formatters.js:
Migrar priceFormatter.js + agregar truncateText(text, max=100) y capitalize(text).
JSDoc con @param @returns @example en cada función.
Borrar priceFormatter.js.

PASO 4 — crear src/shared/constants/routes.js:
```js
/** @type {Readonly<Record<string,string>>} */
export const ROUTES = Object.freeze({
  HOME: '/', CART: '/cart',
  PROJECTS: '/projects', RECLAMATION_BOOK: '/reclamation-book',
})
```

PASO 5 — crear src/shared/constants/queryKeys.js:
```js
export const FETCH_STATUS = Object.freeze({
  IDLE:'idle', LOADING:'loading', SUCCEEDED:'succeeded', FAILED:'failed',
})
```

PASO 6 — reescribir apiClient.js:
- clase ApiError extends Error con status, statusText, data
- función request(endpoint, options) privada
- export const apiClient = { get, post, delete }
- JSDoc @throws {ApiError} en cada método
- manejar status 204 → return null

PASO 7 — crear src/shared/ui/Spinner.jsx:
```jsx
const SIZES = { sm:'w-4 h-4 border-2', md:'w-8 h-8 border-2', lg:'w-12 h-12 border-4' }
const COLORS = { primary:'border-blue-500', white:'border-white', gray:'border-gray-400' }
/** @param {{size?:'sm'|'md'|'lg', color?:'primary'|'white'|'gray', label?:string}} props */
export function Spinner({ size='md', color='primary', label='Cargando...' }) {
  return (
    <div role="status" aria-label={label} className="inline-flex items-center justify-center">
      <div className={cn('rounded-full border-transparent animate-spin border-t-current border-r-current', SIZES[size], COLORS[color])} />
      <span className="sr-only">{label}</span>
    </div>
  )
}
Spinner.propTypes = { size: PropTypes.oneOf(['sm','md','lg']), color: PropTypes.oneOf(['primary','white','gray']), label: PropTypes.string }
```

PASO 8 — crear src/shared/ui/StateBoundary.jsx:
```jsx
/**
 * @component StateBoundary
 * @description Orquestador de estados async. Patrón: State Boundary.
 * Evita ternarios anidados en todos los componentes consumidores.
 * @example
 * <StateBoundary isLoading={isLoading} hasError={!!error} isEmpty={!items.length}>
 *   <ProductGrid />
 * </StateBoundary>
 */
export function StateBoundary({ isLoading, hasError, errorMessage, isEmpty, emptyMessage='Sin datos', children }) {
  if (isLoading) return <div className="flex justify-center py-16"><Spinner size="lg" /></div>
  if (hasError)  return <ErrorComponent message={errorMessage} />
  if (isEmpty)   return <EmptyState message={emptyMessage} />
  return children
}
```

PASO 9 — actualizar tailwind.config.js agregar:
```js
animation: {
  'fade-in-up': 'fadeInUp 0.4s ease-out both',
  'fade-in':    'fadeIn 0.3s ease-out both',
  'slide-in':   'slideIn 0.3s ease-out both',
},
keyframes: {
  fadeInUp: { '0%':{ opacity:'0', transform:'translateY(16px)' }, '100%':{ opacity:'1', transform:'translateY(0)' } },
  fadeIn:   { '0%':{ opacity:'0' }, '100%':{ opacity:'1' } },
  slideIn:  { '0%':{ opacity:'0', transform:'translateX(-16px)' }, '100%':{ opacity:'1', transform:'translateX(0)' } },
},
```

PASO 10 — actualizar EmptyState.jsx, ErrorComponent.jsx, SkeletonTile.jsx:
- Aplicar cn() en todas las clases
- JSDoc @component @param @returns
- SkeletonTile: usar animate-pulse de Tailwind

```bash
pnpm lint && echo "AGENTE_A DONE"
```

---

## AGENTE_B | entities/ + store | PARALELO con C y D

Área exclusiva: src/entities/** y src/app/store.js
Prerequisito: AGENTE_A DONE

PASO 1 — reescribir productSlice.js:
```js
/**
 * @typedef {Object} Product
 * @property {number} id @property {string} title @property {number} price
 * @property {string} description @property {string} category
 * @property {string} image @property {{rate:number,count:number}} rating
 */
/**
 * @typedef {Object} ProductState
 * @property {Product[]} productList
 * @property {'idle'|'loading'|'succeeded'|'failed'} fetchStatus
 * @property {string|null} errorMessage
 */
```
- fetchProducts AsyncThunk usando apiClient.get('/products')
- rejectWithValue(error.message)
- selectores: selectProductList, selectFetchStatus, selectErrorMessage, selectIsProductsLoading
- TODOS con createSelector — ningún selector inline

PASO 2 — reescribir cartSlice.js mismo patrón:
- CartItem typedef: { product: Product, quantity: number }
- CartState typedef: { cartItems: CartItem[] }
- acciones: addToCart, removeFromCart, updateQuantity, clearCart
- selectores memoizados: selectCartItems, selectCartTotal, selectCartItemCount
- selector derivado: selectIsInCart = createSelector que recibe productId

PASO 3 — actualizar store.js:
```js
/** @description Store global de Redux. Slices: products, cart */
```

PASO 4 — actualizar ProductTile.jsx y CartTile.jsx:
- usar selectores importados del slice
- cn() para todas las clases
- animación: article con transition-all duration-300 hover:-translate-y-1 hover:shadow-md
- JSDoc @component @param

```bash
pnpm lint && echo "AGENTE_B DONE"
```

---

## AGENTE_C | widgets/ + features/ | PARALELO con B y D

Área exclusiva: src/widgets/** y src/features/**
Prerequisito: AGENTE_A DONE

PASO 1 — reescribir Header.jsx:
- usar ROUTES desde @/shared/constants/routes (no strings hardcoded)
- useLocation para marcar link activo
- cn() para todas las clases
- animación slide-in en el header
- responsive: clases sm: md: lg:
- JSDoc @component

PASO 2 — reescribir CartSummary.jsx:
- usar selectores memoizados del cartSlice
- cn() para clases
- cada CartItem con animate-fade-in-up
- formatPrice desde @/shared/lib/formatters
- JSDoc @component

PASO 3 — reescribir AddToCartButton.jsx:
- recibe product como prop
- usa selectIsInCart(product.id) del cartSlice
- cn() con variantes: isInCart → verde, else → azul
- active:scale-95 para feedback táctil
- PropTypes con product shape
- JSDoc @component @param @example

```bash
pnpm lint && echo "AGENTE_C DONE"
```

---

## AGENTE_D | pages/ + App.jsx | PARALELO con B y C

Área exclusiva: src/pages/** y src/app/App.jsx y src/app/main.jsx
Prerequisito: AGENTE_A DONE

PASO 1 — auditar naming en tu área:
```bash
grep -rn "const\|function" src/pages/ src/app/ --include="*.jsx" --include="*.js"
```
Corregir: PascalCase componentes, camelCase variables/funciones.

PASO 2 — reescribir Home.jsx:
- SOLO composición — cero fetch, cero lógica
- usar selectores del productSlice
- usar StateBoundary para loading/error/empty
- dispatch(fetchProducts()) en useEffect con [] solo si fetchStatus === IDLE
- grid de productos con animate-fade-in-up stagger (style animationDelay index*50ms)
- JSDoc @page

PASO 3 — reescribir Cart.jsx:
- SOLO composición
- usar selectores del cartSlice
- StateBoundary con emptyMessage="Tu carrito está vacío"
- JSDoc @page

PASO 4 — reescribir Projects.jsx y ReclamationBook.jsx:
- extraer lógica a custom hook si la tienen
- cn() para clases
- JSDoc @page

PASO 5 — actualizar App.jsx:
- usar ROUTES desde @/shared/constants/routes
- extraer config de rutas a src/app/router.jsx si App.jsx > 40 líneas
- JSDoc describiendo la estructura de rutas

```bash
pnpm lint && echo "AGENTE_D DONE"
```

---

## FASE FINAL — INTEGRACIÓN (tú, orquestador)

Cuando los 4 agentes reporten DONE:

```bash
# verificación global
pnpm lint
pnpm build

# métricas de calidad
echo "JSDoc:" && grep -rn "@param\|@component\|@returns" src/ --include="*.js" --include="*.jsx" | wc -l
echo "cn() aplicado:" && grep -rn "import.*cn\b" src/ --include="*.jsx" | wc -l
echo "createSelector:" && grep -rn "createSelector" src/ --include="*.js" | wc -l
echo "ROUTES usado:" && grep -rn "ROUTES\." src/ --include="*.jsx" | wc -l
echo "strings hardcoded rutas:" && grep -rn 'to="/' src/ --include="*.jsx" | wc -l
```

Reporte final:
```
══════════════════════════════════
✅ myprojectapi10 OPTIMIZADO
══════════════════════════════════
A shared/       : ✅
B entities/     : ✅
C widgets/      : ✅
D pages/        : ✅
lint            : 0 errores
build           : ✅
JSDoc           : [N] entradas
cn()            : [N] componentes
createSelector  : [N] selectores
ROUTES          : [N] usos
══════════════════════════════════
```
