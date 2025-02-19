import styles from './Desktop.module.scss';
import { TodoList } from '@/apps/todoList';
import { useOsStore } from '@/features/os';
import { AppContainer } from '@/features/os/components/AppContainer/AppContainer';
import { WasteOfTimeExe } from '@/features/os/components/WasteOfTimeExe/WasteOfTimeExe';
import { APPS } from '@/features/os/constants';

export const Desktop = () => {
  const runningApps = useOsStore((state) => state.runningApps);

  return (
    <div className={styles.desktop}>
      <WasteOfTimeExe />

      <div className={styles.apps}>
        {runningApps.has(APPS.todoList) ? (
          <AppContainer appName={APPS.todoList}>
            <TodoList />
          </AppContainer>
        ) : null}
      </div>
    </div>
  );
};
