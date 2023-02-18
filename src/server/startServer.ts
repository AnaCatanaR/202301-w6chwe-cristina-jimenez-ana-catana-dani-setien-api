import express from "express";
import chalk from "chalk";
import { CustomError } from "../CustomError/CustomError.js";

export const app = express();

export const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      resolve(server);
    });

    server.on("error", (error: CustomError) => {
      let errorMessage = "Error on starting the server.";

      if (error.code === "EADDRINUSE") {
        errorMessage += ` The port ${chalk.green(port)} is ${chalk.red(
          "already in use"
        )}.`;
      }

      reject(new CustomError(errorMessage, 500, "Our server is not online."));
    });
  });
