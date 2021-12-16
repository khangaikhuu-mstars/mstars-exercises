import React, {Component} from "react"
 
class Stopwatch extends Component{
   state = {
       isRunning: false,
       elapsedTime : 0,
       previusTime : 0,
   }
   componentDidMount(){
   
       this.intervalID = setInterval(() => this.tick(), 100)
   }
   componentWillUnmount(){
       clearInterval(this.intervalID)
   }

   tick = () =>{
   
      if(this.state.isRunning){
           const now =Date.now()
        this.setState(prevstate =>({
            previusTime: now ,
            elapsedTime : prevstate.elapsedTime + (now - prevstate.previusTime)
        }))
       }
   }
   handlereset = () => {
      this.setState({
          elapsedTime: 0,
          isRunning: false
      })
   }
   handleStopwatch = () =>{
       this.setState (prevstate => ({
           isRunning: !prevstate.isRunning
       }))
       if(!this.state.isRunning){

       }this.setState({
          previusTime : Date.now()
       })
   }
   

    render(){
        const millis = Math.floor(this.state.elapsedTime / 100) ;
        return(
           <div className="stopwatch">
               <h2>Stopwatch</h2>
              <span className="stopwatch-time">{millis}</span>
              <button onClick ={this.handleStopwatch}>{this.state.isRunning ? "stop" : "start"}</button>
             <button onClick={this.handlereset}>Reset</button>

           </div>
        )
    }
}

export default Stopwatch;