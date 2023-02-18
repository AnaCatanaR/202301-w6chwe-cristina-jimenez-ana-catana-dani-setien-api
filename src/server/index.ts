import morgan from "morgan";
import { app } from "./startServer";
import express from "express";
import { robotsRouter } from "./router/robotsRouter";

app.use(morgan("dev"));
app.use(express.json());

app.use("/robots", robotsRouter);
