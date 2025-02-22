import { useCanvasStore } from '@/apps/hypercube/canvasStore';
import { Dimensions } from '@/apps/hypercube/types/cubeTypes';
import { drawLine } from '@/apps/hypercube/utils/canvasUtils/drawLine';
import { createCube } from '@/apps/hypercube/utils/hypercubeUtils/createCube';
import { createSquare } from '@/apps/hypercube/utils/hypercubeUtils/createSquare';

export const createHypercube = (dimensions: Dimensions) => {
  const { context, setStats } = useCanvasStore.getState();
  if (!context) return;

  const defaultSquare = createSquare({ x: 50, y: 650 });

  const hypercube = dimensions.reduce((acc, { x, y }) => {
    return createCube(acc, x, y);
  }, defaultSquare);

  setStats(hypercube.length);

  hypercube.forEach((line) => {
    const point0 = line[0];
    const point1 = line[1];
    drawLine(context, point0, point1);
  });
};
