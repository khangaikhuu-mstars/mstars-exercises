import React from 'react';
import '../App.css';
import Header from "./Header"
import Player from "./Player"
import AddPlayer from "./AddPlayerFrom";
// import AddPlayerFrom from './AddPlayerFrom';


class App extends React.Component {
  state= {
      players : [ {
          id: 1, name: "angarag",
              score: 0
      }

      ,
          {
          id: 2, name: "baynaa",
              score: 0
      }

      ,
          {
          id: 3, name: "tuvshee",
              score: 0
      }

      ,
          {
          id: 4, name: "tsedvee",
              score: 0
      }

      ,
          {
          id: 5, name: "temuulen",
              score: 0
      }

      ,
          {
          id: 6, name: "temka",
              score: 0
      }

      ,
    
      ]
  }
  prevPlayerId = 6

  handleRemovePlayer=(id)=> {
      this.setState(data=> ( {
                  players: data.players.filter(f=> f.id !==id)
              } ))
  }
handleScoreChange = (index, num) =>{

    this.setState(prevstate => {
        const updatedPlayers = [...prevstate.players];

 const updatedPlayer = {...updatedPlayers[index]};

 updatedPlayer.score += num;
 updatedPlayers[index] = updatedPlayer

 return{
     players : updatedPlayers
 }
 })}

handleAddPlayer = (name) =>{
    this.setState({
        player: [
            ...this.state.players,
            {
                name: name,
                score: 0,
                id: this.prevPlayerId += 1
            }
        ]
    })
}
  render() {
      return(<div className="scoreboard"> 
      <Header 
      title="Scoreboard"
      totalPlayers= {
              this.state.players}/> {
              this.state.players.map((player, index)=> 
              <Player ner= {
                      player.name
                  }

                  key= {
                      player.id.toString()
                  }

                  id= {
                      player.id
                  }

                  removePlayer= {
                      this.handleRemovePlayer
                  }

                  score = {
                      player.score
                  }
                  index ={index}
                  removePlayer ={this.handleRemovePlayer}
                  changeScore = {this.handleScoreChange}

                  />)}
                  <AddPlayer addPlayer={this.handleAddPlayer}/>
          </div>)
  }
}



export default App;
