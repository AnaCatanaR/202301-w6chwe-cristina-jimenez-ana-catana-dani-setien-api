import "./loadEnvironments.js";
import "./middlewares/middlewares.js";
import { app, startServer } from "./server/startServer.js";
import { type Request, type Response } from "express";
import connectDatabase from "./database/connectDatabase.js";
import { Robot } from "./database/models/robotSchema.js";

const port = process.env.PORT ?? 4001;

await startServer(+port);
await connectDatabase();

app.use("/robots", async (req: Request, res: Response) => {
  const robots = await Robot.find();
  res.status(200).json({ robots });
});
