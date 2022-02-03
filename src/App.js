import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Nav from './pages/Nav/Nav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

class App extends Component {
  routes = () => (
    <Switch>
      <Route
        path='/'
        exact
      >
        <Home />
      </Route>
      <Route
        path='/about'
        exact
      >
        <Nav />
        <About />
      </Route>
      <Route
        path='/projects'
        exact
      >
        <Nav />
        <Projects />
      </Route>
    </Switch>
  )

  render() {
    return(
      <>
        {
          this.routes()
        }
      </>
      );
    }
}

export default App;
