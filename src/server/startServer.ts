import express from "express";
import createDebug from "debug";
import chalk from "chalk";
import type CustomError from "../CustomError/CustomError.js";

export const app = express();
const debug = createDebug(":robots:startServer");

export const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server listening on port ${chalk.blue(port)}.`);
      resolve(server);
    });

    server.on("error", (error: CustomError) => {
      let errorMessage = "Error on starting the server.";

      if (error.code === "EADDRINUSE") {
        errorMessage += ` The port ${chalk.green(port)} is ${chalk.red(
          "already in use"
        )}.`;
      }

      reject(new Error(errorMessage));
    });
  });
