import { Router } from "express";
import {
  getRobots,
  getRobotById,
  createRobot,
  deleteRobotById,
} from "../controllers/robotsController.js";

export const robotsRouter = Router();

robotsRouter.get("/", getRobots);
robotsRouter.get("/:idRobot", getRobotById);
robotsRouter.post("/create", createRobot);
robotsRouter.delete("/:idRobot", deleteRobotById);
