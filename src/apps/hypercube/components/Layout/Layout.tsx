import styles from './Layout.module.scss';
import { Canvas } from '@/apps/hypercube/components/Canvas/Canvas';
import { Controls } from '@/apps/hypercube/components/Controls/Controls';
import { Stats } from '@/apps/hypercube/components/Stats/Stats';

export const Layout = () => {
  return (
    <main className={styles.layout}>
      <Canvas />
      <Controls />
      <Stats />
    </main>
  );
};
