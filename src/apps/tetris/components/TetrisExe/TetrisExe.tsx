import styles from './TetrisExe.module.scss';
import { ExeTemplate } from '@/features/os';
import { APPS } from '@/features/os/constants';

export const TetrisExe = () => {
  return (
    <ExeTemplate appName={APPS.tetris}>
      <div className={styles.icon}>T</div>
    </ExeTemplate>
  );
};
