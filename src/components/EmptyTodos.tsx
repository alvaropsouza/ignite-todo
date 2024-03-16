import styles from './EmptyTodos.module.css';
import noteBookIcon from '../assets/Clipboard.svg';
export function EmptyTodos() {
  return (
    <div className={styles.wrapper}>
      <img src={noteBookIcon} alt="Clipboard icon" />
      <div className={styles.messageContainer}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
