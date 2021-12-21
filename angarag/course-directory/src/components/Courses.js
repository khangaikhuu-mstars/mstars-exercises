import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import HTML from "./courses/HTML";
import JS from "./courses/JavaScript";
import CSS from "./courses/CSS";
// import Course from "./courses/Course";
import { Redirect } from "react-router-dom";

const Courses = ({match}) => (
  <BrowserRouter>
    <div className="main-content courses">
      <div className="course-header group">
        <h2>Courses</h2>
        <ul className="course-nav">
          <li>
            <NavLink to={`${match.url}/html`}>HTML</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/CSS`}>CSS</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/JS`}>JS</NavLink>
          </li>
        </ul>
      </div>

      {/* Write routes here... */}
      <Redirect to={`${match.path}/html`} />
      {/* <Route path={`${match.path}`} render={()=> <Redirect to ="courses/html"/>}/> */}
      <Route path={`${match.path}/html`} component={HTML} />
      <Route path={`${match.path}/CSS`} component={CSS} />
      <Route path={`${match.path}/JS`} component={JS} />
    </div>
  </BrowserRouter>
);

export default Courses;
