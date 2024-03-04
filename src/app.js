const { envs } = require('./config/env');
const { startServer } = require('./server/server');

const main = async () => {
    const options = {
        port: envs.PORT,
        publicPath: envs.PUBLIC_PATH
    };
    
    startServer(options);
}

// Ejemplo de una funcion autoejecutable.
(async () => {
    main();
})();