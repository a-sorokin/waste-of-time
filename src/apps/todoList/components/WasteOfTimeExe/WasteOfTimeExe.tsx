import styles from './WasteOfTimeExe.module.scss';
import { ExeTemplate } from '@/features/os';
import { APPS } from '@/features/os/constants';

export const WasteOfTimeExe = () => {
  return (
    <ExeTemplate appName={APPS.todoList}>
      <div className={styles.icon}>
        <div>.✓----</div>
        <div>.✓----</div>
        <div>.✓----</div>
      </div>
    </ExeTemplate>
  );
};
