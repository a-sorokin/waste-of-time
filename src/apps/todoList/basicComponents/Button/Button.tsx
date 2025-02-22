import styles from './Button.module.scss';
import { FC, MouseEvent, ReactElement, memo } from 'react';
import clsx from 'clsx';

type Props = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactElement | string;

  disabled?: boolean;
};

export const Button: FC<Props> = memo(({ children, onClick, disabled }) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.text}>{children}</span>
    </button>
  );
});
