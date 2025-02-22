import styles from './Input.module.scss';
import { ChangeEvent, FC, KeyboardEvent, memo, useCallback } from 'react';
import clsx from 'clsx';

type Props = {
  text: string;
  onChange: (text: string) => void;

  error?: boolean;
  onEnterPress?: () => void;
};

export const Input: FC<Props> = memo(({ text, onChange, error, onEnterPress }) => {
  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim();
      onChange(value);
    },
    [onChange],
  );

  const keyPressHandler = useCallback(
    ({ key }: KeyboardEvent<HTMLInputElement>) => {
      if (key === 'Enter') onEnterPress && onEnterPress();
    },
    [onEnterPress],
  );

  return (
    <input
      type="text"
      className={clsx(styles.input, { [styles.error]: error })}
      autoFocus
      onChange={onChangeHandler}
      onKeyDown={keyPressHandler}
      placeholder="Type some text"
      value={text}
    />
  );
});
