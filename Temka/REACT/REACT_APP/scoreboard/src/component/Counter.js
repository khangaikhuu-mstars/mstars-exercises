import React from "react"

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


export default Counter;