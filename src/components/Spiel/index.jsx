import { useState } from 'react';
import { NumPad } from '../NumPad';
import styles from './styles.module.css';

export function Spiel({ spiel, setAktivesSpiel, setModus }) {
  const { aufgaben, richtig, falsch } = spiel;
  const [antwort, setAntwort] = useState("");
  const [aufgabeNummer, setAufgabeNummer] = useState(0);
  const [letzteRunde, setLetzteRunde] = useState(null);

  if (aufgaben.length === 0) {
    return (
      <div className={styles.spiel}>
        <h1>Ergebnis</h1>
        <p>Richtig: {richtig.length}</p>
        <p>Falsch: {falsch.length}</p>
        <button onClick={() => setModus(1)}>Neues Spiel</button>
      </div>
    );
  }

  const aktuelleAufgabe = aufgaben[0];
  const darstellungsString = createDarstellungsString(aktuelleAufgabe, antwort);

  function handleNumClick(num) {
    const updatedAntwort = antwort + num.toString();
    const richtigeAntwort = Number(aktuelleAufgabe.faktor1 * aktuelleAufgabe.faktor2);
    const richtigeAntwortString = richtigeAntwort.toString();

    if (updatedAntwort.length !== richtigeAntwortString.length
      && richtigeAntwortString.startsWith(updatedAntwort)) {
      // Antwort ist noch nicht vollständig
      setAntwort(updatedAntwort);
      return;
    }

    let warRichtig, updatedAktiveSpiel;
    if (updatedAntwort === richtigeAntwortString) {
      warRichtig = true;
      updatedAktiveSpiel = {
        ...spiel,
        aufgaben: aufgaben.slice(1),
        richtig: [...richtig, aktuelleAufgabe],
      };
    } else {
      warRichtig = false;
      updatedAktiveSpiel = {
        ...spiel,
        aufgaben: [...aufgaben.slice(1), aktuelleAufgabe],
        falsch: [...falsch, aktuelleAufgabe],
      };
    }

    setAntwort("");
    setAufgabeNummer(v => v + 1);
    setAktivesSpiel(updatedAktiveSpiel);
    setLetzteRunde({
      aufgabe: aktuelleAufgabe,
      darstellungsString: createDarstellungsString(aktuelleAufgabe, updatedAntwort),
      aufgabeNummer,
      warRichtig,
    });

  }

  return (
    <div className={styles.spiel}>
      {letzteRunde?.warRichtig === true && <div style={{ fontSize: "5rem" }}>
        {letzteRunde.aufgabe.faktor1 === 7 && letzteRunde.aufgabe.faktor2 === 7 ? "⌛" : randomPositiveEmoji()}
      </div>}
      {letzteRunde?.warRichtig === false && <div style={{ fontSize: "5rem" }}>🤮</div>}
      <div className={styles.antwortContainer}>
        {(letzteRunde?.warRichtig === true) &&
          <h2
            key={letzteRunde.aufgabeNummer}
            className={styles.letzteAntwort}>
            {letzteRunde.darstellungsString}
          </h2>
        }
        {(letzteRunde?.warRichtig === false) &&
          <h2
            key={letzteRunde.aufgabeNummer}
            className={`${styles.letzteAntwort} ${styles.letzteAntwort_falsch}`}>
            {letzteRunde.darstellungsString}
          </h2>
        }
        <h2 className={styles.antwort}>{darstellungsString}</h2>
      </div>
      <NumPad onNumClick={handleNumClick} />
    </div>
  );
}

function createDarstellungsString(aufgabe, antwort) {
  return `${aufgabe.faktor1} × ${aufgabe.faktor2}${antwort ? ` = ${antwort}` : ''}`;
}

function randomPositiveEmoji() {
  const emojis = ["🌟", "🎉", "👍", "🥳", "🎈", "🎊", "🥇"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}