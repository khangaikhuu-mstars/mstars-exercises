import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import About from "./About";
import Teachers from "./Teachers";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import NotFound from "./NotFound";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About}/> */}
        <Route path="/about" render={() => <About title="HB" />} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
