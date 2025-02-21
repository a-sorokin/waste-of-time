import styles from './Item.module.scss';
import { FC, useCallback, useState } from 'react';
import clsx from 'clsx';
import { Checkbox } from '@/apps/todoList/basicComponents/Checkbox/Checkbox';

type Props = {
  text: string;
};

export const Item: FC<Props> = ({ text }) => {
  const [checked, setChecked] = useState(false);

  const onChange = useCallback((checked: boolean) => {
    setChecked(checked);
  }, []);

  return (
    <div className={styles.item}>
      <Checkbox checked={checked} onChange={onChange} />
      <span className={clsx({ [styles.checked]: checked })}>{text}</span>
    </div>
  );
};
