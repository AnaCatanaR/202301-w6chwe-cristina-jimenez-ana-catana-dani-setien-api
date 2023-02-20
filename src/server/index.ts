import morgan from "morgan";
import app from "./startServer.js";
import express from "express";
import { robotsRouter } from "./router/robotsRouter.js";
import { notFoundError } from "./middlewares/errorMiddlewares.js";
import generalError from "./middlewares/generalError/generalError.js";
import cors from "cors";
import auth from "./middlewares/auth.js";

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

app.use("/robots", auth, robotsRouter);

app.use(notFoundError);
app.use(generalError);
