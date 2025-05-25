# Diagrama - Crear una nueva nota en la versión SPA

Este diagrama muestra lo que ocurre cuando un usuario crea una nueva nota en la aplicación de una sola página (SPA).

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Usuario escribe una nota y hace clic en "Save"

    Note right of browser: El navegador crea una nueva nota y la muestra de inmediato

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of server: La nota se envía como JSON con content y date
    server-->>browser: Status 201 Created (sin redirección)
    deactivate server

    Note right of browser: La nota ya fue añadida al estado local de la SPA (no necesita esperar la respuesta)
