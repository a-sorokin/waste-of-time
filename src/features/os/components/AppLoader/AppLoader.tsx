import styles from './AppLoader.module.scss';
import { FC, memo, useEffect, useState } from 'react';

type Props = {
  setLoadingComplete: (complete: boolean) => void;
  launchSpeed?: number;
};

export const AppLoader: FC<Props> = memo(({ setLoadingComplete, launchSpeed }) => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(dotsInterval);
          setLoadingComplete(true);
        }
        return prev >= 100 ? 0 : prev + 2;
      });
    }, launchSpeed || 50);

    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(dotsInterval);
    };
  }, [setLoadingComplete]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.loadingText}>Loading{dots}</div>

        <div className={styles.progressWrapper}>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: `${progress}%` }} />
          </div>

          <div className={styles.percentage}>{progress}%</div>
        </div>
      </div>
    </div>
  );
});
