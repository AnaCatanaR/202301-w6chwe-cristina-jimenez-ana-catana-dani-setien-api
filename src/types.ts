import { type Request } from "express";
import { type JwtPayload } from "jsonwebtoken";

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

export interface CustomJwtPayload extends JwtPayload {
  sub: string;
}

export interface CustomRequest extends Request {
  ownerId: string;
}
export type Robots = RobotStructure[];
