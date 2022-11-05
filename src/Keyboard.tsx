import styles from "./Keyboard.module.css"

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
type KeyboardProps = {
  addGuessedLetter: (letter: string) => void,
  incorrectLetters:string[],
  correctLetters:string[]
}
export default function Keyboard({addGuessedLetter,incorrectLetters,correctLetters}:KeyboardProps) {
  // console.log(addGuessedLetter)
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(2rem,1fr))",
        gap: "6px",
      }}
    >
      {KEYS.map((key) => {
        const isCorrect = correctLetters.includes(key)
        const isinCorrect = incorrectLetters.includes(key)
        return (
          <button 
          className={`${styles.btn} ${isCorrect ? styles.correct : ""} ${isinCorrect ? styles.incorrect : ""}`} 
          disabled={isinCorrect || isCorrect}
          key={key}
          onClick={()=>addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
