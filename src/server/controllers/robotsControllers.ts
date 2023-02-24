import { type NextFunction } from "connect";
import { type Request, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError.js";
import { Robot } from "../../database/models/robotSchema.js";
import { type RobotStructure } from "../../types.js";
import createDebug from "debug";

const debug = createDebug("robots:controller");

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
    const getRobotError = new CustomError(
      error.message as string,
      500,
      "Sorry, we couldn't retreive the robot"
    );
    next(getRobotError);
  }
};

export const createRobot = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    RobotStructure
  >,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      image,
      attributes: { creationDate, speed, resistance },
    } = req.body;

    const newRobot = await Robot.create({
      name,
      image,
      attributes: { creationDate, speed, resistance },
    });

    res.status(201).json({ newRobot });
  } catch (error) {
    const createRobotError = new CustomError(
      error.message as string,
      500,
      "Error creating the robot"
    );
    next(createRobotError);
  }
};

export const deleteRobotById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idRobot } = req.params;

    await Robot.findByIdAndDelete(idRobot);

    res.status(200).json({});
  } catch (error) {
    const createRobotError = new CustomError(
      error.message as string,
      500,
      "Error deleting the robot"
    );
    next(createRobotError);
  }
};
