import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from "./components/layout/Navbar";
import Welcome from "./components/layout/Welcome";
import About from './components/layout/About';
import Ideas from "./components/idea/Ideas";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AddIdea from "./components/idea/AddIdea";
import EditIdea from "./components/idea/EditIdea";


class App extends Component {

  state = {
    isAuthenticated: false,
    user: {}
  };

  addIdea =(newIdea) => {

  };

  editIdea = (editedIdea) => {

  };

  deleteIdea = (ideaID) => {

  };

  displayIdeas = () => {

  };

  registerUser = (newUser) => {

  };

  loginUser = (user) => {

  };

  logoutUser = () => {

  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Welcome}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/users/login">
                <Login/>
              </Route>
              <Route exact path="/users/register">
                <Register/>
              </Route>
              <Route exact path="/ideas">
                <Ideas/>
              </Route>
              <Route exact path="/ideas/add">
                <AddIdea/>
              </Route>
              <Route exact path="/ideas/edit">
                <EditIdea/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
