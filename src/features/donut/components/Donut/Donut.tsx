import styles from './Donut.module.scss';
import { useEffect, useRef, useState } from 'react';
import { getDonutProps } from '@/features/donut/components/Donut/utils';

const X_SPEED = 0.01;
const Y_SPEED = 0.007;

export const Donut = () => {
  const frameRef = useRef(0);
  const [output, setOutput] = useState('');

  useEffect(() => {
    let A = 1;
    let B = 1;

    const renderFrame = () => {
      const b = getDonutProps(A, B);
      let asciiFrame = '';

      for (let k = 0; k < 1760; k++) {
        asciiFrame += k % 80 ? b[k] : '\n';
      }

      setOutput(asciiFrame);
      A += X_SPEED;
      B += Y_SPEED;
      frameRef.current = requestAnimationFrame(renderFrame);
    };

    renderFrame();

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className={styles.donutContainer}>
      <div className={styles.donut}>
        <pre>{output}</pre>
      </div>
    </div>
  );
};
