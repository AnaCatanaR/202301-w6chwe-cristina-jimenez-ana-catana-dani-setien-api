import morgan from "morgan";
import { app } from "../listeners/startServer.js";

app.use(morgan("dev"));
