import styles from './TodosSummary.module.css';

export function TodosSummary({
  totalTodos,
  amountDone,
}: {
  totalTodos: number;
  amountDone: number;
}) {
  return (
    <div>
      <div className={styles.todosSummary}>
        <div className={styles.TodoStatus}>
          <p className={styles.createdTasks}>Tarefas criadas</p>
          <span className={styles.summaryItemCounter}>{`${totalTodos}`}</span>
        </div>

        <div className={styles.TodoStatus}>
          <p className={styles.tasksDone}>Concluídas</p>
          <span
            className={styles.summaryItemCounter}
          >{`${amountDone} de ${totalTodos}`}</span>
        </div>
      </div>
    </div>
  );
}
