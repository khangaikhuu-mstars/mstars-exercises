


    let players = [{id: 1, name: "Dorj", score : 99},
                    {id: 2,name: "Dolgor", score : 88},
                    {id: 3 , name: "Dulmaa", score: 77},
                    {id: 4, name: "Dondog", score: 66}        
    ] 



class Header extends React.Component{
    render(){
        return (
            <header>
                <h1> Scoreboard</h1>
                <span className="stats">Player: 1</span>
            </header>        
        );
    }    
};    


class Player extends React.Component{

   
        // this.state.filter()
    render(){
        return (
            <div className="player">
                
                <span className="player-name">
                <button className="remove-player" onClick={()=>{this.props.removePlayer(this.props.id)}}>x</button>

                    {this.props.playerName}</span>
                <Counter score = {this.props.score}/>
            </div>

        )
    }
}

class Counter extends React.Component{
    state = {
        score : 0
    }

    incrementScore(){
        this.setState(prevState =>({
            score: prevState.score +1
        }))
    }
    decrementScore(){

        if(this.state.score > 0){
            this.setState(prevState =>({
               score: prevState.score - 1 
            }))

        }
    }

    


    render(){
        return(
            <div className="counter">
                <button className="counter-action decrement" onClick = {this.decrementScore.bind(this)}>-</button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore.bind(this)}>+</button>
                
            </div>
        )
    }
}


class App extends React.Component{

    state = {
        players : [{id: 1, name: "Dorj", score : 99},
                    {id: 2,name: "Dolgor", score : 88},
                    {id: 3 , name: "Dulmaa", score: 77},
                    {id: 4, name: "Dondog", score: 66}        
                    ] 
    }
    
    handleRemovePlayer = (id)=>{
        this.setState(data => ({
            players: data.players.filter(f => {
                console.log(f)
                return f.id !== id
        })
        }))
    }

    render(){
        return (
            <div className="scoreboard">
                <Header />
                {this.state.players.map((player) =>{   
                    return (<Player 
                            playerName = {player.name}
                            score = {player.score}
                            id = {player.id}
                            key={player.id.toString()}
                            removePlayer = {this.handleRemovePlayer}
                            />)
                })}

            </div>
            
        )
    }
}




ReactDOM.render(
    <App />,
    document.getElementById("root")
)


