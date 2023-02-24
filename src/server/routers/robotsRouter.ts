import { Router } from "express";
import {
  getRobots,
  getRobotById,
  createRobot,
  deleteRobotById,
} from "../controllers/robotsController.js";
import multer from "multer";

export const robotsRouter = Router();

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads/");
  },
  filename(req, file, callback) {
    callback(null, `${Date.now()}${file.originalname}`); // Node módulo path
  },
});

const upload = multer({ storage });

robotsRouter.get("/", getRobots);
robotsRouter.get("/:idRobot", getRobotById);
robotsRouter.post("/create", createRobot);

robotsRouter.post("/createFile", upload.single("image"), createRobot);

robotsRouter.delete("/:idRobot", deleteRobotById);
