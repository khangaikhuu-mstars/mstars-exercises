import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import PropTypes from'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <Stats />
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}
Header.propTypes = {
  title: PropTypes.string,
  
}
Header.defaultProps ={
  title: "scoreboard"
}

export default Header;