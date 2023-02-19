import { type NextFunction } from "connect";
import { type Request, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError.js";
import { Robot } from "../../database/models/robotSchema.js";

export const getRobots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const robots = await Robot.find();

    res.status(200).json({ robots });
  } catch (error) {
    const getRobotsError = new CustomError(
      error.message as string,
      500,
      "Sorry, we couldn't retreive robots"
    );
    next(getRobotsError);
  }
};

export const getRobotById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { idRobot } = req.params;

  try {
    const robot = await Robot.findById(idRobot);

    res.status(200).json({ robot });
  } catch (error) {
    const getRobotsError = new CustomError(
      error.message as string,
      500,
      "Sorry, we couldn't retreive the robot"
    );
    next(getRobotsError);
  }
};
