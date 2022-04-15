import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Header from '../components/Header'
import About from '../components/About'
import Teachers from '../components/Teachers'
import Courses from '../components/Courses'
import NotFound from '../components/NotFound'
import Featured from '../components/Featured'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" render={() => <About title="About Title"/>}/>
        <Route exact path="/teachers" component={Teachers}/>
        <Route path="/teachers/:topic/:name" component={Featured}/>
        <Route path="/courses" component={Courses}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
  
);

export default App;

