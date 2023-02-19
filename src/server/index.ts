import morgan from "morgan";
import app from "./startServer.js";
import express from "express";
import { robotsRouter } from "./router/robotsRouter.js";
import { notFoundError } from "./middlewares/errorMiddlewares.js";
import generalError from "./middlewares/generalError/generalError.js";
import cors from "cors";

const corsOptions = {
  origin: [
    "https://202301-w6chwe-cristina-jimenez-ana-ca.netlify.app/",
    "http://localhost:3000",
    "http://localhost:3001",
  ],
};
app.use(cors(corsOptions));

app.use(morgan("dev"));
app.use(express.json());

app.use("/robots", robotsRouter);

app.use(notFoundError);
app.use(generalError);
