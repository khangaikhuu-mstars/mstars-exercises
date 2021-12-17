import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Teachers from "./Teachers";
import Courses from "./Courses";
import Headers from "./Header";
import NotFound from "./NotFound";

const App = () => (
  <BrowserRouter>
    <div className="container">
        <Headers />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <About title="sda" />} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
