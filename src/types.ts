export interface Attributes {
  speed: number;
  resistance: number;
  creationDate: string;
}

export interface RobotStructure {
  name: string;
  image: string;
  attributes: Attributes;
}

export type Robots = RobotStructure[];
