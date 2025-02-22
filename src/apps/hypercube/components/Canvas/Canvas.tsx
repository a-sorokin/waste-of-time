import styles from './Canvas.module.scss';
import { useEffect, useRef } from 'react';
import { useCanvasStore } from '@/apps/hypercube/canvasStore';
import { drawElements } from '@/apps/hypercube/utils/canvasUtils/drawElements';
import { initCanvas } from '@/apps/hypercube/utils/canvasUtils/initCanvas';
import { resetCanvas } from '@/apps/hypercube/utils/canvasUtils/resetCanvas';
import { createHypercube } from '@/apps/hypercube/utils/hypercubeUtils/createHypercube';

export const Canvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  const setCanvas = useCanvasStore((state) => state.setCanvas);
  const setContext = useCanvasStore((state) => state.setContext);
  const dimensions = useCanvasStore((state) => state.dimensions);

  useEffect(() => {
    if (ref && ref.current) setCanvas(ref.current);
    initCanvas();

    return () => {
      setCanvas(undefined);
      setContext(undefined);
    };
  }, [setCanvas, setContext]);

  useEffect(() => {
    resetCanvas();
    createHypercube(dimensions);
    drawElements();
  }, [dimensions]);

  return <canvas className={styles.canvas} ref={ref} width={window.innerWidth} height={window.innerHeight} />;
};
