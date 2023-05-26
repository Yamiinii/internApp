import React,{useContext} from 'react'
import {QuizContext} from "../Helper/Contexts"
import "../App.css"
export default function MainMenu() {
    const {gameState,setGameState}=useContext(QuizContext)
  return (
    <div className='Menu'>
        <h1>Intern Application</h1>
        <button onClick={()=>{
   setGameState("quiz");
        }}>
      Continue</button>
    </div>
  )
}
