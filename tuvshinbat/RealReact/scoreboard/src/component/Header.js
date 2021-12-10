
import React from "react"

class Header extends React.Component {
    render() {
        return(<header> <h1> Scoreboard</h1> <span className="stats"> player: {
                this.props.activePlayers
            }
  
            </span> </header>)
    }
  }

  export default Header;