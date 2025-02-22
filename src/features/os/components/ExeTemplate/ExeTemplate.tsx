import styles from './ExeTemplate.module.scss';
import { FC, ReactElement, memo, useCallback } from 'react';
import { APPS } from '@/features/os/constants';
import { useOsStore } from '@/features/os/osStore';

type Props = {
  appName: APPS;
  children: ReactElement;
};

export const ExeTemplate: FC<Props> = memo(({ appName, children }) => {
  const runApp = useOsStore((state) => state.runApp);

  const onDoubleClick = useCallback(() => runApp(appName), [appName, runApp]);

  return (
    <div className={styles.exeContainer} onDoubleClick={onDoubleClick}>
      <div className={styles.iconWrapper}>
        <div className={styles.arrowContainer}>
          <div className={styles.overlayBox} />
          <div className={styles.arrow} />
        </div>

        <div className={styles.mainIcon}>{children}</div>
      </div>

      <span className={styles.text}>{appName}</span>
    </div>
  );
});
