import morgan from "morgan";
import app from "./startServer.js";
import express from "express";
import { robotsRouter } from "./router/robotsRouter.js";
import { notFoundError } from "./middlewares/errorMiddlewares.js";
import generalError from "./middlewares/generalError/generalError.js";
import cors from "cors";

const corsOptions = {
  origin: "trustedwebsite.com",
};
app.use(cors(corsOptions));

app.use(morgan("dev"));
app.use(express.json());

app.use("/robots", robotsRouter);

app.use(notFoundError);
app.use(generalError);
