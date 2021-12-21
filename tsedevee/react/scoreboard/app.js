
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
            <button className="remove-player"> OnClick{()=> this.props.removePlayer(this.props.id)}✖</button>
                {props.playerName}
            </span>
            <Counter/>
        </div>
    )
}


class Counter extends React.Component {
    state = {
        score: 0
    }
    render() {
        return(
        <div className = "counter" >

            <button className="counter-action decrement">-</button>
            <span className="counter-score"> {this.state.score}</span>
            <button className="counter-action increment">+</button>
        
        </div>
    );
    }
}
            
class Header extends React.Component {
    render() {
        return (

            <header>
                <h1>Scoreboard</h1>
                <span className="stats"> Player: 1</span>
            </header>
        )
    }

}
class App extends React.Component {
    state = {
        players: [

            {
                name: "Enkhtuvshin",
                score: "99",
                Id: 1
            },


            {
                name: "Sanaa",
                score: "101",
                id: 2
            },

            {
                name: "Tuvshuu",
                score: "503",
                id: 3
            },

            {
                name: "Baatar",
                score: "290",
                id: 4
            }

        ]
    }

handleRemovePlayer = (id) => {
    this.setState(data => {
        players: data.players.filter(f => f.id !=id)
    })
}

    render() {
        return (
            <div className="scoreboard">
                <Header
                    title="Scoreboard"
                    totalPlayers={this.state.players.length} />

                {this.state.players.map(player =>
                    <Player
                        playerName={player.name}
                        key = {player.id}
                        id = {player.id}
                        removePlayer= {this.handleRemovePlayer} />
                )}
            </div>
        );
    }

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)