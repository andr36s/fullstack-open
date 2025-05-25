# Diagrama - Creación de una nueva nota

Este diagrama representa los eventos que ocurren cuando el usuario escribe una nueva nota en la página.

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Usuario escribe una nota y hace clic en "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of server: El cuerpo de la petición incluye el contenido de la nota en formato x-www-form-urlencoded
    server-->>browser: Redirección HTTP 302 a /notes
    deactivate server

    Note right of browser: El navegador sigue la redirección cargando nuevamente la página

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: El JavaScript se ejecuta y solicita los datos en formato JSON

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON con todas las notas (incluyendo la nueva)
    deactivate server

    Note right of browser: El navegador renderiza las notas con la nueva incluida
