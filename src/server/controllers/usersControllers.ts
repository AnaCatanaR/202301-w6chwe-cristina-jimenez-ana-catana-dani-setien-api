import "../../loadEnvironments.js";
import { type NextFunction, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError.js";
import { User } from "../../database/models/UserSchema.js";
import { type CustomRequest } from "../../types";
import jwt from "jsonwebtoken";

export const loginUser = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const { password, username } = req.body;

  const user = await User.findOne({ username, password });

  if (!user) {
    const invalidUsernamePassword = new CustomError(
      "No matches for username & password combination",
      401,
      "The combination loginname and password is incorrect, please try again."
    );

    next(invalidUsernamePassword);
    return;
  }

  const jwtPayload = {
    sub: user._id,
  };

  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  res.status(200).json({ token });
};
