const players = [
    {
        name: 'Windy',
        score: 50,
        id: 1
    },
    {
        name: 'Sindy',
        score: 25,
        id: 2
    },
    {
        name: 'Lindy',
        score: 17,
        id: 3
    },
    {
        name: 'Andy',
        score: 33,
        id: 4
    },
    {
        name: 'Suzy',
        score: 41,
        id: 5
    }
]

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                <span className="stats">Player : {this.props.totalPlayers}</span>
            </header>
        )
    }
};

class Counter extends React.Component {

    state = {
        score: 0
    }

    decrementScore() {
        this.setState( prevState => ({
            score: this.state.score + 1
        }))
    }

    incrementScore() {
        this.setState( prevState => ({
            score: this.state.score - 1
        }))
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick = {this.decrementScore}>-</button>
                <span className="counter-score">{this.props.score}</span>
                <button className="counter-action increment" onClick = {this.incrementScore}>+</button>
            </div>
        )
    }

};

class Player extends React.Component {
    render() {
        return (
            <div className="player">
                <span className="player-name">{this.props.playerName}</span>
                <Counter score={this.props.score}/>
            </div>
        )
    }
};

class App extends React.Component {
    render() {
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers={this.props.initialPlayers.length} />
                
                {props.initialPlayers.map((players) =>
                    <Player 
                        playerName = {this.players.name} 
                        key = {this.players.id.toString()} />
                )}
            </div>
        )
    }
};


ReactDOM.render (
    <App initialPlayers = {this.players}/>,
    document.getElementById("root")
)

