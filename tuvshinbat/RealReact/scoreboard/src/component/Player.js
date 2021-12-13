import React from "react"
import Counter from "./Counter.js"

class Player extends React.Component {
    render() {
        return(<div className="player"> <span className="player-name"> <button className="remove-player"onClick= {
                ()=> this.props.removePlayer(this.props.id)
            }

            >✖</button> {
                this.props.ner
            }

            </span> <div className="stats"></div> <span> <Counter score= {
                this.props.score
            }

            /></span> </div>)
    }
}
export default Player