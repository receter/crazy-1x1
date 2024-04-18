import { MODUS_AUSWAHL_MALREIHE, SPIELTYP_DURCHEINANDER, SPIELTYP_NORMAL } from '../App';

export function AuswahlSpielart({ setModus, malreihe, handleClickSpielStarten }) {
  return <>
    <button onClick={() => setModus(MODUS_AUSWAHL_MALREIHE)}>zurück </button>
    <h1>Malreihe {malreihe}</h1>
    <button onClick={() => handleClickSpielStarten(SPIELTYP_DURCHEINANDER)}>Durcheinander </button>
    <button
      onClick={() => handleClickSpielStarten(SPIELTYP_NORMAL)}
    >Normal aufgesagt</button>
  </>;
}
