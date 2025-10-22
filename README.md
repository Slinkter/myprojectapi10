# Carrito de Compras con React y Redux

![Captura de pantalla de la aplicación de carrito de compras](./api10.png)

Este proyecto es una aplicación web de carrito de compras creada con React. Permite a los usuarios ver una lista de productos, agregarlos a un carrito de compras y ver los artículos en el carrito.

## Características

-   **Listado de productos:** Muestra una lista de productos obtenidos de una API.
-   **Gestión del carrito de compras:** Los usuarios pueden agregar y eliminar productos del carrito.
-   **Resumen del carrito:** Muestra la cantidad total de artículos y el precio total en el carrito.
-   **Diseño receptivo:** La aplicación está diseñada para funcionar en diferentes tamaños de pantalla.

## Arquitectura

La aplicación sigue una arquitectura basada en componentes y utiliza Redux para la gestión del estado centralizado.

### Estructura de carpetas

```
src/
├── components/      # Componentes de la interfaz de usuario reutilizables
├── pages/           # Componentes de página (Home, Cart)
├── store/           # Configuración de Redux (store, slices)
│   └── slices/      # Slices de Redux para diferentes partes del estado
└── utils/           # Funciones de utilidad
```

### Gestión de estado con Redux

La aplicación utiliza Redux Toolkit para una gestión de estado eficiente y predecible.

-   **`store.js`:** Configura el store de Redux, combinando los diferentes reductores de slice.
-   **`cart-slice.js`:** Gestiona el estado del carrito de compras (agregar y eliminar artículos).
-   **`product-slice.js`:** Gestiona el estado de los productos, incluyendo la obtención de datos, el estado de carga y los errores. Utiliza `createAsyncThunk` para manejar acciones asincrónicas para obtener productos de la API.

## Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/slinkter/myprojectapi0x.git
    ```

2.  Navega al directorio del proyecto:
    ```bash
    cd myprojectapi0x
    ```

3.  Instala las dependencias:
    ```bash
    npm install
    ```

## Scripts disponibles

En el directorio del proyecto, puedes ejecutar:

-   `npm run dev`: Inicia la aplicación en modo de desarrollo.
-   `npm run build`: Compila la aplicación para producción.
-   `npm run preview`: Sirve la compilación de producción localmente.
-   `npm run deploy`: Despliega la aplicación en GitHub Pages.

## API

Este proyecto utiliza la [Fake Store API](https://fakestoreapi.com/) para obtener datos de productos.