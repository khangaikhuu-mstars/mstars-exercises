
import React from "react"
import Stats from "./Stats"

class Header extends React.Component {
    render() {
        return(<header> 
            
            <h1> {this.props.title}</h1> 
            <Stats players = {this.props.totalPlayers}/>
            <form action="">
                <span className="stats" >player: 1 </span>
                <input type="text" id="addPlayer"/>
                
            </form>
            
            
             </header>)
    }
  }

  export default Header;