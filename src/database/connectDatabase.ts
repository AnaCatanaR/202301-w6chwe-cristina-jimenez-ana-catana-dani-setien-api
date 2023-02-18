import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    mongoose.set("strictQuery", false);

    mongoose.set("toJSON", {
      virtuals: true,
      transform(doc, converted) {
        delete converted._id;
      },
    });

    await mongoose.connect(process.env.ROBOTS_DATABASE!);
  } catch (error) {
    throw new Error("Error connecting to the database");
  }
};

export default connectDatabase;
