import React, {PureComponent} from "react"
import Counter from "./Counter";
import Crown from "./Crown";


class Player extends PureComponent{


render(){
    console.log(this.props.medal + " rendered")  
    return (
        <div className="player">
            
            <span className="player-name">
            <button className="remove-player" onClick={()=>{this.props.removePlayer(this.props.id)}}>x</button>
<<<<<<< HEAD
                <Crown medal = {this.props.medal}/>{this.props.playerName}</span>
            <Counter score = {this.props.score} changeScore = {this.props.changeScore}
=======
            <Crown isHighScore = {this.props.isHighScore}/>
              
                {this.props.playerName}</span>
            <Counter score = {this.props.score}
             changeScore = {this.props.changeScore}
>>>>>>> b65443f8b3c9d0522aa60fb014bf414a1d5a796c
                index = {this.props.index}
            />
        </div>
        

    )
}
}



export default Player;