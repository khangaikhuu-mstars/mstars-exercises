<<<<<<< HEAD
import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
=======
import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import { Provider } from "./Context";
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
<<<<<<< HEAD
        id: 1
=======
        id: 1,
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
      },
      {
        name: "Treasure",
        score: 0,
<<<<<<< HEAD
        id: 2
=======
        id: 2,
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
      },
      {
        name: "Ashley",
        score: 3,
<<<<<<< HEAD
        id: 3
=======
        id: 3,
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
      },
      {
        name: "James",
        score: 0,
<<<<<<< HEAD
        id: 4
      }
    ]
=======
        id: 4,
      },
    ],
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
  };

  // player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
<<<<<<< HEAD
    this.setState( prevState => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [ ...prevState.players ];
=======
    this.setState((prevState) => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [...prevState.players];
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score += delta;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
<<<<<<< HEAD
        players: updatedPlayers
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
=======
        players: updatedPlayers,
      };
    });
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
<<<<<<< HEAD
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          // title="Edited" 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
=======
            id: (this.prevPlayerId += 1),
          },
        ],
      };
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  render() {
    return (
      <Provider value={{
        players : this.state.players,
        actions : {
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          addPlayer : this.handleAddPlayer
        }
        }}>
        <div className="scoreboard">
          <Header
            // title="Edited"
          />

          {/* Players list */}
          {this.state.players.map((player, index) => (
            <Player
              name={player.name}
              score={player.score}
              id={player.id}
              key={player.id.toString()}
              index={index}
              changeScore={this.handleScoreChange}
              removePlayer={this.handleRemovePlayer}
            />
          ))}

          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
      </Provider>
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
    );
  }
}

export default App;
