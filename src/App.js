import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';

class App extends Component {
  routes = () => (
    <Switch>
      <Route
        path='/'
        exact
      >
        <Home />
      </Route>
    </Switch>
  )

  render() {
    return(
      <div className="grid bg-grey-10 bg-n-gradient">
        <Nav />
        {
          this.routes()
        }
      </div>
      );
    }
}

export default App;
