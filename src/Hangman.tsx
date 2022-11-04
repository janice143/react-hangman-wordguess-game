
export default function Hangman(){
    const HEAD =(
        <div style={{
            width:"14vmin",
            aspectRatio:1,
            border:"2vmin solid black",
            boxSizing:"border-box",
            borderRadius:"50%",
            position:"absolute",
            top:"10vmin",
            right:"-6vmin",
        }}></div>
    )

    const BODY = (
        <div style={{
            width:"2vmin",
            height:"20vmin",
            background:"black",
            position:"absolute",
            top:"24vmin",
            right:0
        }}></div>
    )

    const LEFT_HAND = (
        <div style={{
            width:"2vmin",
            height:"14vmin",
            background:"black",
            position:"absolute",
            top:"18vmin",
            right:"0vmin",
            rotate:"60deg",
            transformOrigin:"right bottom"
        }}></div>
    )

    const RIGHT_HAND = (
        <div style={{
            width:"2vmin",
            height:"14vmin",
            background:"black",
            position:"absolute",
            top:"18vmin",
            right:"0vmin",
            rotate:"-60deg",
            transformOrigin:"left bottom"
        }}></div>
    )

    const LEFT_LEG = (
        <div style={{
            width:"2vmin",
            height:"14vmin",
            background:"black",
            position:"absolute",
            top:"43vmin",
            right:"0vmin",
            rotate:"30deg",
            transformOrigin:"left top"
        }}></div>
    )

    const RIGHT_LEG = (
        <div style={{
            width:"2vmin",
            height:"14vmin",
            background:"black",
            position:"absolute",
            top:"43vmin",
            right:"0vmin",
            rotate:"-30deg",
            transformOrigin:"left top"
        }}></div>
    )

    return (
        <div style={{
            position:"relative"
        }}>
            {HEAD}
            {BODY}
            {LEFT_HAND}
            {RIGHT_HAND}
            {LEFT_LEG}
            {RIGHT_LEG}
            <div style={{
                width:"2vmin",
                height:"10vmin",
                background:"black",
                position:"absolute",
                top:0,
                right:0
            }}></div>
            <div style={{
                width:"35vmin",
                height:"2vmin",
                background:"black",
                marginLeft:"19vmin"
            }}></div>
            <div style={{
                width:"2vmin",
                height:"70vmin",
                background:"black",
                marginLeft:"19vmin"
            }}></div>
            <div style={{
                width:"40vmin",
                height:"2vmin",
                background:"black"
            }}></div>
        </div>
    )
}