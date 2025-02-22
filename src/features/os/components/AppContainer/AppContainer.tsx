import styles from './AppContainer.module.scss';
import { FC, ReactNode, memo, useCallback, useMemo, useRef } from 'react';
import clsx from 'clsx';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import { useOsStore } from '@/features/os';
import { AppLoader } from '@/features/os/components/AppLoader/AppLoader';
import { APPS } from '@/features/os/constants';

type Props = {
  children: ReactNode;
  appName: APPS;
  zIndex: number;

  launchSpeed?: number;
  minWidth?: number;
  maxHeight?: number;
};

export const AppContainer: FC<Props> = memo(({ children, appName, launchSpeed, zIndex, minWidth, maxHeight }) => {
  const nodeRef = useRef(null);
  const closeApp = useOsStore((state) => state.closeApp);
  const runningApps = useOsStore((state) => state.runningApps);

  const isEnabled = useMemo(() => runningApps.has(appName), [appName, runningApps]);
  const onCloseClick = useCallback(() => closeApp(appName), [appName, closeApp]);

  if (!isEnabled) return null;
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
            minWidth={minWidth}
            maxHeight={maxHeight}
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
