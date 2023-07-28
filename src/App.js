import React, { useState } from 'react'
import questions from "./data"
import "./App.css"
const App = () => {
const [currentQuestion, setcurrentQuestion]= useState(0);

const [ showScore, setShowScore]= useState(false);

const[ score,setScore]= useState(0);

//is correct answer tags display step 1

const handleAnswerOptionClick=(isCorrect)=>{
  if(isCorrect){
    setScore((currScore)=>currScore+1);
  }
  //step 3
  const nextQuestion=currentQuestion+1;
  //step 4
  if(nextQuestion<questions.length){
    setcurrentQuestion(nextQuestion);
  }
  //step 5
  else{
    setShowScore(true);
  }
  //end code
}

const restart=()=>{
  setcurrentQuestion(0);
  setShowScore(false);
  setScore(0);
}
  return(
    //step 0
<div className="app">
  {showScore ?(
    <div className="score-container">
    <div className="score-section">
      You scored {score} out of { questions.length }
    </div>
    <button onClick={restart} >Restart</button>
    </div>
  ):(
    <>
    <div className="question-section">
      <div className="question-count">
        <span >Question{currentQuestion + 1 }</span> /{questions.length} 
      </div>
       <div className={"question-text"}> {questions[currentQuestion].questionText}</div>
       <div>
        {questions[currentQuestion].answerOptions.map(
          (answerOption,index) =>{
            //step2 to Access
            return <button key={index} onClick={ ()=> handleAnswerOptionClick (answerOption.isCorrect )}> 
            {answerOption.answerText} 
            </button>
          }
        )}
       </div>
    </div>
    
    </>
  )}

</div>


  )

}

export default App

