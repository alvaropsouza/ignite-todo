import igniteTodoLogo from "../assets/ignite-todo-logo.svg";
import styles from "./Header.module.css";

export function Header() {
    return (<header className={styles.header}>
    <img src={igniteTodoLogo} alt="Logotipo do Ignite" />
    </header>)
}