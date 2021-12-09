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
                <h1>{props.title}</h1>
                <span className="stats">Player : {this.props.totalPlayers}</span>
            </header>
        )
    }
};

class Counter extends React.Component {
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement">-</button>
                <span className="counter-score">{props.score}</span>
                <button className="counter-action increment">+</button>
            </div>
        )
    }
};

class Player extends React.Component {
    render() {
        return (
            <div className="player">
                <span className="player-name">{props.playerName}</span>
                <Counter score={props.score}/>
            </div>
        )
    }
};

class App extends React.Component {
    render() {
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />
                
                {props.initialPlayers.map((players) =>
                    <Player 
                        playerName = {players.name} 
                        score = {players.score}
                        key = {players.id.toString()} />
                )}
            </div>
        )
    }
};


ReactDOM.render (
    <App initialPlayers = {players}/>,
    document.getElementById("root")
)

