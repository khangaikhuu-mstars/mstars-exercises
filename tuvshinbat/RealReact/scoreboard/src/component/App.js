import React from 'react';
import '../App.css';
import Header from "./Header"
import Player from "./Player"


class App extends React.Component {
  state= {
      players : [ {
          id: "human1", name: "angarag",
              score:"70"
      }

      ,
          {
          id: "human2", name: "baynaa",
              score:"65"
      }

      ,
          {
          id: "human3", name: "tuvshee",
              score:"99"
      }

      ,
          {
          id: "human4", name: "tsedvee",
              score:"92"
      }

      ,
          {
          id: "human5", name: "temuulen",
              score:"79"
      }

      ,
          {
          id: "human6", name: "temka",
              score:"75"
      }

      ,
      ]
  }

  handleRemovePlayer=(id)=> {
      this.setState(data=> ( {
                  players: data.players.filter(f=> f.id !==id)
              }

          ))
  }

  render() {
      return(<div className="scoreboard"> <Header activePlayer= {
              this.state.players.length
          }

          /> {
              this.state.players.map(player=> <Player ner= {
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

                  />)
          }

          </div>)
  }
}



export default App;
