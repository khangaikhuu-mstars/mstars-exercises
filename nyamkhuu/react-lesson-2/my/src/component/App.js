




import React from 'react';
import '../App.css';
import Header from './Header';
import Player from './Player';






class App extends React.Component{
  state = {
       players : [
          {
              name: "Player1",
              id : 1
          },
          {
              name: "Player2",
              id : 2
          },
          {
              name: "Player3",
              id : 3
          },
          {
              name: "Player4",
              id : 4
          },
          {
              name: "Player5",
              id : 5
          },
      ]
  }
  
  removePlayer = (id) => {
      this.setState(data => ({
          players:data.players.filter(f => f.id !==id)
      }))
  }
  
      render(){
          return(
              <div className = "scoreboard">
                  <Header tttPlayer = { this.state.players.length}/>
  
                  {this.state.players.map(player=> 
                  <Player 
                      playerName = {player.name}
                      key = { player.id.toString()}
                      id = {player.id}
                      removePlayer = {this.removePlayer}
  
                  />)
  
                  }
                  
              </div>
          )
      }
  }

export default App;
