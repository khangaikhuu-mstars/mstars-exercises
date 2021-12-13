import React, {PureComponent} from "react"
import Counter from "./Counter";
import Crown from "./Crown";


class Player extends PureComponent{


render(){
    console.log(this.props.playerName + " rendered")
    return (
        <div className="player">
            
            <span className="player-name">
            <button className="remove-player" onClick={()=>{this.props.removePlayer(this.props.id)}}>x</button>
            <Crown />
              
                {this.props.playerName}</span>
            <Counter score = {this.props.score} changeScore = {this.props.changeScore}
                index = {this.props.index}
            />
        </div>
        

    )
}
}



export default Player;