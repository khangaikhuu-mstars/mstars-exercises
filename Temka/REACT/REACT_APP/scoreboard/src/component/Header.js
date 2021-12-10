
import React from "react"


class Header extends React.Component{
    render(){
        return (
            <header>
                <h1> Scoreboard</h1>
                <span className="stats">Player: 1</span>
            </header>        
        );
    }    
};    


export default Header;