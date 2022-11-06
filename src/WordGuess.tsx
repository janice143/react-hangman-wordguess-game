
type WordGuessProp = {
    wordToGuess:string,
    guessedLetters:string[],
    reveal:boolean
}
export default function WordGuess({wordToGuess,guessedLetters,reveal=false}:WordGuessProp){
    
    return (
        <div style={{
            fontSize:"2rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace",
        }}>
            {wordToGuess.split('').map((letter,index)=>{
                return (
                    <span style={{
                        borderBottom:"6px solid black",
                        margin:"10px"
                    }} key={index}>
                        <span style={{
                            //  显示猜对的单词，游戏结束后，红色显示缺少的单词
                            visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                            color: guessedLetters.includes(letter) ? "black" : "red"
                        }}>{letter}</span>
                    </span>
                )
            })}
        </div>
    )
}