import styles from './CreateTodo.module.css';
import { PlusCircle } from 'phosphor-react';

export function CreateTodo() {
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Adicione uma nova tarefa"
        type="text"
        className={styles.createTodoInput}
      />
      <button className={styles.createTodoButton}>
        <p>Criar</p>
        <PlusCircle size={20} />
      </button>
    </div>
  );
}