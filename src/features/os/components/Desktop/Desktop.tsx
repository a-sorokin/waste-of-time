import styles from './Desktop.module.scss';
import { TodoList } from '@/apps/todoList';
import { useOsStore } from '@/features/os';
import { AppContainer } from '@/features/os/components/AppContainer/AppContainer';
import { WasteOfTimeExe } from '@/features/os/components/WasteOfTimeExe/WasteOfTimeExe';
import { APPS } from '@/features/os/constants';
import { Readme, ReadmeExe } from '@/features/readme';

export const Desktop = () => {
  const runningApps = useOsStore((state) => state.runningApps);

  return (
    <div className={styles.desktop}>
      <div className={styles.exe}>
        <WasteOfTimeExe />
        <ReadmeExe />
      </div>

      <div className={styles.apps}>
        {runningApps.has(APPS.todoList) ? (
          <AppContainer appName={APPS.todoList} launchSpeed={30}>
            <TodoList />
          </AppContainer>
        ) : null}

        {runningApps.has(APPS.readme) ? (
          <AppContainer appName={APPS.readme} launchSpeed={20}>
            <Readme />
          </AppContainer>
        ) : null}
      </div>
    </div>
  );
};
