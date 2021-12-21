import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Welcome!');

  function handlereset() {
    setScore(0)
    setMessage("gogo")

   
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1> {message} </h1>
        <h2> {score} </h2>
        <button onClick={() => setScore(score - 1)}> decrease score</button>
        <button onClick={() => setScore(prevScore => prevScore + 1)}> increase</button>
        <button onClick={() => handlereset()}> reset </button>
      </header>
    </div>
  );
}








export default App;
