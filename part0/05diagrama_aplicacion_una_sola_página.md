# Diagrama - Acceso a la versión SPA de la aplicación de notas

Este diagrama representa lo que ocurre cuando un usuario accede a la versión de aplicación de una sola página (SPA).

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: El navegador ejecuta el JavaScript que controla toda la lógica de la SPA

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON con todas las notas
    deactivate server

    Note right of browser: El navegador renderiza dinámicamente las notas sin recargar la página
