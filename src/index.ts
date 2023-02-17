import "./loadEnvironments.js";
import "./middlewares/middlewares.js";

import { startServer } from "./listeners/startServer.js";

export const port = process.env.PORT ?? 4001;

startServer(+port);
