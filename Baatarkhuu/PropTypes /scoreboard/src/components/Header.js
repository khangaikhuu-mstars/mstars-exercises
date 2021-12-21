import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types'

<<<<<<< HEAD
const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={players} />
=======
const Header = ({ title }) => {
  return (
    <header>
      <Stats/>
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
<<<<<<< HEAD
    players : PropTypes.arrayOf(PropTypes.object),
=======
>>>>>>> 6ee0dd4d7d64c5444294cbc9429cf6c8ebb99b02
    title : PropTypes.string
}
Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header;