import { useState } from 'react'
import './App.css'
import Hangman from './Hangman'
import WordGuess from './WordGuess'
import Keyboard from './Keyboard'
function App() {

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      width:"90vmin",
      margin:"0 auto",
      textAlign:"center",
      gap:"4vmin"
    }}>
      <h1>Hangman Wordguess Game</h1>
      <Hangman />
      <WordGuess />
      <Keyboard />
    </div>
  )
}

export default App
