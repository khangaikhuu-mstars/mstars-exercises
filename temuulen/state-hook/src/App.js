import React , { useState } from 'react';
import './App.css';

function App() {
  const [ score, setScore ] = useState(0);
  const [ message, setMessage] = useState('Welcome');

  const handleReset = () => {
    setScore(prevScore => prevScore = 0)
    setMessage('Heyy')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ message }</h1>
        <h2>{ score }</h2>
        <button onClick={() => setScore(prevScore =>prevScore + 1)}>Decrease score</button>
        <button onClick={() => setScore(prevScore => prevScore - 1)}>Increase score</button>
        <button onClick={() => handleReset() }>Reset</button>
      </header>
    </div>
  );
}

export default App;
