import { useCanvasStore } from '@/apps/hypercube/canvasStore';

export const initCanvas = () => {
  const { canvas, setContext } = useCanvasStore.getState();
  if (!canvas) return;

  const context = canvas.getContext('2d');
  if (!context) return;
  setContext(context || undefined);

  context.strokeStyle = '#fff';
  context.lineWidth = 1;
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.beginPath();
};
