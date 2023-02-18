import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.ROBOTS_DATABASE!);
  } catch (error) {
    throw new Error("Error connecting to the database");
  }
};

export default connectDatabase;
