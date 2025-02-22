import styles from './HyperCubeExe.module.scss';
import { ExeTemplate } from '@/features/os';
import { APPS } from '@/features/os/constants';

export const HyperCubeExe = () => {
  return (
    <ExeTemplate appName={APPS.hypercube}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.perspective}>
            <div className={styles.outerCube}>
              <div className={styles.outerFace}></div>
              <div className={styles.outerFaceBack}></div>
              <div className={styles.outerFaceFront}></div>
            </div>

            <div className={styles.innerCube}>
              <div className={styles.innerCubeContent}>
                <div className={styles.innerFace}></div>
                <div className={styles.innerFaceBack}></div>
                <div className={styles.innerFaceFront}></div>
              </div>
            </div>

            <div className={styles.connector}>
              <div className={styles.connectorLine}></div>
            </div>

            <div className={styles.glow}></div>
          </div>
        </div>
      </div>
    </ExeTemplate>
  );
};
