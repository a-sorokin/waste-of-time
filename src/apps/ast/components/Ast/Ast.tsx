import styles from './Ast.module.scss';
import { AstEditor } from '@ast/components/AstEditor/AstEditor';
import { ListOfExpressions } from '@ast/components/ListOfExpressions/ListOfExpressions';
import { Result } from '@ast/components/Result/Result';

export const Ast = () => {
  return (
    <main className={styles.astContainer}>
      <div className={styles.astContent}>
        <div className={styles.list}>
          <ListOfExpressions />
        </div>

        <div className={styles.editor}>
          <AstEditor />
        </div>
      </div>

      <div className={styles.result}>
        <Result />
      </div>
    </main>
  );
};
