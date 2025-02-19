import styles from './AppContainer.module.scss';
import { FC, ReactNode, memo, useCallback, useRef } from 'react';
import { useOsStore } from '@/features/os';
import { APPS } from '@/features/os/constants';
import Draggable from 'react-draggable';

type Props = {
  children: ReactNode;
  appName: APPS;
};

export const AppContainer: FC<Props> = memo(({ children, appName }) => {
  const nodeRef = useRef(null);
  const closeApp = useOsStore((state) => state.closeApp);

  const onCloseClick = useCallback(() => closeApp(appName), [appName, closeApp]);

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} className={styles.appContainer}>
        <div className={styles.titleBar}>
          <span className={styles.title}>{appName}</span>
          <span className={styles.close} onClick={onCloseClick}>
            <div className={styles.icon}>×</div>
          </span>
        </div>

        {children}
      </div>
    </Draggable>
  );
});
