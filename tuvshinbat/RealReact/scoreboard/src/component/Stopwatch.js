
import React, {Component} from 'react'


class Stopwatch extends Component{
    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    }

componentDidMount(){
    this.intervalID = setInterval(()=>this.tick(), 100)
    console.log("Compenent is Mounted")
}

componentWillUnmount(){
    clearInterval(this.intervalID)
}

tick = () =>{
    if(this.state.isRunning){
        const now = Date.now()
        this.setState(prevState =>({
            previousTime : now,
            elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
        
        }))

    }
}

handleStopwatch = () =>{
    this.setState(prevState => ( {
        isRunning : !prevState.isRunning})
    )
    if (!this.state.isRunning){
        this.setState({
            previousTime : Date.now()
        })
    }
}

handleReset = () =>{
    this.setState({
        elapsedTime : 0,
        isRunning : this.isRunning
    })
}



    render()
    {
        const millis = Math.floor(this.state.elapsedTime/100)
        return(
            <div className="stopwatch">
                    <h2>Stopwatch</h2>
                        <span className="stopwatch-time">{millis}</span>
                        <button onClick ={this.handleStopwatch}>
                            {this.state.isRunning ? 'Stop' : 'start'}
                        </button>

                    <button onClick = {this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default Stopwatch;