import React, {useState} from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Welcome!');
  const handleReset = function(){
    setScore(0)
    setMessage('Handle Reset')
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <h2>{ score }</h2>
        <button onClick={()=>setScore(prevScore => prevScore + 1)}>Increase Score
        </button>
        <button onClick={()=>setScore(score-1)}>dicrease Score</button>
        <button onClick={()=>setScore(0), ()=>setMessage('Reset')}>Reset</button>
        <button onClick={()=>handleReset()}>Handle reset</button>

      </header>
    </div>
  );
}

export default App;
