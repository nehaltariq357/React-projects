
import './App.css'
import {quiz} from "../data"
import { useState } from 'react'

function App() {
  const [currentQuestion,setCurrentQuestion] = useState(0) //index of the question you are on
  const [score,setScore] = useState(0) //total correct answer
  const [showScore,setShowScore] = useState(false) // if true, final score screen shows
  const [selectedOption,setSelectedOption] = useState("") //users selected choice

  const handleOptionClick = (option)=>{
    setSelectedOption(option)
  }

  //Handle “Next” button:

  const handleNext = ()=>{
    if (selectedOption == quiz[currentQuestion].correctAnswer){
      setScore(score +1)
    }
    setSelectedOption("") //clear

    if (currentQuestion +1 < quiz.length){
      setCurrentQuestion(currentQuestion +1)
    }else{
      setShowScore(true)
    }
  }

  //reset

  const handleReset=()=>{
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedOption("")
  }

  return (
<div>
  <h1 className=''>Quiz App</h1>
  <p>{quiz[currentQuestion].question}</p>
  <ul>
    {quiz[currentQuestion].options.map((option,index)=>{
      return(
        <div key={index}>
          <button>{option}</button>
        </div>
      )
    })}
  </ul>
</div>
  )
}

export default App
