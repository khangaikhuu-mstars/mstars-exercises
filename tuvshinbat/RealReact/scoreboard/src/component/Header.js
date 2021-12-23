
import React from "react"
import Stats from "./Stats"
import Stopwatch from "./Stopwatch"


class Header extends React.Component{
    render(){
        return (
            <header>

                <Stats players = {this.props.totalPlayers}/>
                <h1> Scoreboard</h1>
               
                <Stopwatch />
                {/* <form action="">
                    <input type="text"  id = "addPlayer"/>
                    <input type="submit" onClick={()=>{this.props.addPlayerHandle(this.props.id)}}/>
                </form> */}
            </header>        
        );
    }    
};    


export default Header;