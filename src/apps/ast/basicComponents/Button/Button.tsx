import styles from './Button.module.scss';
import { FC, MouseEvent, ReactElement, memo } from 'react';
import clsx from 'clsx';

type TProps = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;

  active?: boolean;
  children?: ReactElement | string;
  className?: string;
  hint?: string;
  title?: string;
  wide?: boolean;
};

export const Button: FC<TProps> = memo(({ children, onClick, hint, className, title, wide, active }) => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.active]: active,
        [styles.centred]: !children,
        [styles.wide]: wide,
      })}
      onClick={onClick}
      title={title}
      tabIndex={-1}
    >
      <span className={styles.text}>
        {children ? <span>{children}</span> : null}

        <span className={clsx(styles.hint, { [styles.wideHint]: wide })}>{hint}</span>
      </span>
    </button>
  );
});
