import mongoose from "mongoose";

const robotsSchema = new mongoose.Schema({
  name: String,
  image: String,
  attributes: {
    speed: Number,
    resistance: Number,
    creationDate: String,
  },
});
