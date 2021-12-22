import React, {Component} from 'react';
import {Cardlist} from "./Cardlist"
// import {Card} from "./Card"
export default class App extends Component {
  constructor(){
    super();
    this.state ={
      robots : [],
    }
    
  };
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
  .then( response => response.json())

  .then( data => this.setState({robots: data})
 
  );

}

  
  render(){
    console.log(this.state.robots)
    return(
      <div className='App'>
              <h1 className='center'>robot search</h1>
              
               <Cardlist robots={this.state.robots}/>
      </div>
    )
  }

}
