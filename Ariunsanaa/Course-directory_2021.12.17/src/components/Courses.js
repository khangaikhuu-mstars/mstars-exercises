import React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Css from './courses/CSS'
import Html from './courses/HTML'
import Javascript from './courses/JavaScript'

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to='/courses/html'>HTML</NavLink></li>
        <li><NavLink to='/courses/css'>CSS</NavLink></li>
        <li><NavLink to='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    <Route path={`${match.path}`} render={ () => <Redirect to="/courses/html"/>}></Route>
    <Route path={`${match.path}/html`} component={Html} ></Route>
    <Route path={`${match.path}/css`} component={Css} ></Route>
    <Route path={`${match.path}/javascript`} component={Javascript} ></Route>
  </div>
);

export default Courses;