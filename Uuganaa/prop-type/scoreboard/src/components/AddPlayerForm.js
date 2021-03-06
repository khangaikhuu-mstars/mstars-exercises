import React, { Component } from 'react';
import { Consumer } from './context ';

class AddPlayerForm extends Component {
  playerInput = React.createRef();
  

            
  

  

  render() {
    return(
    <Consumer>
    { context =>{
  context.actions.handleSubmit = (e) => {
  
    e.preventDefault();
    context.actions.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
    
  }
  return (
      
        
    <form onSubmit={context.actions.handleSubmit}>
      <input 
        type="text"
        ref={this.playerInput}
        placeholder="Enter a player's name"
      />
      
      <input 
        type="submit"
        value="Add Player"
      />
    </form>
  
  );
  }}
  </Consumer>
    )
  }
}

export default AddPlayerForm;