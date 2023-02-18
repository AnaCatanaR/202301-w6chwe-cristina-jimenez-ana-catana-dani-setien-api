import "./loadEnvironments.js";
import "./server/middlewares/middlewares.js";
import { startServer } from "./server/startServer.js";

const port = process.env.PORT ?? 4001;

await startServer(+port);
