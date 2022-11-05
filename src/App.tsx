import { useState, useCallback } from "react";
import "./App.css";
import Hangman from "./Hangman";
import WordGuess from "./WordGuess";
import Keyboard from "./Keyboard";
import wordList from './wordList.json'

function getWord(){
  return "somebody"
  // return wordList[Math.floor(Math.random() * wordList.length)]
}
function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter=>!wordToGuess.includes(letter))
  const correctLetters = guessedLetters.filter(letter=>wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length > 5
  const addGuessedLetter = useCallback(
    (letter:string)=>{
      if(isLoser) return
      setGuessedLetters(curLetters=>[...curLetters,letter])
    },
    [guessedLetters]
  )


  // console.log(addGuessedLetter)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize:"24px",
        maxWidth: "800px",
        // width:"90vw",
        minHeight: "90vh",
        margin: "0 auto",
        textAlign: "center",
        gap: "4vmin",
        // border: "1px solid red",
      }}
    >
      <h4>Hangman Wordguess Game</h4>
      <Hangman incorrectLetters={incorrectLetters}/>
      <WordGuess />
      <div style={{ 
        alignSelf: "stretch",
        padding:"20px"
        }}>
        <Keyboard 
        addGuessedLetter = {addGuessedLetter}
        incorrectLetters = {incorrectLetters}
        correctLetters = {correctLetters}
        />
      </div>
    </div>
  );
}

export default App;
