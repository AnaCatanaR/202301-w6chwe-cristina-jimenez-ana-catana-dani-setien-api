import { type NextFunction, type Response } from "express";
import jwt from "jsonwebtoken";
import { CustomError } from "../../CustomError/CustomError.js";
import { type CustomJwtPayload, type CustomRequest } from "../../types";

export const auth = (req: CustomRequest, res: Response, next: NextFunction) => {
  if (!req.header("Authorization")) {
    const authenticationError = new CustomError(
      "Missing authorization header",
      401,
      "Authentication failure"
    );

    next(authenticationError);
    return;
  }

  if (!req.header("Authorization")?.includes("Bearer")) {
    const authenticationTypeError = new CustomError(
      "Missing authorization header",
      401,
      "Authentication failure"
    );

    next(authenticationTypeError);
    return;
  }

  const token = req.header("Authorization"?.replace(/^Bearers\s*/, ""));
  try {
    const { sub: ownerId } = jwt.verify(
      token!,
      process.env.JWT_SECRET!
    ) as CustomJwtPayload;

    req.ownerId = ownerId;
  } catch (error) {
    next(error.message);
  }

  next();
};

export default auth;
