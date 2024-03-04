import { envs } from "./config/env.js";
import startServer from "./server/server.js";

const main = async () => {
  const options = {
    port: envs.PORT,
    publicPath: envs.PUBLIC_PATH,
  };

  startServer(options);
};

// Ejemplo de una funcion autoejecutable.
(async () => {
  main();
})();
