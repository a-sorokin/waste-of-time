import styles from './Button.module.scss';
import { FC, MouseEvent, ReactElement, memo } from 'react';

type Props = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactElement | string;
};

export const Button: FC<Props> = memo(({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.text}>{children}</span>
    </button>
  );
});
