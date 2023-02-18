export interface Attributes {
  speed: number;
  resistance: number;
  creationDate: string;
}

export interface Robot {
  name: string;
  image: string;
  attributes: Attributes;
}

export type Robots = Robot[];
