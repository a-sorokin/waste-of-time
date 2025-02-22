import styles from './Warning.module.scss';
import clsx from 'clsx';
import { useCanvasStore } from '@/apps/hypercube/canvasStore';
import { DIMENSIONS_LIMIT } from '@/apps/hypercube/constants/constants';

export const Warning = () => {
  const dimensions = useCanvasStore((state) => state.dimensions);

  return (
    <div className={styles.warningContainer}>
      <div
        className={clsx(styles.warning, {
          [styles.ok]: dimensions.length < 9,
          [styles.normalWarn]: dimensions.length === 9,
          [styles.warn]: dimensions.length >= 10,
        })}
      >
        {dimensions.length < DIMENSIONS_LIMIT ? (
          <span>Warning</span>
        ) : (
          <div>
            <div>Warning...</div>
            <div className={styles.smallText}>We are limited by the technology of our time</div>
          </div>
        )}
      </div>
    </div>
  );
};
