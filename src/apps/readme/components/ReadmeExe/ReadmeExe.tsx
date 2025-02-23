import styles from './ReadmeExe.module.scss';
import { ExeTemplate } from '@/features/os';
import { APPS } from '@/features/os/constants';

export const ReadmeExe = () => {
  return (
    <ExeTemplate appName={APPS.readme}>
      <div className={styles.readmeExe}>Text</div>
    </ExeTemplate>
  );
};
