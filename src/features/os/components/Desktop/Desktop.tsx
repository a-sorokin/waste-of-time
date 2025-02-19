import styles from './Desktop.module.scss';
import { WasteOfTimeExe } from '@/features/os/components/WasteOfTimeExe/WasteOfTimeExe';

export const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <WasteOfTimeExe />
    </div>
  );
};
