import styles from './Desktop.module.scss';
import { Readme, ReadmeExe } from '@/apps/readme';
import { Tetris, TetrisExe } from '@/apps/tetris';
import { TodoList, WasteOfTimeExe } from '@/apps/todoList';
import { AppContainer } from '@/features/os/components/AppContainer/AppContainer';
import { APPS } from '@/features/os/constants';

export const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <div className={styles.exe}>
        <WasteOfTimeExe />
        <ReadmeExe />
        <TetrisExe />
      </div>

      <div className={styles.apps}>
        {/*todo set launchSpeed = 30*/}
        <AppContainer appName={APPS.todoList} launchSpeed={1} zIndex={1} minWidth={300} maxHeight={700}>
          <TodoList />
        </AppContainer>

        <AppContainer appName={APPS.readme} launchSpeed={10} zIndex={2}>
          <Readme />
        </AppContainer>

        <AppContainer appName={APPS.tetris} launchSpeed={5} zIndex={3}>
          <Tetris />
        </AppContainer>
      </div>
    </div>
  );
};
