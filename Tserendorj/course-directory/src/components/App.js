import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About';
import Home from './Home'
import Teachers from './Teachers'
import Courses from './Courses'
import Header from './Header';
import NotFound from './NotFound'
import { Switch } from 'react-router';
const App = () => (
  <BrowserRouter>
      <div className="container">
      <Header />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" render={()=> <About title = 'About'/>} />
      <Route path="/teachers" component={Teachers}/>
      <Route path="/courses" component={Courses}/>
      <Route component={NotFound}/>
      </Switch>
      </div>
  </BrowserRouter>
);

export default App;