import React, {useState} from 'react';
import './App.css';


function App() {
  const [ score , setScore ] = useState(0)
  const [ message , setMessage] = useState('Welcome!')

  const handleReset = () => {
    setScore(0)
    setMessage(message => message = 'Resetted')
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <h2>{score}</h2>
        <button onClick={()=>(setMessage(message=> message='message changed'))}>change message</button>
        <button onClick={()=> setScore(prevScore => prevScore +1)}><span role="img" aria-label="">➕1</span></button>
        <button onClick={()=> setScore(prevScore => prevScore -1)}><span role="img" aria-label="">➖1</span></button>
        <button onClick={()=> handleReset()}><span role="img" aria-label="">↺</span></button>
      </header>
    </div>
  );
}

export default App;
