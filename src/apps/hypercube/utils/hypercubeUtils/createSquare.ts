import { SQUARE_SIZE } from '@/apps/hypercube/constants/cubeConstants';
import { GeometricObject, Point } from '@/apps/hypercube/types/cubeTypes';

export const createSquare = ({ x, y }: Point): GeometricObject => {
  const sq = SQUARE_SIZE;

  return [
    [
      { x, y },
      { x: x + sq, y },
    ],
    [
      { x: x + sq, y },
      { x: x + sq, y: y - sq },
    ],
    [
      { x: x + sq, y: y - sq },
      { x, y: y - sq },
    ],
    [
      { x, y: y - sq },
      { x, y },
    ],
  ];
};
