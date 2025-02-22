import { GeometricObject } from '@/apps/hypercube/types/cubeTypes';

export const createCube = (cube: GeometricObject, dx: number, dy: number) => {
  const cube4 = structuredClone(cube);

  cube.forEach((line) => {
    const { x: x0, y: y0 } = line[0];
    const { x: x1, y: y1 } = line[1];

    cube4.push([
      { x: x0 + dx, y: y0 - dy },
      { x: x1 + dx, y: y1 - dy },
    ]);

    cube4.push([
      { x: x0, y: y0 },
      { x: x0 + dx, y: y0 - dy },
    ]);
  });

  return cube4;
};
