import styles from './Controls.module.scss';
import { useCanvasStore } from '@/apps/hypercube/canvasStore';
import { Button } from '@/basicComponents/Button/Button';

export const Controls = () => {
  const dimensions = useCanvasStore((state) => state.dimensions);
  const addDimension = useCanvasStore((state) => state.addDimension);
  const removeDimension = useCanvasStore((state) => state.removeDimension);

  return (
    <div className={styles.controls}>
      <Button onClick={addDimension}>Add dimension</Button>
      <Button onClick={removeDimension}>Remove dimension</Button>

      <div>
        {dimensions.map((d, i) => (
          <div key={`deltas.${i}`} className={styles.deltas}>
            <span>Delta x: {d.x}</span>
            <span>Delta y: {d.y}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
