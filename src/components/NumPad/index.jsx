import styles from "./styles.module.css";

export function NumPad({ onNumClick }) {
  return (
    <div className={styles.numPad}>
      <button onClick={() => onNumClick(7)}>7</button>
      <button onClick={() => onNumClick(8)}>8</button>
      <button onClick={() => onNumClick(9)}>9</button>
      <button onClick={() => onNumClick(4)}>4</button>
      <button onClick={() => onNumClick(5)}>5</button>
      <button onClick={() => onNumClick(6)}>6</button>
      <button onClick={() => onNumClick(1)}>1</button>
      <button onClick={() => onNumClick(2)}>2</button>
      <button onClick={() => onNumClick(3)}>3</button>
      <button onClick={() => onNumClick(0)}>0</button>
    </div>
  );
}
