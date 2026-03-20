# 04. Código Limpio y JSDoc Avanzado

En la industria del software corporativo moderno, **TypeScript (TS)** es el rey indiscutible. Sin embargo, compilar código TS requiere tiempo de build, mapas de código (source maps) pesados y configuración compleja.

En este caso de estudio, demostramos cómo lograr los mismos beneficios de TypeScript en un proyecto de **JavaScript Puro**, utilizando estándares avanzados de **JSDoc**.

## 1. El Poder de JSDoc Tipado

Al documentar el código usando JSDoc enriquecido, editores modernos como VS Code leen los comentarios estáticamente y construyen el motor *IntelliSense* (autocompletado en tiempo real) y advierten de errores antes de compilar.

### Declaración de Modelos Complejos (`@typedef`)

En Redux (Fase B), no usamos objetos mágicos. Declaramos las entidades en la cabecera de los Slices:

```javascript
/**
 * @typedef {Object} Product
 * @property {number} id 
 * @property {string} title 
 * @property {number} price
 * @property {string} category
 */
```

### Tipado de Funciones

En `src/shared/lib/formatters.js`, tipamos argumentos de entrada y retornos, incluyendo genéricos:

```javascript
/**
 * Formatea un número a moneda local.
 * @param {number} amount - El monto base.
 * @returns {string} String formateado (Ej. "$ 1,200.50").
 */
```

Al importar esta función, el IDE lanzará un error silente subrayado en rojo si intentas pasar un texto en lugar de un `number`. 

## 2. Nomenclatura Estricta (Naming Conventions)

Un software legible se lee como un idioma natural. Durante la refactorización (Fase D), aplicamos estas reglas inquebrantables:

- **Componentes React:** Siempre en `PascalCase` (`AddToCartButton.jsx`). El archivo y la función deben llamarse exactamente igual.
- **Instancias, variables locales, funciones:** Siempre en `camelCase` (`fetchStatus`, `handleLogin()`).
- **Constantes Globales:** Siempre en `UPPER_SNAKE_CASE` y usualmente envueltas en `Object.freeze()` para prevenir mutabilidad accidental (`ROUTES.HOME`).
- **Hooks:** Siempre prefijados con `use` (`useLocation`).
- **Manejadores de Eventos:** 
  - Las funciones declaradas internas llevan el prefijo `handle` (`handleAddToCart`).
  - Las propiedades (props) pasadas al hijo llevan el prefijo `on` (`onClick={handleAddToCart}`).

## 3. Integración de Herramientas de Calidad (Linter)

El código no está limpio solo "por instinto". Usamos `ESLint` configurado (`package.json > lint`) con una regla estricta de "Cero Advertencias":
`eslint . --ext js,jsx --max-warnings 0`

Esto obliga al desarrollador (o al agente automático) a resolver cada variable no utilizada y cada dependencia ausente en los arreglos (arrays) de dependencia de `useEffect`, garantizando ciclos de vida libres de fugas de memoria (memory leaks).