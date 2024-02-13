import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>Button 1</button>
      <button className={styles.button}>Button 2</button>
      <button className={styles.button}>Button 3</button>
      <button className={styles.button}>Button 4</button>
      <button className={styles.button}>Button 5</button>
      <button className={styles.button}>Button 6</button>
    </div>
  );
}
