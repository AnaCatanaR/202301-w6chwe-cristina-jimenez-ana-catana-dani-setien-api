import { debug } from "console";
import { type NextFunction, type Request, type Response } from "express";
import type CustomError from "../../CustomError/CustomError.js";

const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  debug(error.message);
  res.status(error.statusCode).json({ error: error.publicMessage });
};

export default generalError;
