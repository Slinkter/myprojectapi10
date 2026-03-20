# 03. UI, Estilado y Tailwind CSS

En proyectos modernos, escribir CSS manual lleva a la acumulación de código muerto y problemas de especificidad. Utilizamos **Tailwind CSS v3** como un motor de variables de diseño (*Design Tokens*), pero con reglas arquitectónicas estrictas en el código React.

## 1. El Patrón de Composición `cn()`

El mayor problema de Tailwind es la legibilidad de condicionales dinámicos. 

❌ Patrón anti-patrón (Plantillas literales sucias):
```jsx
className={`p-4 rounded border ${isActive ? 'bg-blue-500 text-white' : 'bg-white'} ${className || ''}`}
```

Para solucionarlo, en `src/shared/lib/cn.js` creamos la función combinada `cn()` que integra:
- **`clsx`**: Permite escribir condicionales como objetos legibles.
- **`tailwind-merge`**: Resuelve el conflicto de especificidad de Tailwind (ej. si pasas `p-4` y `p-8`, gana `p-8` en lugar de causar errores de cascada).

✅ Implementación correcta:
```jsx
className={cn(
  'p-4 rounded border transition-colors',
  isActive ? 'bg-blue-500 text-white' : 'bg-white',
  className // Clases inyectadas desde un componente padre
)}
```

## 2. Principio de Inversión de Control en el Layout

Regla estricta: **Los componentes de UI menores (Tiles, Botones) no deben definir márgenes externos (margins) ni posicionamiento absoluto.**

- Si un `ProductTile` tiene `m-4`, será imposible alinearlo en una grilla con `gap-6`.
- El componente Padre (la página o la grilla) es quien controla el layout (`grid`, `flex`, `gap`).
- El componente Hijo (`ProductTile`) solo controla su diseño interno (padding, bordes, tipografía).

## 3. Micro-interacciones y Animaciones

Una interfaz plana parece muerta. Integrar pequeñas interacciones CSS eleva la percepción de calidad del software:

1. **Retroalimentación táctil:** `active:scale-95` en botones (`AddToCartButton.jsx`). Esto comprime ligeramente el botón al hacer clic.
2. **Elevación:** `transition-all duration-300 hover:-translate-y-1 hover:shadow-md` en tarjetas (`ProductTile.jsx`). Al pasar el ratón, la tarjeta "flota" suavemente.
3. **Animaciones de entrada (Keyframes):** Configuradas en `tailwind.config.js` (`animate-fade-in-up`, `animate-slide-in`). Se aplican al montar vistas pesadas o items del carrito, dándole fluidez a la carga de datos sin usar librerías externas de animación pesadas (framer-motion).