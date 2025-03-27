import styles from './Ast.module.scss';
import { AstEditor } from '@ast/components/AstEditor/AstEditor';
import { ListOfExpressions } from '@ast/components/ListOfExpressions/ListOfExpressions';

export const Ast = () => {
  return (
    <main className={styles.astContainer}>
      <div className={styles.astContent}>
        <ListOfExpressions />
        <AstEditor />
      </div>
    </main>
  );
};
