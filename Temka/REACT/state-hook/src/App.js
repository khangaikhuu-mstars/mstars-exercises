import React, {useState} from 'react';
import './App.css';


function App() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Welcome!');
  
  
  function handReset(){
      setScore(0);
      setMessage("Reset")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{score}</h1>
        <button onClick ={()=> setScore(score +1)}>
          Increase Score
        </button>
        <button onClick ={()=> {setScore(prevScore => prevScore - 1); setMessage("Descreased!")}}>
          Decrease Score
        </button>
        <button onClick ={()=> handReset}>
          Reset
        </button>

        <h1>{message}</h1>
      </header>
    </div>
  );
}

export default App;
