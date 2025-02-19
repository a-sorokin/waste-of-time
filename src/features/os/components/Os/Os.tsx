import styles from './Os.module.scss';
import { FC, memo } from 'react';
import { Menu } from '@/features/os/components/Menu/Menu';
import { Time } from '@/features/os/components/Time/Time';

type Props = {
  isBootComplete: boolean;
};

export const Os: FC<Props> = memo(({ isBootComplete }) => {
  if (!isBootComplete) return null;
  return <OsContent />;
});

const OsContent = () => {
  return (
    <div className={styles.os}>
      <div className={styles.header}>
        <Menu />

        <div className={styles.time}>
          <Time />
        </div>
      </div>
    </div>
  );
};
