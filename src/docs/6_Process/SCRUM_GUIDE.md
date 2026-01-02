# Guía SCRUM del Proyecto

## 1. Roles
*   **Product Owner (PO):** Define el "Qué". Prioriza el Backlog. (Estudiante/Cliente).
*   **Scrum Master (SM):** Facilita el "Cómo". Elimina impedimentos. (Rol rotativo o Instructor).
*   **Development Team:** Construye el incremento. (Frontend Developer).

## 2. Eventos (Ceremonias)
*   **Sprint Planning:** (Inicio) Selección de User Stories del Backlog para el Sprint actual.
*   **Daily Standup:** (Diario, 15m) ¿Qué hice ayer? ¿Qué haré hoy? ¿Tengo bloqueos?
*   **Sprint Review:** (Fin) Demo del incremento funcional al PO.
*   **Sprint Retrospective:** (Fin) Mejora continua del proceso.

## 3. Artefactos
*   **Product Backlog:** Lista ordenada de todo lo que se necesita en el producto (`REQUIREMENTS.md`).
*   **Sprint Backlog:** Items seleccionados para el Sprint actual.
*   **Incremento:** La versión funcional del software al final del Sprint (Deploy en gh-pages).

## 4. Definición de Hecho (Definition of Done - DoD)
Un item se considera "Done" cuando:
1.  El código cumple los requisitos funcionales.
2.  Pasó la revisión de código (Code Review).
3.  No rompe el build (`npm run build` exitoso).
4.  No tiene errores de linter (`npm run lint`).
5.  Está desplegado en ambiente de pruebas.
