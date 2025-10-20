# Guía de Colores y Estilos — myprojectapi10 (v2.0)

## Sistema de Tokens Semánticos

Hemos refactorizado nuestra paleta de colores a un sistema semántico para mejorar la consistencia, el mantenimiento y la claridad del código. Los antiguos tokens "legacy" han sido eliminados.

### Tokens Principales

-   `primary`: El color principal de la marca. Usar para elementos de acción clave, títulos importantes y enlaces activos.
-   `destructive`: Reservado para acciones que indican destrucción o error, como botones de eliminar, alertas de fallo o mensajes de validación.
-   `surface`: Define los colores de fondo de los contenedores.
    -   `surface-primary`: Para superficies principales como el header o las tarjetas.
    -   `surface-secondary`: Para el fondo general de la aplicación.
-   `text`: Define los colores del texto.
    -   `text-primary`: Para el texto principal y los títulos.
    -   `text-secondary`: Para texto secundario, descripciones o metadatos.

### Ejemplo de Uso en Tailwind

```jsx
// Botón de acción principal
<button className="bg-primary text-white">Confirmar</button>

// Botón de acción destructiva
<button className="bg-destructive text-white">Eliminar</button>

// Tarjeta con texto primario y secundario
<div className="bg-surface-primary p-4">
  <h3 className="text-text-primary">Título Principal</h3>
  <p className="text-text-secondary">Esta es una descripción secundaria.</p>
</div>

// Estilo de fondo del body
<body className="bg-surface-secondary">
```

## Principios de Diseño

-   **Minimalismo:** Utiliza solo las utilidades necesarias. Evita reglas CSS personalizadas.
-   **Mobile-first:** Diseña siempre para móvil primero, luego adapta a desktop con `sm:`, `md:`, `lg:`.
-   **Accesibilidad:** Asegura que todos los elementos interactivos tengan un estado de foco visible (`focus:ring`) y un área táctil adecuada.

## Beneficios del Nuevo Sistema

-   **Claridad Semántica:** Los nombres de los colores (`primary`, `destructive`) describen su función, no su apariencia.
-   **Mantenimiento Sencillo:** Para cambiar el tema de la aplicación, solo es necesario modificar los valores en `tailwind.config.js`. El resto de la aplicación se actualizará automáticamente.
-   **Consistencia Garantizada:** Elimina la ambigüedad y el riesgo de usar colores incorrectos en diferentes componentes.