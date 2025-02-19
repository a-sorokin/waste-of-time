import styles from './Desktop.module.scss';
import { Exe } from '@/features/os/components/Exe/Exe';

export const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <Exe />
    </div>
  );
};
