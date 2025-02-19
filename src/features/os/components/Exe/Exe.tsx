import styles from './Exe.module.scss';
import { useCallback } from 'react';

export const Exe = () => {
  const onDoubleClick = useCallback(() => {
    console.log('Waste of time.exe');
  }, []);

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
