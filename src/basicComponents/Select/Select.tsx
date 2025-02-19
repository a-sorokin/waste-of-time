import styles from './Select.module.scss';
import { FC, memo } from 'react';
import clsx from 'clsx';

type TProps = {
  label: string;
  elements: (string | number)[];

  className?: string;
  disabled?: boolean;
  labelClassName?: string;
  selectClassName?: string;
  onChange?: (value: string) => void;
};

export const Select: FC<TProps> = memo(
  ({ label, elements, className, labelClassName, disabled, selectClassName, onChange }) => {
    return (
      <div className={clsx(styles.select, className)}>
        <label htmlFor={styles.select} className={labelClassName}>
          {label}
        </label>

        <select
          className={clsx(styles.selectElement, selectClassName)}
          id={styles.select}
          onChange={(e) => onChange && onChange(e.target.value)}
          disabled={disabled}
        >
          {elements.map((size, index) => (
            <option key={`${label}${size}${index}`} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    );
  },
);
