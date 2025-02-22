import { Point } from '@/apps/hypercube/types/cubeTypes';

export const drawLine = (context: CanvasRenderingContext2D, from: Point, to: Point) => {
  context.moveTo(from.x, from.y);
  context.lineTo(to.x, to.y);
};
