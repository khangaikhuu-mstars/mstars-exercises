
import React from "react"
import Stats from "./Stats"
import Stopwatch from "./Stopwatch";


class Header extends React.Component{
    render(){
        return (
            <header>

                <Stats players = {this.props.totalPlayers}/>
                <h1> Scoreboard</h1>
               
                <Stopwatch/>
                
               
            </header>        
        );
    }    
};    


export default Header;