import styles from './ItemButton.module.scss';
import { FC, MouseEvent, memo, useCallback } from 'react';
import clsx from 'clsx';
import { Button } from '@/basicComponents/Button/Button';

type TProps = {
  title: string;
  hint: string;
  onClick: () => void;

  className?: string;
};

export const ItemButton: FC<TProps> = memo(({ title, onClick, hint, className }) => {
  const clickHandler = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onClick();
    },
    [onClick],
  );

  return <Button className={clsx(styles.itemBtn, className)} onClick={clickHandler} hint={hint} title={title} />;
});
