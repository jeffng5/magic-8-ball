import React, { useState } from "react";
import answers from "./answers.js"


function EightBall(msg, color) {
    const [comment, setComment] = useState({msg: "Think of a Question.", color: "black"})
    
    let rand = Math.floor(Math.random() * 20)
   
    return (
    <>
    <h4>Think of a Question: </h4>
   
    <button onClick= {() => setComment(rand)} style={{backgroundColor: `${answers[rand].color}`}}>{answers[rand].msg}</button>

    </>)
}



export {EightBall}