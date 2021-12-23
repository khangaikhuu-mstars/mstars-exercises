import React from "react"

const Counter=(props)=> {
    // state = {
    //     score : 0
    // }

    // incrementScore(){
    //     this.setState(prevState =>({
    //         score: prevState.score +1
    //     }))
    // }

    // incrementScore(){
    //     console.log(this.props.score +1);
    //     this.props.score +=1;
    // }


    // decrementScore(){

    //     if(this.state.score > 0){
    //         this.setState(prevState =>({
    //            score: prevState.score - 1 
    //         }))

    //     }
    // }

    

        const {index, score, changeScore} = props;

        return(
            <div className="counter">
                <button className="counter-action decrement" onClick = {()=>changeScore(index, -1)}>-</button>
                <span className="counter-score">{score}</span>
                {/* <button className="counter-action increment" onClick={this.incrementScore.bind(this)}>+</button> */}
                <button className="counter-action increment" onClick = {()=>changeScore(index, +1)}>+</button>
                
            </div>

        )
}


export default Counter;