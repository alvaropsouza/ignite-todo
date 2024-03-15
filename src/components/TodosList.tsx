import styles from './TodosList.module.css';

export function TodosList({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}) {
  return <div className={styles.wrapper}>{children}</div>;
}
