
      
  class Header extends React.Component {
      render() {
      return (
        <div>
          <header>
            <h1>{this.props.title}</h1>
            <span className="stats">Player: {this.props.totalPlayers}</span>
          </header>
        </div>
      );
    }
  }
  
  class Player extends React.Component {
      render() {
      return (
        <div className="player">
          <span className="player-name">
          <button className="remove-player" onClick={()=> this.props.removePlayer(this.props.id)}> X </button>
            {this.props.playerName}</span>
          <Counter score={this.props.score} />
        </div>
      );
    }
  }
  
  class Counter extends React.Component {
      state = {
          score: 0
      }
      incrementScore(){
          this.setState(prevState =>({
              score: prevState.score + 1 
          }))
      }
      decrementScore(){
          this.setState(prevState =>({
              score: prevState.score - 1 
          }))
      }
      render(){
      return (
        <div className="counter">
          <button className="counter-action decrement}" onClick={this.decrementScore.bind(this)}>-</button>
          <span className="counter-score">{this.state.score}</span>
          <button className="counter-action increment" onClick={this.incrementScore.bind(this)}>+</button>
        </div>
      );
    }
  }
  
  class App extends React.Component {

    state = {
      players: [
      {
        name: "Ariunsanaa",
        score: 0,
        id: 1,
      },
      {
        name: "Enkhtuvshin",
        score: 0,
        id: 2,
      },
      {
        name: "Baatarkhuu",
        score: 0,
        id: 3,
      },
      {
        name: "Amarsanaa",
        score: 0,
        id: 4,
      },
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState(data => ({
      players: data.players.filter(f => f.id !== id)
    }))
  }
      render() {
      return (
        <div className="scoreboard">
          <Header title="Scoreboard" totalPlayers={1} />
          {this.state.players.map((player) => (
            <Player
              playerName={player.name}
              score={player.score}
              key={player.id.toString()}
              id = {player.id}
              removePlayer = {this.handleRemovePlayer}/>
          ))}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );