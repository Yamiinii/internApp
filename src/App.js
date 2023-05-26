import "./App.css";
import React, { useState } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { QuizContext } from "./Helper/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">

      <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;




// import React, { useContext, useState } from 'react';
// import { QuizContext } from "../Helper/Contexts";
// import { Questions } from "../Helper/QuestionBank";



// export default function Quiz() {
//   const { setGameState } = useContext(QuizContext);
//   const [currQuestion, setCurrQuestion] = useState(0);
//   const [optionChosen, setOptionChosen] = useState("");
//   const { selectedAnswers, updateSelectedAnswer } = useContext(QuizContext);


//   const nextQuestion = () => {
//     setCurrQuestion(currQuestion + 1);
//   };

//   const prevQuestion = () => {
//     setCurrQuestion(currQuestion - 1);
//   };

//   const finish = () => {
//     setGameState("endScreen");
//   };

//   const handleInputChange = (e) => {
//     const selectedOption = e.target.value;
//     setOptionChosen(selectedOption);
//     updateSelectedAnswer(Questions[currQuestion].id, selectedOption);
//   };
  

//   const renderQuestion = () => {
//     const question = Questions[currQuestion];
//     switch (question.question_type) {
//       case 1: // Radio buttons
//         return (
//           <div className='options'>
//             {question.choices.map((choice) => (
//               <div key={choice.id}>
//               <input
//   type="radio"
//   id={choice.id}
//   name={question.id}
//   value={choice.id}
//   checked={optionChosen === choice.id}
//   onChange={handleInputChange}
//   className="custom-radio"
// />
//                 <label htmlFor={choice.id}>{choice.choice_text}</label>
//               </div>
//             ))}
//           </div>
//         );
//       case 2: // Dropdown
//         return (
//           <div className='options'>
//             <select value={optionChosen} onChange={handleInputChange}>
//               <option value="">Select an option</option>
//               {question.choices.map((choice) => (
//                 <option key={choice.id} value={choice.id}>
//                   {choice.choice_text}
//                 </option>
//               ))}
//             </select>
//           </div>
//         );
//       case 3: // Checkbox
//         return (
//           <div className='options'>
//             {question.choices.map((choice) => (
//               <div key={choice.id}>
//                 <input
//                   type="checkbox"
//                   id={choice.id}
//                   name={choice.choice_text}
//                   value={choice.id}
//                   checked={optionChosen.includes(choice.id)}
//                   onChange={handleInputChange}
//                 />
//                 <label htmlFor={choice.id}>{choice.choice_text}</label>
//               </div>
//             ))}
//           </div>
//         );
//       case 4: // Text input
//         return (
//           <div className='options'>
//             <input
//               type="text"
//               value={optionChosen}
//               onChange={handleInputChange}
//             />
//           </div>
//         );
//       case 5: // File upload
//         return (
//           <div className='options'>
//             <input
//               type="file"
//               accept=".pdf"
//               onChange={handleInputChange}
//             />
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className='Quiz'>
//       <h1>{Questions[currQuestion].prompt}</h1>
//       {renderQuestion()}

//       {currQuestion !== 0 && (
//         <button onClick={prevQuestion}>Previous</button>
//       )}

//       {currQuestion === Questions.length - 1 ? (
//         <button onClick={finish}>Finish Quiz</button>
//       ) : (
//         <button onClick={nextQuestion}>Next Question</button>
//       )}
//     </div>
//   );
// }










// import React,{useContext, useState} from 'react'
// // import MainMenu from './MainMenu';
// import {QuizContext} from "../Helper/Contexts"
// import {Questions} from "../Helper/QuestionBank"
// export default function Quiz() {
//     const{setGameState}=useContext(QuizContext);
//     const [currQuestion,setCurrQuestion]=useState(0);
//     const[optionChosen,setOptionChosen]=useState("")
//     const nextQuestion=()=>{
//         setCurrQuestion(currQuestion+1);
//     };
//     const prevQuestion=()=>{
//         setCurrQuestion(currQuestion-1);
//     };
//     const finish=()=>
//     {
//         setGameState("endScreen");
//     }
//     const handleInputChange = (e) => {
//         setOptionChosen(e.target.value);
//       };
    
//       const renderQuestion = () => {
//         const question = Questions[currQuestion];
//         switch (question.question_type) {
//           case 1: // Radio buttons
//             return (
//               <div className='options'>
//                 {question.choices.map((choice) => (
//                   <div key={choice.id}>
//                     <input
//                       type="radio"
//                       id={choice.id}
//                       name={question.id}
//                       value={choice.id}
//                       checked={optionChosen === choice.id}
//                       onChange={handleInputChange}
//                     />
//                     <label htmlFor={choice.id}>{choice.choice_text}</label>
//                   </div>
//                 ))}
//               </div>
//             );
//           case 2: // Dropdown
//             return (
//               <div className='options'>
//                 <select value={optionChosen} onChange={handleInputChange}>
//                   <option value="">Select an option</option>
//                   {question.choices.map((choice) => (
//                     <option key={choice.id} value={choice.id}>
//                       {choice.choice_text}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             );
//           case 3: // Checkbox
//             return (
//               <div className='options'>
//                 {question.choices.map((choice) => (
//                   <div key={choice.id}>
//                     <input
//                       type="checkbox"
//                       id={choice.id}
//                       name={choice.choice_text}
//                       value={choice.id}
//                       checked={optionChosen.includes(choice.id)}
//                       onChange={handleInputChange}
//                     />
//                     <label htmlFor={choice.id}>{choice.choice_text}</label>
//                   </div>
//                 ))}
//               </div>
//             );
//           case 4: // Text input
//             return (
//               <div className='options'>
//                 <input
//                   type="text"
//                   value={optionChosen}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             );
//           case 5: // File upload
//             return (
//               <div className='options'>
//                 <input
//                   type="file"
//                   accept=".pdf"
//                   onChange={handleInputChange}
//                 />
//               </div>
//             );
//           default:
//             return null;
//         }
//       };

//   return (
// //     <div className='Quiz'>
// //       <h1>{Questions[currQuestion].prompt}</h1>
// //       <div className='options'>
// //         <button>{Questions[currQuestion].optionA}</button>
// //         <button>{Questions[currQuestion].optionB}</button>
// //         <button>{Questions[currQuestion].optionC}</button>
// //         <button>{Questions[currQuestion].optionD}</button>
// //    </div>

//    {currQuestion !== 0 && (
//         <button onClick={prevQuestion}>Previous</button>
//       )}
  
//    {currQuestion === Questions.length - 1 ? ( 
//              <button onClick={finish}> Finish Quiz</button>
//      ) : (
//        <button onClick={nextQuestion}> Next Question </button>
//           )}
//       </div>
//   );
// }