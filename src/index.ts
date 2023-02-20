import "./loadEnvironments.js";
import "./server/index.js";
import { startServer } from "./server/startServer.js";
import connectDatabase from "./database/connectDatabase.js";

import createDebug from "debug";
import chalk from "chalk";

const debug = createDebug("robots:root");

const port = process.env.PORT ?? 4001;

try {
  await connectDatabase();
  debug(chalk.greenBright("Connected to database"));

  await startServer(+port);
  debug(
    chalk.greenBright(
      `Connected to server on port ${chalk.yellowBright(port)} `
    )
  );
} catch (error) {
  debug(chalk.redBright(error.message));
}
