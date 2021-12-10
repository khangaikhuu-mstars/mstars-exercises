
class Header extends React.Component {
    render() {
        return(

                <header>
                    <h1>{this.props.title}</h1>
                    <span className ="stats">Players : {this.props.niitPlayers}</span>
                </header>

        )
    }
}

class Player extends React.Component {

    render() {
        return(
            <div className = "player">
                <span className = "player-name">
                    <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
                    
                    {this.props.playerName}</span>
                <Counter />
            </div>
        )
    }
}

class Counter extends React.Component {

    state = {
        score: 0
    }

    incrementScore = () => { 
        this.setState( prevState => ({
                score: prevState.score + 1
        }))
    }

    decrementScore = () => {
        this.setState( prevState => ({

            score: prevState.score - 1
        })
            
        ) 
    }

    render() {
        return(
            <div className = "counter">
                <button className = "counter-action decrement" onClick={this.decrementScore}>-</button>
                <span className = "counter-score">{this.state.score}</span>
                <button className = "counter-action increment" onClick={this.incrementScore}>+</button>
            </div>
        )
    }
}

class App extends React.Component {

    state = {
        players: [
            {
                name: 'Windy',
                id: 1
            },
            {
                name: 'Sindy',
                id: 2
            },
            {
                name: 'Lindy',
                id: 3
            },
            {
                name: 'Andy',
                id: 4
            },
            {
                name: 'Suzy',
                id: 5
            }
        ]
        
    }

    removePlayer = (id) => {
        this.setState(data => ({
            players: data.players.filter(f => f.id !==id)
        }))
    }

    render() {
        return(
           <div className = "scoreboard">
                <Header 
                title = "Scoreboard"
                niitPlayers = {this.state.players.length}/>

                {this.state.players.map(players => 
                    <Player 
                    playerName = {players.name} 
                    key = {players.id.toString()}
                    id = {players.id}
                    removePlayer = {this.removePlayer}/>
                    )}
           </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)