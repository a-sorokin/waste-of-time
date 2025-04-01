import styles from './AstEditor.module.scss';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useAstStore } from '@ast/astStore';

export const AstEditor = () => {
  const expression = useAstStore((state) => state.expression);
  const editMode = useAstStore((state) => state.editMode);

  const [value, setValue] = useState('');

  const parsedExpression = useMemo(() => {
    if (!expression) return 'No expression found';
    return JSON.stringify(JSON.parse(expression), null, 2);
  }, [expression]);

  const onChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  }, []);

  return (
    <div className={styles.astEditorContainer}>
      {editMode ? (
        <textarea autoFocus className={styles.editor} value={value} onChange={onChange} />
      ) : (
        <pre className={styles.editor}>{parsedExpression}</pre>
      )}
    </div>
  );
};
