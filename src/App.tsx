import { useState, useCallback, useEffect } from "react";
import "./App.css";
import Hangman from "./Hangman";
import WordGuess from "./WordGuess";
import Keyboard from "./Keyboard";
import GetWord from "./GetWord";
import wordList from './wordList.json'

function getWord(){
  // return "somebody"
  return wordList[Math.floor(Math.random() * wordList.length)]
}
function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter=>!wordToGuess.includes(letter))
  const correctLetters = guessedLetters.filter(letter=>wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length > 5
  const isWinner = wordToGuess.split('').every(letter=>guessedLetters.includes(letter))
  
  // console.log(isLoser,isWinner)
  const addGuessedLetter = useCallback(
    (letter:string)=>{
      if(isLoser) return
      setGuessedLetters(curLetters=>[...curLetters,letter])
    },
    [guessedLetters]
  )

  // 鼠标输入事件
  useEffect(()=>{
    const handleKeyPress = (e:KeyboardEvent)=>{
      
      const key = e.key
      e.preventDefault()
      // e.preventDefault()
      // console.log(key)
      // 如果不是输入的字母，不做任何操作
      if(!key.match(/^[a-z]$/)) return
      addGuessedLetter(key)
    }
    document.addEventListener("keypress",handleKeyPress)
    // 清除effect
    return () => {
      document.removeEventListener("keypress", handleKeyPress)
    }
  },[guessedLetters])

  useEffect(()=>{
    const handleKeyPress = (e:KeyboardEvent)=>{
      
      const key = e.key
      // e.preventDefault()
      // console.log(key)
      // 如果不是输入的字母，不做任何操作
      if(key !== "Enter") return
      // 重新开局
      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }
    document.addEventListener("keypress",handleKeyPress)
    // 清除effect
    return () => {
      document.removeEventListener("keypress", handleKeyPress)
    }
  },[])


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
      <h4>
        {!isWinner && !isLoser && "Hangman Wordguess Game"}
        {isWinner && "Winner! - refresh to try again"}
        {isLoser && "Nice try! - refresh to try again"}
      </h4>
      <GetWord />
      <Hangman incorrectLetters={incorrectLetters}/>
      <WordGuess 
        wordToGuess={wordToGuess}
        guessedLetters = {guessedLetters}
        reveal={isLoser}
      />
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
