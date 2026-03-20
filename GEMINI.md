# GEMINI.md - Contexto Instruccional

## Resumen del Proyecto
**myprojectapi10** es una aplicación de carrito de compras moderna construida con **React 18**, **Redux Toolkit** y **Tailwind CSS v3**, empaquetada con **Vite**. 
El proyecto implementa una arquitectura **Feature-Sliced Design (FSD)** parcial enfocada en la separación de responsabilidades, alta reutilización y principios de código limpio (Clean Code).

## Construcción y Ejecución
Este proyecto utiliza `pnpm` como gestor de paquetes.

- **Instalar dependencias:** `pnpm install`
- **Servidor de desarrollo:** `pnpm run dev`
- **Construir para producción:** `pnpm run build`
- **Linter:** `pnpm run lint` (Debe pasar con 0 advertencias/errores)
- **Vista previa de producción:** `pnpm run preview`

## Convenciones de Desarrollo y Arquitectura

Las siguientes convenciones son **obligatorias** para cualquier desarrollo futuro en este proyecto:

### 1. Arquitectura (Feature-Sliced Design - FSD)
Respeta estrictamente las capas del proyecto:
- `app/`: Configuración global, providers, store de Redux y punto de entrada.
- `pages/`: Componentes de ruta. Deben enfocarse en composición, evitando lógica de negocio compleja o fetch directo.
- `widgets/`: Composición de features y entidades (ej. `Header`, `CartSummary`).
- `features/`: Interacciones del usuario (ej. `AddToCartButton`).
- `entities/`: Lógica de dominio y UI pura (ej. `ProductTile`, `CartTile`, `productSlice`).
- `shared/`: Primitivas reutilizables, utilidades globales, hooks genéricos.

### 2. Estilos y Tailwind CSS
- **Utilidad `cn()`:** Todo componente que acepte o combine clases debe usar la utilidad `cn` (que combina `clsx` y `tailwind-merge`) ubicada en `src/shared/lib/cn.js`.
- **Animaciones:** Utilizar las animaciones predefinidas en `tailwind.config.js` (ej. `animate-fade-in-up`, `animate-slide-in`) para feedback visual fluido.

### 3. Gestión de Estado (Redux Toolkit)
- **Selectores Memoizados:** **NUNCA** usar selectores inline en `useSelector`. Todos los selectores deben estar definidos en sus respectivos slices utilizando `createSelector`.
- **Thunks:** Las peticiones asíncronas deben manejarse mediante `createAsyncThunk` utilizando el cliente HTTP centralizado.

### 4. Componentes de Interfaz Estándar
- **Manejo de Estados (StateBoundary):** Las vistas que dependan de peticiones asíncronas deben envolverse en el componente `StateBoundary` para orquestar los estados de `isLoading`, `hasError` e `isEmpty`, evitando ternarios anidados.
- **Rutas centralizadas:** Nunca hardcodear strings de rutas (ej. `to="/cart"`). Utilizar siempre el diccionario de constantes `ROUTES` importado desde `@/shared/constants/routes`.

### 5. Calidad de Código y Documentación
- **JSDoc Obligatorio:** Todo archivo, componente, función utilitaria y Slice debe estar documentado utilizando JSDoc (`@component`, `@param`, `@returns`, `@typedef`, `@example`, etc.).
- **Regla de Refactorización:** Lee y entiende el archivo antes de modificarlo. Aplica un cambio a la vez y verifica siempre ejecutando el linter (`pnpm lint`) después de cada modificación.
