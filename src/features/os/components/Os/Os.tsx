import styles from './Os.module.scss';
import { Desktop } from '@/features/os/components/Desktop/Desktop';
import { Menu } from '@/features/os/components/Menu/Menu';
import { Time } from '@/features/os/components/Time/Time';

export const Os = () => {
  return (
    <div className={styles.os}>
      <div className={styles.header}>
        <Menu />
        <Time />
      </div>

      <Desktop />
    </div>
  );
};
