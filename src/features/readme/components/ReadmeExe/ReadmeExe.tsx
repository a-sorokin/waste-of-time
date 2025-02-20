import styles from './ReadmeExe.module.scss';
import { useCallback } from 'react';
import { APPS } from '@/features/os/constants';
import { useOsStore } from '@/features/os/osStore';

export const ReadmeExe = () => {
  const runApp = useOsStore((state) => state.runApp);

  const onDoubleClick = useCallback(() => {
    runApp(APPS.readme);
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
      <span className={styles.text}>{APPS.readme}</span>
    </div>
  );
};
