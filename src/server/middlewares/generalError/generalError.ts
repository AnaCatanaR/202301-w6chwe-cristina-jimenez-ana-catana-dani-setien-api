import createDebug from "debug";
import { type Request, type Response, type NextFunction } from "express";
import { type CustomError } from "../../../CustomError/CustomError.js";

const debug = createDebug("robots:generalError");

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
