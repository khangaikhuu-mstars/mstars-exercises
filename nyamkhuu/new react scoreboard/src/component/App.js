




import React from 'react';
import '../App.css';
import Header from './Header';
import Player from './Player';

import AddPlayerForm from './AddPlayer';






class App extends React.Component {
    state = {
        players: [
            {
                name: "hoho",
                score: 1,
                id: 1
            },
            {
                name: "haha",
                score: 2,
                id: 2
            },
            {
                name: "hihi",
                score: 3,
                id: 3
            },
            {
                name: "huhu",
                score: 4,
                id: 4
            },
            {
                name: "hehe",
                score: 5,
                id: 5
            },
        ]
    }
    
    prevPlayerId = 5;


   
    handleAppPlayer = (name) => {
        this.setState({
            players : [
                ...this.state.players,
                {
                    name: name,
                    score: 0,
                    id: this.prevPlayerId += 1
                }
            ]
        })
    }

    changeScore = (index, number) => {


        this.setState(prevState => {
            
            const updatedPlayers = [...prevState.players];
            const updatedPlayer = { ...updatedPlayers[index] };
            updatedPlayer.score += number;
            updatedPlayers[index] = updatedPlayer;
            return {
                players: updatedPlayers
                
            }

        })



    }

    


    removePlayer = (id) => {
        this.setState(data => ({
            players: data.players.filter(f => f.id !== id)
        }))
    }

    render() {

        const highScore = this.state.players.reduce((max, player) => 
        {
            if(max < player.score){
                max = player.score;
            }
           
            return max;
        }, -99999);



        console.log(highScore)
        
        return (
            <div className="scoreboard">
                <Header
                    totalPlayers={this.state.players}
                    highScore = {highScore}
                    changeScore={this.changeScore}

                />

                {this.state.players.map((player, index) =>
                    <Player
                    
                        highScore = {highScore}
                        playerName={player.name}
                        key={player.id.toString()}
                        id={player.id}
                        score={player.score}
                        highScore = {highScore}
                        index={index}
                        removePlayer={this.removePlayer}
                        changeScore={this.changeScore}
                        changedScore={this.changedScore}

                    />)

                }
                <AddPlayerForm  addPlayer = { this.handleAppPlayer}/>

            </div>
        )
    }
}

export default App;
