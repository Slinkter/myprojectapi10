# Scrum Artifacts

This document outlines how Scrum artifacts are used within the project to manage work, track progress, and facilitate transparency.

## 1. Roles

While a full Scrum team implies several roles, for this project, key responsibilities are mapped as follows:

*   **Product Owner (Simulated):** The primary stakeholder who defines the vision, prioritizes the Product Backlog, and represents the user's needs. In a small project, this role might be played by the lead developer or a business analyst.
*   **Scrum Master (Simulated):** Facilitates Scrum events, helps the team remove impediments, and ensures Scrum is understood and enacted. This role can be taken on by an experienced team member.
*   **Development Team:** Self-organizing and cross-functional individuals responsible for delivering a "Done" Increment of potentially shippable product at the end of each Sprint. This includes frontend and potentially backend developers.

## 2. Events

Scrum events are time-boxed to create regularity and minimize the need for other meetings.

*   **Sprint (2 weeks):** A time-box of one month or less during which a "Done," useable, and potentially releasable Increment is created. For this project, a 2-week Sprint cycle is recommended.
*   **Sprint Planning:** (Approx. 4 hours for a 2-week Sprint) The entire Scrum Team collaborates to define:
    *   **Sprint Goal:** What Increment will be delivered this Sprint?
    *   **Sprint Backlog:** Which Product Backlog Items will be worked on and how will the work get done?
*   **Daily Scrum (15 minutes):** A daily meeting for the Development Team to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary. Focus on:
    *   What did I do yesterday that helped the Development Team meet the Sprint Goal?
    *   What will I do today to help the Development Team meet the Sprint Goal?
    *   Do I see any impediment that prevents me or the Development Team from meeting the Sprint Goal?
*   **Sprint Review:** (Approx. 2 hours for a 2-week Sprint) Held at the end of the Sprint to inspect the Increment and adapt the Product Backlog if needed. Key stakeholders attend.
*   **Sprint Retrospective:** (Approx. 1.5 hours for a 2-week Sprint) An opportunity for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint.

## 3. Artifacts

Scrum's artifacts represent work or value to provide transparency and opportunities for inspection and adaptation.

### 3.1. Product Backlog

*   **Description:** An ordered list of everything that might be needed in the product. It is the single source of requirements for any changes to be made to the product.
*   **Content:** Contains User Stories, features, bug fixes, and technical tasks (Technical Debt).
*   **Prioritization:** Continuously refined and prioritized by the Product Owner.

### 3.2. Sprint Backlog

*   **Description:** The set of Product Backlog items selected for the Sprint, plus a plan for delivering the Increment and realizing the Sprint Goal.
*   **Visibility:** Visible to the Development Team and all stakeholders.
*   **Evolution:** The Development Team modifies the Sprint Backlog throughout the Sprint, adding, removing, or updating tasks.

### 3.3. Increment

*   **Description:** The sum of all the Product Backlog items completed during a Sprint and the value of the increments of all previous Sprints. It must be "Done," meaning usable and potentially releasable.
*   **Definition of Done:** For this project, "Done" implies:
    *   Code meets coding standards.
    *   All features work as expected.
    *   Unit and integration tests pass.
    *   Code reviewed and approved.
    *   Functionality deployed to a staging environment (if applicable).

### 3.4. Technical Backlog

*   **Description:** A subset of the Product Backlog specifically focused on technical tasks, improvements, and refactorings that do not directly deliver new user-facing features but are essential for the health and maintainability of the product.
*   **Content:** Includes items identified in the "IMPROVEMENTS_REPORT.md" (now `technical-debt-report.md`), performance optimizations, security enhancements, and architectural improvements.
*   **Prioritization:** Prioritized by the Product Owner (or lead developer/Scrum Master in this context) in collaboration with the Development Team, considering its impact on future development and overall system health.
*   **Example Technical Backlog Items:**
    *   "Refactor `ProductTile` to use `shared/ui/Button`."
    *   "Implement global `container` for consistent page layout."
    *   "Configure absolute imports using `@` alias."
    *   "Add JSDoc to `apiClient.js`."
    *   "Explore E2E testing framework integration."
