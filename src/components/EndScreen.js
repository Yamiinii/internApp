import React, { useContext } from 'react';
import { QuizContext } from "../Helper/Contexts";
import "../App.css";

export default function EndScreen() {
  const { selectedAnswers } = useContext(QuizContext);

  return (
    <div className='EndScreen'>
      <h1>Thankyou</h1>
    </div>
  );
}
