// This file contains all the basic configuration logic for server

import dotenv from "dotenv";

type ServerConfig = {
  PORT: number;
};

function loadEnv() {
  dotenv.config();
  console.log("-----Env loaded------");
}

loadEnv();

export const serverConfig: ServerConfig = {
  PORT: Number(process.env.PORT) ?? 3001,
};
