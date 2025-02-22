import styles from './Desktop.module.scss';
import { useEffect } from 'react';
import { Readme, ReadmeExe } from '@/apps/readme';
import { Tetris, TetrisExe } from '@/apps/tetris';
import { TodoList, WasteOfTimeExe } from '@/apps/todoList';
import { useOsStore } from '@/features/os';
import { AppContainer } from '@/features/os/components/AppContainer/AppContainer';
import { APPS } from '@/features/os/constants';
import { DEV_MODE } from '@e/constants';

export const Desktop = () => {
  const runApp = useOsStore((state) => state.runApp);

  useEffect(() => {
    if (!DEV_MODE) return;
    runApp(APPS.todoList);
  }, [runApp]);

  return (
    <div className={styles.desktop}>
      <div className={styles.exe}>
        <WasteOfTimeExe />
        <ReadmeExe />
        <TetrisExe />
      </div>

      <div className={styles.apps}>
        <AppContainer appName={APPS.todoList} launchSpeed={DEV_MODE ? 1 : 30} minWidth={300} maxHeight={700}>
          <TodoList />
        </AppContainer>

        <AppContainer appName={APPS.readme} launchSpeed={10}>
          <Readme />
        </AppContainer>

        <AppContainer appName={APPS.tetris} launchSpeed={5}>
          <Tetris />
        </AppContainer>
      </div>
    </div>
  );
};
