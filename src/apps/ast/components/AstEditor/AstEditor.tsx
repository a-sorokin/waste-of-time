import styles from './AstEditor.module.scss';
import { useAstStore } from '@ast/astStore';

export const AstEditor = () => {
  const expression = useAstStore((state) => state.expression);

  return (
    <div className={styles.astEditorContainer}>
      <pre className={styles.editor}>{expression}</pre>
    </div>
  );
};
