import styles from './AppContainer.module.scss';
import { FC, ReactNode, memo, useCallback, useRef } from 'react';
import clsx from 'clsx';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import { useOsStore } from '@/features/os';
import { AppLoader } from '@/features/os/components/AppLoader/AppLoader';
import { APPS } from '@/features/os/constants';

type Props = {
  children: ReactNode;
  appName: APPS;
  launchSpeed?: number;
  zIndex: number;
};

export const AppContainer: FC<Props> = memo(({ children, appName, launchSpeed, zIndex }) => {
  const nodeRef = useRef(null);
  const closeApp = useOsStore((state) => state.closeApp);

  const onCloseClick = useCallback(() => closeApp(appName), [appName, closeApp]);

  return (
    <Draggable nodeRef={nodeRef} handle=".drag">
      <div ref={nodeRef} className={styles.appContainer} style={{ zIndex: 100 + zIndex }}>
        <div className={clsx(styles.titleBar, 'drag')}>
          <span>{appName}</span>

          <span className={styles.close} onClick={onCloseClick}>
            <div className={styles.icon}>×</div>
          </span>
        </div>

        <div>
          <AppLoader launchSpeed={launchSpeed} />

          <Resizable
            enable={{
              top: false,
              right: true,
              bottom: true,
              left: true,
              topRight: false,
              bottomRight: true,
              bottomLeft: true,
              topLeft: false,
            }}
          >
            {children}
          </Resizable>
        </div>
      </div>
    </Draggable>
  );
});
