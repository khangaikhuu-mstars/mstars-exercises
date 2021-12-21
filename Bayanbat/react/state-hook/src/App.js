import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [score, setScore] = useState(0); //[0, f]
  const [message, setMessage] = useState("suckitmofa");

  const handleReset = () => {
    setScore(prevScore => prevScore = 0);
    setMessage(message => "reseted")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>{message}</h2>
        <h1>{score}</h1>
        <button onClick={() => setScore(prevScore => prevScore + 1)}>
          increase score
        </button>
        <button onClick={() => setScore(score - 1)}>
          decrease score
        </button>
        <button onClick={handleReset} >
          reset
        </button>
      </header>
    </div>
  );
}
export default App;