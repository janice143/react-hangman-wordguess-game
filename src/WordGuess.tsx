const wordToGuess = 'somebody'
export default function WordGuess(){
    return (
        <div style={{
            fontSize:"2rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace",
        }}>
            {wordToGuess.split("").map((char,index)=>{
                return (
                    <span style={{
                        borderBottom:"6px solid black",
                        margin:"10px"
                    }} key={index}>
                        <span>{char}</span>
                    </span>
                )
            })}
        </div>
    )
}