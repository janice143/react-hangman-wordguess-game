type ShowMeaningProps = {
    meaningToGuess:string[]
}
export default function ShowMeaning({meaningToGuess}:ShowMeaningProps){
    const type = meaningToGuess[0], meaning = meaningToGuess.slice(1)
    return (
        <div style={{
            // border:"1px solid red",
            alignSelf: "stretch",
            boxSizing:"border-box",
            background:"rgb(242, 242, 242)",
            padding:"20px",
            borderRadius:"10px",
            fontSize:"16px"
        }}>
            {meaning},
            <i style={{
                color:"red",
                fontWeight:"500"
            }}> {type}</i>
        </div>
    )
}