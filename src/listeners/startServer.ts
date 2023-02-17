import express from "express";
import debug from "debug";

export const app = express();

export const createDebug = debug(":robots:startServer");

export const startServer = (port: number) => {
  app.listen(port, () => {
    createDebug(`A server is listening in the ${port}`);
  });
};
