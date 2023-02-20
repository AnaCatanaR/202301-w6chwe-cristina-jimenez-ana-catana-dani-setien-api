import { type NextFunction, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError";
import { User } from "../../database/models/UserSchema";
import { type CustomRequest } from "../../types";

const loginUser = async (
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
  }
};
