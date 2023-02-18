import morgan from "morgan";
import { app } from "./startServer";
import express from "express";

app.use(morgan("dev"));
app.use(express.json());
