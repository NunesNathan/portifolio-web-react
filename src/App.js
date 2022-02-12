import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Nav from './pages/Nav/Nav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

export default function App() {
  const routes = () => (
    <Switch>
      <Route
        path="/"
        exact
      >
        <Home />
      </Route>
      <Route
        path="/about"
        exact
      >
        <Nav />
        <About />
      </Route>
      <Route
        path="/projects"
        exact
      >
        <Nav />
        <Projects />
      </Route>
    </Switch>
  )

  return(
    <>
      {
        routes()
      }
    </>);
}
