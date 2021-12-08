

class Header extends React.Component{
    render(){
        return (
            <header>
                <h1>{this.props.title}</h1>
                <span className="stats">Player: {this.totalPlayers}</span>
            </header>
        );
    }
};

class Player extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div className="player">
                <span className="player-name">{this.props.playerName}</span>
                <Counter  score = {this.props.score}/>
            </div>)
    }
}

class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            score:0
        }
    }

    incrementScore(){
        console.log(this)
        this.setState({
            score: this.state.score + 1
        })
    }

    decrementScore(){
        console.log(this)      
        this.setState(prevState =>(
            {
            score: prevState.score - 1
        }))
    }


    render(){
        return(
             <div className="counter">
                    <button className="counter-action decrement" onClick = {this.decrementScore.bind(this)}>-</button>
                    <span className="counter-score">{this.state.score}</span>
                    <button className="counter-action increment" onClick = {this.incrementScore.bind(this)}>+</button>
            </div>
            )
    }
}

class App extends React.Component{
    
    render(){
        return(
            <div className ="scoreboard">
                <Header title = "ScoreBoard" totalPlayers={this.props.initialPlayers.length} />
    
                {this.props.initialPlayers.map(player =>     
                    <Player 
                        playerName = {player.name} 
                        // score = {player.score} 
                        key = {player.id.toString()}
                    />
                )}
            </div>
        )

    }
}


let players = [{id: 1, name: "Dorj", score : 99},
                {id: 2,name: "Dolgor", score : 88},
                {id: 3 , name: "Dulmaa", score: 77},
                {id: 4, name: "Dondog", score: 66}        
] 


ReactDOM.render(
    <App initialPlayers = {players}/>,
    document.getElementById("root")
)

