export function AuswahlMalreihe({ onClickMalreihe }) {
  return (
    <>
      <button onClick={() => onClickMalreihe(1)}>1×1</button>
      <button onClick={() => onClickMalreihe(2)}>1×2</button>
      <button onClick={() => onClickMalreihe(3)}>1×3</button>
      <button onClick={() => onClickMalreihe(4)}>1×4</button>
      <button onClick={() => onClickMalreihe(5)}>1×5</button>
      <button onClick={() => onClickMalreihe(6)}>1×6</button>
      <button onClick={() => onClickMalreihe(7)}>1×7</button>
      <button onClick={() => onClickMalreihe(8)}>1×8</button>
      <button onClick={() => onClickMalreihe(9)}>1×9</button>
    </>
  );
}
