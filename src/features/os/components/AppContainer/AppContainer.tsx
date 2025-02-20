import styles from './AppContainer.module.scss';
import { FC, ReactNode, memo, useCallback, useRef, useState } from 'react';
import clsx from 'clsx';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import { useOsStore } from '@/features/os';
import { AppLoader } from '@/features/os/components/AppLoader/AppLoader';
import { APPS } from '@/features/os/constants';

type Props = {
  children: ReactNode;
  appName: APPS;
};

export const AppContainer: FC<Props> = memo(({ children, appName }) => {
  const nodeRef = useRef(null);
  const closeApp = useOsStore((state) => state.closeApp);

  const [loadingComplete, setLoadingComplete] = useState(false);

  const onCloseClick = useCallback(() => closeApp(appName), [appName, closeApp]);

  return (
    <div>
      <Draggable nodeRef={nodeRef} handle=".drag">
        <div ref={nodeRef} className={styles.appContainer}>
          <div className={clsx(styles.titleBar, 'drag')}>
            <span>{appName}</span>

            <span className={styles.close} onClick={onCloseClick}>
              <div className={styles.icon}>×</div>
            </span>
          </div>

          <div>
            {loadingComplete ? null : <AppLoader setLoadingComplete={setLoadingComplete} />}

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
    </div>
  );
});
