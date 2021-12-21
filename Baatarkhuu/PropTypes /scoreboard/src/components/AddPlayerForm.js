<<<<<<< HEAD
import React, { Component } from 'react';

class AddPlayerForm extends Component {

=======
import React, { Component } from "react";
import { Consumer } from "./Context";

class AddPlayerForm extends Component {
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
  playerInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
=======
    this.context.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <Consumer>
        {(context) => {
          
          return (
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                ref={this.playerInput}
                placeholder="Enter a player's name"
              />

              <input type="submit" value="Add Player" />
            </form>
          );
        }}
      </Consumer>
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
    );
  }
}

<<<<<<< HEAD
export default AddPlayerForm;
=======
export default AddPlayerForm;
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
