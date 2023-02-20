import { type Request } from "express";

export interface Attributes {
  speed: number;
  resistance: number;
  creationDate: string;
}

export interface RobotStructure {
  id: string;
  name: string;
  image: string;
  attributes: Attributes;
}

export interface RobotDataStructure {
  name: string;
  image: string;
  attributes: Attributes;
}

export type Robots = RobotStructure[];

export interface CustomRequest extends Request {
  body: {
    username: string;
    password: string;
  };
}
