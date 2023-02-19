import { Router } from "express";
import { getRobots, getRobotById } from "../controllers/robotsController.js";

export const robotsRouter = Router();

robotsRouter.get("/", getRobots);
robotsRouter.get("/:idRobot", getRobotById);
