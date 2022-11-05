type HangmanProps = {
    incorrectLetters:string[]
}
export default function Hangman({incorrectLetters}:HangmanProps){
    const HEAD =(
        <div style={{
            width:"2rem",
            aspectRatio:1,
            border:"6px solid black",
            boxSizing:"border-box",
            borderRadius:"50%",
            position:"absolute",
            top:"1rem",
            right:"calc(-1rem + 3px)",
        }}
        key="head"></div>
    )

    const BODY = (
        <div style={{
            width:"6px",
            height:"4rem",
            background:"black",
            position:"absolute",
            top:"3rem",
            right:0
        }}
        key="body"></div>
    )

    const LEFT_HAND = (
        <div style={{
            width:"6px",
            height:"2rem",
            background:"black",
            position:"absolute",
            top:"2rem",
            right:"0rem",
            rotate:"60deg",
            transformOrigin:"right bottom"
        }}
        key="left_hand"></div>
    )

    const RIGHT_HAND = (
        <div style={{
            width:"6px",
            height:"2rem",
            background:"black",
            position:"absolute",
            top:"2rem",
            right:"0vmin",
            rotate:"-60deg",
            transformOrigin:"left bottom"
        }}
        key="right_hand"></div>
    )

    const LEFT_LEG = (
        <div style={{
            width:"6px",
            height:"2rem",
            background:"black",
            position:"absolute",
            top:"7rem",
            right:"0rem",
            rotate:"30deg",
            transformOrigin:"right top"
        }}
        key="left_leg"></div>
    )

    const RIGHT_LEG = (
        <div style={{
            width:"6px",
            height:"2rem",
            background:"black",
            position:"absolute",
            top:"7rem",
            right:"0rem",
            rotate:"-30deg",
            transformOrigin:"left top"
        }}
        key="right_leg"></div>
    )
    
    const hangman = [HEAD,BODY,LEFT_HAND,RIGHT_HAND,LEFT_LEG,RIGHT_LEG]
    return (
        <div style={{
            position:"relative"
        }}>
            {/* {HEAD}
            {BODY}
            {LEFT_HAND}
            {RIGHT_HAND}
            {LEFT_LEG}
            {RIGHT_LEG} */}
            {hangman.slice(0,incorrectLetters.length)}
            <div style={{
                width:"6px",
                height:"1rem",
                background:"black",
                position:"absolute",
                top:0,
                right:0
            }}></div>
            <div style={{
                width:"6rem",
                height:"6px",
                background:"black",
                marginLeft:"calc(2rem - 3px)"
            }}></div>
            <div style={{
                width:"6px",
                height:"12rem",
                background:"black",
                marginLeft:"calc(2rem - 3px)"
            }}></div>
            <div style={{
                width:"4rem",
                height:"6px",
                background:"black"
            }}></div>
        </div>
    )
}