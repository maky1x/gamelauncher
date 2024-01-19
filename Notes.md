Notes:
- index file should be as simple as possible (load App component)
- App component should hold the main "ideas" of the app: theme for UI, context for state, router for routing :)
- App component holds the first main component of the project, that will render your UI

Architecture:
- UI-wise static components (such as the header) should only be rendered in one place
  - dynamic sections of the app are handled through routes (read on the idea of SPAs)
- logic-wise:
  - 