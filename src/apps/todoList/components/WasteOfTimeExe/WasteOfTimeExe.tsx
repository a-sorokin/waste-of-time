import styles from './WasteOfTimeExe.module.scss';
import { ExeTemplate } from '@/features/os';
import { APPS } from '@/features/os/constants';

export const WasteOfTimeExe = () => {
  return (
    <ExeTemplate appName={APPS.todoList}>
      <div className={styles.icon}>
        <div className={styles.row}>
          <span>✓</span>
          <div className={styles.line} />
        </div>

        <div className={styles.row}>
          <span>✓</span>
          <div className={styles.line} />
        </div>

        <div className={styles.row}>
          <span>✓</span>
          <div className={styles.line} />
        </div>
      </div>
    </ExeTemplate>
  );
};
