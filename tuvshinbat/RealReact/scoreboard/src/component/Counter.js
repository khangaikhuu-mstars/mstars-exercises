import React from "react"
class Counter extends React.Component {
    state= {
        score: 0
    }

    ;

    decrementscore=()=> {
        this.setState(prevState=>( {
                    score: prevState.score -1
                }

            ))
    }

    incrementscore=()=> {
        this.setState(prevState=>( {
                    score: prevState.score +1
                }

            ))
    }

    render() {


        return(<div className="counter"> <button className="counter-action decrement"onClick= {
                this.decrementscore
            }

            > -</button> <span className="counter-score"> {
                this.state.score
            }

            </span> <button className="counter-action increment"onClick= {
                this.incrementscore
            }

            > +</button> </div>)
    }
}

export default Counter