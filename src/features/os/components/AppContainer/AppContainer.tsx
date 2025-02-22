import styles from './AppContainer.module.scss';
import { FC, ReactNode, memo, useCallback, useMemo, useRef } from 'react';
import clsx from 'clsx';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import { useOsStore } from '@/features/os';
import { RESIZABLE_PROPS } from '@/features/os/components/AppContainer/constants';
import { AppLoader } from '@/features/os/components/AppLoader/AppLoader';
import { APPS } from '@/features/os/constants';

type Props = {
  children: ReactNode;
  appName: APPS;

  launchSpeed?: number;
  minWidth?: number;
  maxHeight?: number;
};

export const AppContainer: FC<Props> = memo(({ children, appName, launchSpeed, minWidth, maxHeight }) => {
  const nodeRef = useRef(null);

  const closeApp = useOsStore((state) => state.closeApp);
  const runningApps = useOsStore((state) => state.runningApps);
  const selectApp = useOsStore((state) => state.selectApp);
  const appsOrder = useOsStore((state) => state.appsOrder);

  const isEnabled = useMemo(() => runningApps.has(appName), [appName, runningApps]);
  const onCloseClick = useCallback(() => closeApp(appName), [appName, closeApp]);
  const onSelect = useCallback(() => selectApp(appName), [appName, selectApp]);

  if (!isEnabled) return null;
  return (
    <Draggable nodeRef={nodeRef} handle=".drag" onMouseDown={onSelect}>
      <div ref={nodeRef} className={styles.appContainer} style={{ zIndex: 100 + appsOrder[appName] }}>
        <div className={clsx(styles.titleBar, 'drag')}>
          <span>{appName}</span>

          <span className={styles.close} onClick={onCloseClick}>
            <div className={styles.icon}>×</div>
          </span>
        </div>

        <div>
          <AppLoader launchSpeed={launchSpeed} />

          <Resizable minWidth={minWidth} maxHeight={maxHeight} enable={RESIZABLE_PROPS}>
            {children}
          </Resizable>
        </div>
      </div>
    </Draggable>
  );
});
