import dotenv from "dotenv";
import env_var from "env-var";

dotenv.config();

export const envs = {
  PORT: env_var.get("PORT").default(3000).asPortNumber(),
  PUBLIC_PATH: env_var.get("PUBLIC_PATH").default("public").asString(),
};
