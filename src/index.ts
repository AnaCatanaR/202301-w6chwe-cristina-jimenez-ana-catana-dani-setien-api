import "./loadEnvironments.js";
import "./middlewares/middlewares.js";
import { app, startServer } from "./listeners/startServer.js";
import { type Request, type Response } from "express";
import connectDatabase from "./database/connectDatabase.js";

export const port = process.env.PORT ?? 4001;

startServer(+port);

app.use("/robots", (req: Request, res: Response) => {
  res.status(200).json({});
});

await connectDatabase();
