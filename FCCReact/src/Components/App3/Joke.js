import React from 'react'
import '../../Styles/admin.css'
export default function Joke(props) {
    const JokeContentStyle = {
        borderBottom: "3px dotted silver"
    }
    let time = new Date()
    time = time.getSeconds()
    // a bad way to change what's displayed
    // if(props.question==null)
    //         {
    //             return (
    //                 <div className = "jokes">
    //                     <h3>{props.joke}</h3>
    //                     <hr></hr>
    //                 </div>
    //             )
    //         }
    // else {
    // return (
    //     <div className = "jokes">
    //         <h2 style={JokeContentStyle}>{props.question}</h2>
    //         <h3>{props.joke}</h3>
    //         <hr></hr>
    //     </div>
    // )
    // }

    return (
        <div className = "jokes">

            {/* use ternary operator to change display based on prop parameters status */}
            {<h2 style={props.question ? JokeContentStyle: {display: "none"}}>{props.question}</h2>}

            {/* Here is another way to change the display but it doesn't play well with style objects/classes */}
            {/* {<h2 style={{ display: !props.question && "none"}} >{props.question}</h2>} */}

            {/* another ternary example but basic no classes */}
            {/* <h2 style={{display: props.question ? "flex": "none"}}>{props.question}</h2> */}
            {/* ultra ternary example with ternary inside a ternary */}
            <h3 style = {{color: !props.question ? "purple" : time % 2 === 1  ? "red":"blue"}}>{props.joke}</h3>
            <hr></hr>
        </div>
    )    
}
