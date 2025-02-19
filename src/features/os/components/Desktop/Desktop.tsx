import styles from './Desktop.module.scss';
import { TodoList } from '@/apps/todoList/TodoList/TodoList';
import { useOsStore } from '@/features/os';
import { AppContainer } from '@/features/os/components/AppContainer/AppContainer';
import { WasteOfTimeExe } from '@/features/os/components/WasteOfTimeExe/WasteOfTimeExe';
import { APPS } from '@/features/os/constants';

export const Desktop = () => {
  const runningApps = useOsStore((state) => state.runningApps);

  return (
    <div className={styles.desktop}>
      <WasteOfTimeExe />

      {runningApps.has(APPS.todoList) ? (
        <AppContainer>
          <TodoList />
        </AppContainer>
      ) : null}
    </div>
  );
};
