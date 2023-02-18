import mongoose from "mongoose";
import createDebug from "debug";
import chalk from "chalk";

const debug = createDebug(":robots:database:connectDatabase");

const connectDatabase = async () => {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.ROBOTS_DATABASE!);

    debug(chalk.greenBright("Connected to database"));
  } catch (error) {
    throw new Error("Error connecting to the database");
  }
};

export default connectDatabase;
