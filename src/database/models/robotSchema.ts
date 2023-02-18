import mongoose from "mongoose";

export const robotSchema = new mongoose.Schema({
  name: String,
  image: String,
  attributes: {
    speed: Number,
    resistance: Number,
    creationDate: String,
  },
});

export const Robot = mongoose.model("robot", robotSchema, "robots");
