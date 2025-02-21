import styles from './Desktop.module.scss';
import { Readme, ReadmeExe } from '@/apps/readme';
import { Tetris, TetrisExe } from '@/apps/tetris';
import { TodoList } from '@/apps/todoList';
import { WasteOfTimeExe } from '@/apps/todoList/components/WasteOfTimeExe/WasteOfTimeExe';
import { useOsStore } from '@/features/os';
import { AppContainer } from '@/features/os/components/AppContainer/AppContainer';
import { APPS } from '@/features/os/constants';

export const Desktop = () => {
  const runningApps = useOsStore((state) => state.runningApps);

  return (
    <div className={styles.desktop}>
      <div className={styles.exe}>
        <WasteOfTimeExe />
        <ReadmeExe />
        <TetrisExe />
      </div>

      <div className={styles.apps}>
        {runningApps.has(APPS.todoList) ? (
          <AppContainer appName={APPS.todoList} launchSpeed={30} zIndex={1}>
            <TodoList />
          </AppContainer>
        ) : null}

        {runningApps.has(APPS.readme) ? (
          <AppContainer appName={APPS.readme} launchSpeed={10} zIndex={2}>
            <Readme />
          </AppContainer>
        ) : null}

        {runningApps.has(APPS.tetris) ? (
          <AppContainer appName={APPS.tetris} launchSpeed={5} zIndex={3}>
            <Tetris />
          </AppContainer>
        ) : null}
      </div>
    </div>
  );
};
