import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.css';
import './styles/general-sm.css';
import './styles/general-md.css';
import './styles/general-lg.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

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
        <About />
      </Route>
      <Route
        path='/projects'
        exact
      >
        <Projects />
      </Route>
    </Switch>
  )

  render() {
    return(
      <>
        <Nav />
        {
          this.routes()
        }
      </>
      );
    }
}

export default App;
