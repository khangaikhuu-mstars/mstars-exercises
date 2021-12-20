import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink activeClassName="actyMcActiveFace" exact to="/">Home</NavLink></li>
      <li><NavLink activeStyle={{ background: 'tomato' }} to="/About">About</NavLink></li>
      <li><NavLink to="/Teachers">Teachers</NavLink></li>
      <li><NavLink to="/Courses">Courses</NavLink></li>
    </ul>
  </header>
);

export default Header;