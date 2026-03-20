# 05. Validación en Tiempo de Ejecución (Runtime Validation) con Zod

En TypeScript o JSDoc tipamos los datos para tener *IntelliSense* y advertencias en el editor (tiempo de desarrollo). Pero ¿qué pasa cuando la aplicación está corriendo en el navegador del usuario y el servidor API devuelve un dato inesperado?

Si esperamos que `product.price` sea un número y usamos `product.price.toFixed(2)`, pero la API devuelve un *string* (`"120.50"`), la aplicación de React colapsará por completo lanzando un error fatal (White Screen of Death).

Para evitar esto introducimos **Zod**.

## Parsear vs. Validar

Existe una diferencia crucial en el manejo de datos externos:

- **Validar (Validate):** Verificar si un dato es correcto y devolver `true` o `false`. 
- **Parsear (Parse):** Tomar un dato de origen desconocido, forzarlo a pasar por un molde (Esquema), y si pasa, devolver el dato *garantizado* con sus tipos correctos. Si falla, lanzar un error descriptivo.

En este proyecto, usamos **Parseo Estricto**.

## Zod como "Capa de Defensa" (Anti-Corruption Layer)

Colocamos Zod justo en el borde de nuestra aplicación, inmediatamente después de recibir la respuesta de `apiClient` y **antes** de que los datos entren a Redux Toolkit.

```javascript
// src/entities/product/model/productSlice.js

const data = await apiClient.get("/products");

// 🛡️ Capa de Defensa (Zod)
// Si data no cumple con productListSchema, la ejecución se detiene aquí y lanza un ZodError.
const parsedData = productListSchema.parse(data);

return parsedData; // Redux solo recibe datos puros y garantizados
```

### Beneficios Arquitectónicos
1. **Fallo Temprano (Fail Fast):** Si la API cambia su contrato silenciosamente, la app falla en la capa de red (mostrando el `ErrorComponent` genérico gracias a nuestro `StateBoundary`), pero el resto de la UI sigue funcionando en lugar de colapsar intentando renderizar datos malformados.
2. **Confianza Absoluta en UI:** Los componentes (`ProductTile`, `CartSummary`) ya no necesitan docenas de comprobaciones defensivas como `if (product && typeof product.price === 'number')`. Pueden confiar ciegamente en que las variables en Redux son exactas a lo que dicta el dominio.
3. **Mensajes de Error Claros:** Cuando la validación falla, Zod proporciona un informe exacto de qué campo falló (Ej. *"El precio debe ser un número positivo"*), facilitando el debugging.
