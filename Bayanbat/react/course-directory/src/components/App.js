import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Teachers from './Teachers'
import Courses from './Courses'
import Header from './Header'
import NotFound from "./NotFound"

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" render={() => <About title="Khangai bagshaa <3" />} />
        <Route path="/teachers" render={() => <Teachers title="'Hoo yeah' x3" />} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;