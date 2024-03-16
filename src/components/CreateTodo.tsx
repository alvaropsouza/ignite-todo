import styles from './CreateTodo.module.css';
import { PlusCircle } from 'phosphor-react';

export function CreateTodo() {
  return (
    <div className={`${styles.wrapper}`}>
      <input
        placeholder="Adicione uma nova tarefa"
        type="text"
        name="todoContent"
        className={`${styles.createTodoInput}`}
      />
      <button className={styles.createTodoButton}>
        <p className={styles.createTodoButtonWord}>Criar</p>
        <PlusCircle size={20} />
      </button>
    </div>
  );
}
