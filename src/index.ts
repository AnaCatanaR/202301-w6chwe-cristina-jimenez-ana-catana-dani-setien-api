import "./loadEnvironments.js";
import "./middlewares/middlewares.js";
import { app, startServer } from "./server/startServer.js";
import { type Request, type Response } from "express";
import connectDatabase from "./database/connectDatabase.js";

const port = process.env.PORT ?? 4001;

await startServer(+port);
await connectDatabase();

app.use("/robots", (req: Request, res: Response) => {
  res.status(200).json({});
});
