

import React from 'react';



class Header extends React.Component{
    render(){

        return(
            <header>
                <h1> Score</h1>
                <span className = "stats"> total player: {this.props.tttPlayer}</span>
            </header>
        )
    }
}

export default Header;