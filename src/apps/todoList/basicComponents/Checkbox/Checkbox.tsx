import styles from './Checkbox.module.scss';
import { FC, memo } from 'react';

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const Checkbox: FC<Props> = memo(({ checked, onChange }) => {
  return (
    <input
      className={styles.checkbox}
      type="checkbox"
      checked={checked}
      onChange={(e) => {
        onChange(e.target.checked);
      }}
    />
  );
});
