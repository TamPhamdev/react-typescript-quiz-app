import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import QuestionCard from './components/Question'

function App() {
  const [count, setCount] = useState(0)
  const startTrivia = async () => {

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement> ) => {

  }
  return (
    <div className='App'>
      <h1>React Typescript Quiz</h1>
      <button className='start' onClick={startTrivia}>Start</button>
      <p className='score'>Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard/>
      <button className="next" onClick={checkAnswer}>Next Question</button>
    </div>
  )
}

export default App
