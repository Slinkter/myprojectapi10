# Índice del Caso de Estudio: myprojectapi10

Este repositorio es un caso de estudio real para estudiantes de ingeniería de software. Aquí se demuestra cómo aplicar principios de **Clean Architecture**, patrones de diseño modernos y buenas prácticas de la industria en un entorno **React 18** escalable.

El propósito de esta documentación no es solo decirte *qué* hace el código, sino **por qué** está estructurado de esta manera. Cada decisión arquitectónica aquí tiene un motivo basado en la experiencia de escalar aplicaciones frontend en producción.

## Módulos de Aprendizaje

1. **[01. Arquitectura y FSD (Feature-Sliced Design)](./01_Architecture_FSD.md):** 
   Descubre por qué dividimos la aplicación en capas (shared, entities, features, widgets, pages) y cómo esto previene el acoplamiento caótico (el famoso "código espagueti").

2. **[02. Gestión de Estado y Redux Toolkit](./02_State_Management_Redux.md):**
   Aprende cómo manejamos datos asíncronos (`createAsyncThunk`), por qué es crucial la memoización matemática de estados derivados con `createSelector` y cómo evitamos renderizados innecesarios.

3. **[03. UI, Estilado y Composición (Tailwind v3)](./03_UI_and_Styling_Tailwind.md):**
   Comprende el patrón de composición de clases con la utilidad `cn()` (`clsx` + `tailwind-merge`), el manejo de animaciones nativas y el patrón `StateBoundary` para orquestación de UI asíncrona.

4. **[04. Código Limpio y JSDoc Avanzado](./04_Clean_Code_JSDoc.md):**
   Explora cómo logramos *IntelliSense* (autocompletado robusto) en VS Code y validación estática de tipos en JavaScript puro sin necesidad del costo de compilación de TypeScript.

5. **[05. Validación en Tiempo de Ejecución con Zod](./05_Runtime_Validation_Zod.md):**
   Aprende la diferencia entre *tipado estático* y *validación en tiempo de ejecución* (Parse vs Validate) utilizando Zod como capa de defensa anti-corrupción.

---
*Caso de estudio optimizado para asignaturas de Arquitectura de Software Frontend.*