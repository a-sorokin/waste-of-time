import { useCanvasStore } from '@/apps/hypercube/canvasStore';

export const drawElements = () => {
  const { context } = useCanvasStore.getState();
  if (!context) return;

  // square.forEach((line) => {
  //   const point0 = line[0];
  //   const point1 = line[1];
  //   drawLine(context, point0, point1);
  // });

  context.stroke();
};
