import styles from './Editor.module.scss';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useAstStore } from '@ast/astStore';

export const Editor = () => {
  const expression = useAstStore((state) => state.expression);
  const editMode = useAstStore((state) => state.editMode);
  const setExpression = useAstStore((state) => state.setExpression);

  const [localExpression, setLocalExpression] = useState('');
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const parsedExpression = useMemo(() => {
    if (!expression || editMode) return 'No expression found';
    return JSON.stringify(JSON.parse(expression), null, 2);
  }, [editMode, expression]);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setLocalExpression(event.target.value);

      if (timeoutId) clearTimeout(timeoutId);
      const timeout = setTimeout(() => setExpression(event.target.value), 100);
      setTimeoutId(timeout);
    },
    [setExpression, timeoutId],
  );

  useEffect(() => {
    if (!editMode) setLocalExpression('');
  }, [editMode]);

  return (
    <div className={styles.astEditorContainer}>
      {editMode ? (
        <textarea autoFocus className={styles.editor} value={localExpression} onChange={onChange} />
      ) : (
        <pre className={styles.editor}>{parsedExpression}</pre>
      )}
    </div>
  );
};
