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

export type Robots = RobotStructure[];
