import '../App.css';
import Player from './Player';
import Header from './Header';
import Counter from './Counter';

import React from "react"
import AddPlayerForm from './AddPlayerForm';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



// class Header extends React.Component{
//     render(){
//         return (
//             <header>
//                 <h1> Scoreboard</h1>
//                 <span className="stats">Player: 1</span>
//             </header>        
//         );
//     }    
// };    



// class Player extends React.Component{

   
//         // this.state.filter()
//     render(){
//         return (
//             <div className="player">
                
//                 <span className="player-name">
//                 <button className="remove-player" onClick={()=>{this.props.removePlayer(this.props.id)}}>x</button>

//                     {this.props.playerName}</span>
//                 <Counter score = {this.props.score}/>
//             </div>

//         );
//     };
// };

// class Counter extends React.Component{
//     state = {
//         score : 0
//     }

//     incrementScore(){
//         this.setState(prevState =>({
//             score: prevState.score +1
//         }))
//     }
//     decrementScore(){

//         if(this.state.score > 0){
//             this.setState(prevState =>({
//                score: prevState.score - 1 
//             }))

//         }
//     }

    


 

class App extends React.Component{

    state = {
        players : [{id: 1, name: "Dorj", score : 0},
                    {id: 2,name: "Dolgor", score : 0},
                    {id: 3 , name: "Dulmaa", score: 0},
                    {id: 4, name: "Dondog", score: 0}        
                    ]
                }
                
prevPlayerId = 5;

    handleRemovePlayer = (id)=>{
        this.setState(data =>    
            ({  
                players: data.players.filter(f => {
                    console.log(f)
                    return f.id !== id})
            })    
        )
    }

    handleScoreChange = (index, num)=>{
        //console.log("index:" + index + " num:"+ num)

        this.setState(prevState =>{
            // score: (prevState.players[index].score += num)
       
            const updatedPlayers = [...prevState.players]
    
            const updatedPlayer = {...updatedPlayers[index]}
            updatedPlayer.score += num
            updatedPlayers[index] = updatedPlayer

            return {
                players : updatedPlayers
            };
        });
    }

    handleAddPleyer = (name) => {
        this.setState({
            players: [
                ...this.state.players,
                {
                    name:name,
                    score:0,
                    id: this.prevPlayerId +=1
                }
            ]
        })
    }

  

    render(){
        return (
            <div className="scoreboard">
                <Header  totalPlayers ={this.state.players} />
                {this.state.players.map((player,index) =>{   
                    return (<Player 
                            playerName = {player.name}
                            score = {player.score}
                            id = {player.id}
                            index = {index}
                            key={player.id.toString()}
                            removePlayer = {this.handleRemovePlayer}
                            changeScore = {this.handleScoreChange}
                            />)
                })}

                <AddPlayerForm  addPlayer = {this.handleAddPleyer}/>

            </div>
            
        )
    }
}




export default App;
