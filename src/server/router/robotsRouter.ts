import { Router } from "express";
import {
  getRobots,
  getRobotById,
  createRobot,
} from "../controllers/robotsController.js";

export const robotsRouter = Router();

robotsRouter.get("/", getRobots);
robotsRouter.get("/:idRobot", getRobotById);
robotsRouter.post("/create", createRobot);
