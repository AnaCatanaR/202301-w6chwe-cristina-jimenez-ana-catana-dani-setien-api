import mongoose from "mongoose";

const robotSchema = new mongoose.Schema({
  name: String,
  image: String,
  attributes: {
    speed: Number,
    resistance: Number,
    creationDate: String,
  },
});
