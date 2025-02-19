import styles from './Booting.module.scss';
import { FC, memo, useEffect, useState } from 'react';
import { BOOT_MESSAGES } from '@/features/booting/components/Booting/constants';

type Props = {
  onComplete: () => void;
};

export const LinuxBoot: FC<Props> = memo(({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let currentLine = 0;
    let timeoutId: NodeJS.Timeout;

    const addLine = () => {
      if (currentLine < BOOT_MESSAGES.length) {
        setLines((prevLines) => [...prevLines, BOOT_MESSAGES[currentLine]]);
        currentLine++;

        const delay = Math.random() * 500 + 100;
        timeoutId = setTimeout(addLine, delay);
        return;
      }
      setTimeout(() => {
        onComplete();
      }, 3000);
    };

    timeoutId = setTimeout(addLine, 1000);

    return () => clearTimeout(timeoutId);
  }, [onComplete]);

  return (
    <div className={styles.container}>
      <div className={styles.terminal}>
        {lines.map((line, index) => (
          <div key={`booting-${index}`} className={styles.textLine}>
            {line}
          </div>
        ))}
      </div>
      <span className={styles.cursor} />
    </div>
  );
});
