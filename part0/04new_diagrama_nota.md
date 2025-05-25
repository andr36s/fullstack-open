# sequenceDiagram - Creacion de nota

    Este diagrama nos va a mostrar que sucede al hacer unanueva nota y guardarla

    participant browser
    participan server

    Usuario comienza la acción copiando y haciendo clic en save

    browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server -> browser: HTML document
    desactivate server

    browser -> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server -> browser: Solicitud redirigida
    desactivate server

    browser -> server: POST https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server -> browser: Archivo de JavaScript 
    desactivate server

    browser -> server: POST https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server -> browser: Archivo CSS
    desactivate server

    browser -> server: POST https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server -> browser: Data JSON
    desactivate server

    El navegador trae las notas con la nueva nota incluida
    