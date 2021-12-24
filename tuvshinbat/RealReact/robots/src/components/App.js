import React, {Component} from 'react';
import {Cardlist} from "./Cardlist"
import { Search } from './Search';
// import {Card} from "./Card"
export default class App extends Component {
  constructor(){
    super();
    this.state ={
      robots : [],
      searchField: " ",
    }
    
  };
  onSearchChanged = event => {
    this.setState({searchField: event.target.value})
    console.log('---', event.target.value);
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
  .then( response => response.json())

  .then( data => this.setState({robots: data})
 
  );

}

  
  render(){
   const {robots, searchField} = this.state;
   const filteredRobots =robots.filter(el => el.name.toLowerCase().includes(searchField))


    return(
      <div className='App'>
              <h1 className='center'>robot search</h1>
              <Search onSearch={this.onSearchChanged} />
               <Cardlist robots={filteredRobots}/>
      </div>
    )
  }

}
