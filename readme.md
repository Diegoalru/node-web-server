# Proyecto de Servidor Web en Node.js

Este es un proyecto de servidor web en Node.js basado en el repositorio [node_web_server](https://github.com/sergiecode/node_web_server), que utiliza Express para servir una página web HTML desde la carpeta "public". También utiliza variables de entorno para configurar el puerto en el que se ejecuta el servidor.

## Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/Diegoalru/node-web-server.git
    ```

2. Navega hasta la carpeta del proyecto:

    ```bash
    cd node_web_server
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto y define las variables de entorno necesarias. Por ejemplo:

    ```plaintext
    PORT=3000
    ```

2. Asegúrate de que la carpeta "public" contiene los archivos HTML y otros recursos que deseas servir.

## Uso

1. Inicia el servidor:

    ```bash
    npm start
    ```

2. Abre tu navegador web y visita `http://localhost:3000` (o el puerto que hayas configurado en el archivo `.env`) para ver la página web servida desde la carpeta "public".

## Referencia

Utilizo como base para este proyecto el curso de Node.js de [SergieCode](https://github.com/sergiecode/node_web_server).