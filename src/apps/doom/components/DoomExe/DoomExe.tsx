import styles from './DoomExe.module.scss';
import { useCallback } from 'react';
import { APPS } from '@/features/os/constants';
import { useOsStore } from '@/features/os/osStore';

export const DoomExe = () => {
  const runApp = useOsStore((state) => state.runApp);

  const onDoubleClick = useCallback(() => {
    runApp(APPS.doom);
  }, [runApp]);

  return (
    <div className={styles.container} onDoubleClick={onDoubleClick}>
      <div className={styles.iconWrapper}>
        <div className={styles.mainIcon}>
          <div>Text</div>
        </div>

        <div className={styles.overlayBox} />
        <div className={styles.arrow} />
      </div>

      <span className={styles.text}>{APPS.doom}</span>
    </div>
  );
};
