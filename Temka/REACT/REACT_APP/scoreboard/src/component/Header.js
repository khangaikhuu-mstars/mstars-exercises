
import React from "react"
import Stats from "./Stats"


class Header extends React.Component{
    render(){
        return (
            <header>

                <Stats players = {this.props.totalPlayers}/>
                <h1> Scoreboard</h1>
                <span className="stats">Player: 1</span>
                <form action="">
                    <input type="text"  id = "addPlayer"/>
                    <input type="submit" onClick={()=>{this.props.addPlayerHandle(this.props.id)}}/>
                </form>
            </header>        
        );
    }    
};    


export default Header;