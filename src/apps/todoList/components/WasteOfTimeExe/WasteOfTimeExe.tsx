import styles from './WasteOfTimeExe.module.scss';
import { useCallback } from 'react';
import { APPS } from '@/features/os/constants';
import { useOsStore } from '@/features/os/osStore';

export const WasteOfTimeExe = () => {
  const runApp = useOsStore((state) => state.runApp);

  const onDoubleClick = useCallback(() => {
    runApp(APPS.todoList);
  }, [runApp]);

  return (
    <div className={styles.container} onDoubleClick={onDoubleClick}>
      <div className={styles.iconWrapper}>
        <div className={styles.mainIcon}>
          <div>. ✓ ---</div>
          <div>. ✓ ---</div>
          <div>. ✓ ---</div>
        </div>

        <div className={styles.overlayBox} />
        <div className={styles.arrow} />
      </div>

      <span className={styles.text}>Waste of time.exe</span>
    </div>
  );
};
