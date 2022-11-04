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
export default function Keyboard() {
  return (
    <div
      style={{
        border:"1px solid red",
        // display: "grid",
        // gridTemplateColumns: "repeat(auto-fit, minmax(4vmin,1fr))",
        // gap: "0.5vmin",
      }}
    >
      {KEYS.map((key) => {
        return (
          <button className={styles.btn} key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
}
