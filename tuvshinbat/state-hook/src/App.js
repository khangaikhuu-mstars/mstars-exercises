import React, {useState} from 'react';
import './App.css';


function App() {

  function handleReset(){
    setScore(0);
    setMessage('reset')
  
  }
  
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Welcome');
  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <h2>{score}</h2>
        <button onClick={() => setScore(prevScore => prevScore +1)}>increase score</button>
        <button onClick={() => setScore(prevScore => prevScore -1)}>decrease score</button>
        <button onClick={() => handleReset()}>reset</button>
      </header>
    </div>
  );
}

export default App;
