import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.ROBOTS_DATABASE!);
  } catch (error) {}
};

export default connectToDatabase;
