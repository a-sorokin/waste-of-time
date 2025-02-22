import styles from './Stats.module.scss';
import { useCanvasStore } from '@/apps/hypercube/canvasStore';

export const Stats = () => {
  const stats = useCanvasStore((state) => state.stats);
  const dimensions = useCanvasStore((state) => state.dimensions);

  return (
    <div className={styles.stats}>
      <span>Dimensions: {dimensions.length + 2}</span>
      <span>Edges: {stats}</span>
    </div>
  );
};
