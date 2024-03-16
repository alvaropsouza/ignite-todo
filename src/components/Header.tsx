import igniteTodoLogo from '../assets/ignite-todo-logo.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src={igniteTodoLogo} alt="Logotipo do Ignite" />
      </a>
    </header>
  );
}
