import React, { Component } from 'react';
import { Consumer } from './context';
class AddPlayerForm extends Component {


  playerInput = React.createRef();

 

  render() {return(
    <Consumer>
      {
        context=>{
          context.actions.handleSubmit = (e) => {
            e.preventDefault();
            context.actions.addPlayer(this.playerInput.current.value);
            e.currentTarget.reset();
          }
          return (
<<<<<<< HEAD
            <form onSubmit={context.actions.handleSubmit}>
=======
            <form onSubmit={context.handleSubmit}>
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
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
        }
      }
    </Consumer>
  )
  }
}

export default AddPlayerForm;