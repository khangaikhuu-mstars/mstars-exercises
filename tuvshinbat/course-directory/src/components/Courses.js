import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import HTML from "./courses/HTML"
import Javascript from './courses/JavaScript'
import CSS from './courses/CSS'
import { NavLink } from 'react-router-dom';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>css</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>javascript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    {/* <Redirect to="/courses/html"/> */}
    <Route path={`${match.path}`} render= {()=> <Redirect to ={`${match.path}/html`}/>}></Route>
    <Route exact path={`${match.path}/html`} component={HTML}/>
    <Route  path={`${match.path}/css`} component={CSS}/>
    <Route  path={`${match.path}/javascript`} component={Javascript}/>
  </div>
);

export default Courses;