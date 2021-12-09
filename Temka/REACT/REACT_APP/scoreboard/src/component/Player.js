import React from "react"
import Counter from "./Counter";


class Player extends React.Component{


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



export default Player;