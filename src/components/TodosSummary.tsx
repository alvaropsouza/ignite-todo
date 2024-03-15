import styles from './TodosSummary.module.css';

export function TodosSummary() {
  return (
    <div>
      <div className={styles.todosSummary}>
        <div className={styles.TodoStatus}>
          <p className={styles.createdTasksTitle}>Tarefas criadas</p>
          <p className={styles.summaryItemCounter}>{`${5}`}</p>
        </div>

        <div className={styles.TodoStatus}>
          <p>Concluídas</p>
          <span className={styles.summaryItemCounter}>{`${2} de ${5}`}</span>
        </div>
      </div>
    </div>
  );
}
