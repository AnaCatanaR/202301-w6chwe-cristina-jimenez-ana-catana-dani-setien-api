import "./loadEnvironments.js";
import "./middlewares/middlewares.js";
import { app, startServer } from "./server/startServer.js";
import { type Request, type Response } from "express";
import connectDatabase from "./database/connectDatabase.js";
import { Robot } from "./database/models/robotSchema.js";
import createDebug from "debug";
import chalk from "chalk";

const debug = createDebug(":robots");

const port = process.env.PORT ?? 4001;

try {
  await connectDatabase();
  debug(chalk.greenBright("Connected to database"));

  await startServer(+port);
  debug(chalk.greenBright(`Connected to server on port ${port} `));
} catch (error) {
  debug(chalk.redBright(error.message));
}

app.use("/robots", async (req: Request, res: Response) => {
  const robots = await Robot.find();
  res.status(200).json({ robots });
});
