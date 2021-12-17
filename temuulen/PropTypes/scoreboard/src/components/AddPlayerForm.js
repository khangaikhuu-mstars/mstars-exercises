import React, { Component } from 'react';
<<<<<<< HEAD

class AddPlayerForm extends Component {

  playerInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
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
import { Consumer } from './Context';

class AddPlayerForm extends Component {
  playerInput = React.createRef();

  render() {
    return (
      <Consumer>
        { context => {

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
          )
        }}
      </Consumer>
>>>>>>> 85d14a3aa4f04b662e91059723db15658e405142
    );
  }
}

export default AddPlayerForm;