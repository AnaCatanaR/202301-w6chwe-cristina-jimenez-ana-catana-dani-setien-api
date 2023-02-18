import { Router } from "express";
import getRobots from "../controllers/robotsController.js";

export const robotsRouter = Router();

robotsRouter.get("/", getRobots);
