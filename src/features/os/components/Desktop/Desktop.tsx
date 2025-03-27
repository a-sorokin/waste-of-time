import styles from './Desktop.module.scss';
import { Ast, AstExe } from '@/apps/ast';
import { HyperCubeExe, Hypercube } from '@/apps/hypercube';
import { Readme, ReadmeExe } from '@/apps/readme';
import { Tetris, TetrisExe } from '@/apps/tetris';
import { TodoList, WasteOfTimeExe } from '@/apps/todoList';
import { AppContainer } from '@/features/os/components/AppContainer/AppContainer';
import { APPS } from '@/features/os/constants';
import { DEV_MODE } from '@e/constants';

const Executables = () => {
  return (
    <div className={styles.exe}>
      <ReadmeExe />
      <WasteOfTimeExe />
      <TetrisExe />
      <HyperCubeExe />
      <AstExe />
    </div>
  );
};

export const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <Executables />

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

        <AppContainer appName={APPS.hypercube} launchSpeed={20}>
          <Hypercube />
        </AppContainer>

        <AppContainer appName={APPS.AST} launchSpeed={20} minWidth={300} maxHeight={700}>
          <Ast />
        </AppContainer>
      </div>
    </div>
  );
};
