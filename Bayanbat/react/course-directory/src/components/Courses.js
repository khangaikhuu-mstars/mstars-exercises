import React from 'react';
import { BrowserRouter, NavLink, Route, Redirect } from 'react-router-dom';
import Css from "./courses/CSS"
import HTML from "./courses/HTML"
import Js from "./courses/JavaScript"

const Courses = ({ match }) => (
  <BrowserRouter>
    <div className="main-content courses">
      <div className="course-header group">
        <h2>Courses</h2>
        <ul className="course-nav">
          <li><NavLink to={`${match.path}/html`}>HTML</NavLink></li>
          <li><NavLink to={`${match.path}/css`}>CSS</NavLink></li>
          <li><NavLink to={`${match.path}/js`}>JavaScript</NavLink></li>
        </ul>
      </div>

      {/* Write routes here... */}
      <div>
        <Route path={`${match.path}`} render={() => <Redirect to={`${match.path}/html`} />} ></Route>
        <Route path={`${match.path}/html`} component={HTML} />
        <Route path={`${match.path}/css`} component={Css} />
        <Route path={`${match.path}/js`} component={Js} />
      </div>
    </div >

  </BrowserRouter >
);

export default Courses;