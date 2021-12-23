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
<<<<<<< HEAD
        players : [{id: 1, name: "Dorj", score : 0},
                    {id: 2,name: "Dolgor", score : 0},
                    {id: 3 , name: "Dulmaa", score: 0},
                    {id: 4, name: "Dondog", score: 0}        
=======
        players : [{id: 1, name: "Baynaa", score : 0},
                    {id: 2,name: "Buynaa", score : 0},
                    {id: 3 ,name: "Temka", score: 0},
                    {id: 4, name: "Boldko", score: 0} ,
                    {id: 5, name: "Uugnaa", score: 0}  ,
                    {id: 6, name: "Tuvshinbat", score: 0}         
>>>>>>> b65443f8b3c9d0522aa60fb014bf414a1d5a796c
                    ]
                }
                
prevPlayerId = 5;


    orderScore =()=>{
        let scores = this.state.players.map(player => parseInt(player.score))
        console.log(scores)
        scores = scores.sort(function (a, b) { return a - b; }).reverse()
        console.log(scores)
        console.log(scores.slice(0,3))
        
        console.log(typeof scores.slice(0,3)[0])
        return scores.slice(0,3)
        
    }



    handleRemovePlayer = (id)=>{
        
        this.setState(data =>    
            ({  
                players: data.players.filter(f => {
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

    getMedal =(player)=>{
        const bestThreeScores = this.orderScore()
        if (!bestThreeScores.includes(player.score)){
            return null;
        }else{
            if(bestThreeScores[0] == player.score){
                return "gold";
            }else if(bestThreeScores[1] == player.score){
                return 'silver';
            }else{
                return "bronze";
        }
    }
    console.log(bestThreeScores)
    console.log(player.score)
    };
  

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
                            medal = {this.getMedal(player)}/>)
                })}

                <AddPlayerForm  addPlayer = {this.handleAddPleyer}/>

            </div>
            
        )
    }
}




export default App;
