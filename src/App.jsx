import { useState } from 'react'
import './App.css'
import { Spiel } from './components/Spiel';
import { AuswahlSpielart } from './components/AuswahlSpielart';
import { AuswahlMalreihe } from './components/AuswahlMalreihe';

export const MODUS_AUSWAHL_MALREIHE = 1;
const MODUS_AUSWAHL_SPIELART = 2;
const MODUS_SPIELEN = 3;

export const SPIELTYP_NORMAL = 1;
export const SPIELTYP_DURCHEINANDER = 2;

function App() {
  const [modus, setModus] = useState(1);
  const [malreihe, setMalreihe] = useState(1);
  const [aktivesSpiel, setAktivesSpiel] = useState(null);

  function handleClickMalreihe(malreihe) {
    setModus(MODUS_AUSWAHL_SPIELART);
    setMalreihe(malreihe);
  }

  function handleClickSpielStarten(spieltyp) {
    setModus(MODUS_SPIELEN);
    setAktivesSpiel(neuesSpiel(malreihe, spieltyp));
  }

  if (modus === MODUS_SPIELEN) {
    return (
      <Spiel
        spiel={aktivesSpiel}
        setAktivesSpiel={setAktivesSpiel}
        setModus={setModus}
      />
    )
  }

  if (modus === MODUS_AUSWAHL_SPIELART) {
    return (
      <AuswahlSpielart
        setModus={setModus}
        malreihe={malreihe}
        handleClickSpielStarten={handleClickSpielStarten}
      />
    )
  }

  return (
    <>
      <h1>Malreihen lernen</h1>
      <AuswahlMalreihe onClickMalreihe={handleClickMalreihe} />
    </>
  )
}

function neuesSpiel(malreihe, spieltyp) {

  const aufgaben = [];
  for (let i = 1; i < 10; i++) {
    const aufgabe = {
      faktor1: i,
      faktor2: malreihe,
    };
    aufgaben.push(aufgabe);
  }

  if (spieltyp === SPIELTYP_DURCHEINANDER) {
    shuffleArray(aufgaben);
  }

  return {
    spieltyp,
    aufgaben,
    richtig: [],
    falsch: [],
  };
}

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export default App
