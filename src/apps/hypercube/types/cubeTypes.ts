export type Point = { x: number; y: number };

export type Line = [Point, Point];

export type GeometricObject = Line[];

export type Dimension = {
  x: number;
  y: number;
};

export type Dimensions = Dimension[];
