import React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import Css from './courses/CSS'
import HTML from './courses/HTML';
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
    {/* <Redirect to="courses/html"></Redirect> */}
    {/* <Route path="/courses" render={()=> <Redirect to="/courses/html"/>}></Route>
    <Route path="/courses/html" component={HTML}></Route>
    <Route path="/courses/css" component={Css}></Route>
    <Route path="/courses/javascript" component={Javascript}></Route> */}
    <Route path={`${match.path}`} render={()=> <Redirect to="/courses/html"/>}></Route>
    <Route path={`${match.path}/html`} component={HTML}></Route>
    <Route path={`${match.path}/css`} component={Css}></Route>
    <Route path={`${match.path}/javascript`} component={Javascript}></Route>

  </div>
);

export default Courses;