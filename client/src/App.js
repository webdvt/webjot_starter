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

let initialIdeas = [
  {
    id: 1,
    title: 'Blogging App',
    content: 'Build a blogging app where users can login and create blogs',
    technologies: 'React, Node',
    features: ['users can login and register', "users create and edit their posts"],
    date: Date.now()
  },
  {
    id: 2,
    title: 'Chatting App',
    content: 'Build a chatting app where users chat in private or in public channal',
    technologies: 'React, Node, Socket.io',
    features: ['users can chat in private', "users can chat in public"],
    date: Date.now()
  }
];
class App extends Component {

  state = {
    isAuthenticated: false,
    user: {},
    ideas: initialIdeas
  };

  addIdea =(newIdea, history) => {
    console.log(newIdea);
    this.setState({ideas: [newIdea, ...this.state.ideas]});
    history.push('/ideas');
  };

  editIdea = (editedIdea) => {

  };

  deleteIdea = (ideaID) => {
    this.setState({ideas: [...this.state.ideas.filter(idea => idea.id !== ideaID)]})
  };

  displayIdeas = () => {

  };

  registerUser = (newUser, history) => {
    console.log(newUser);
    history.push('/users/login');
  };

  loginUser = (user,history) => {
    console.log(user);
    history.push('/ideas');
  };

  logoutUser = (history) => {
    history.push('/');
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar logoutUser={this.logoutUser}/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Welcome}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/users/login">
                <Login loginUser={this.loginUser}/>
              </Route>
              <Route exact path="/users/register">
                <Register registerUser={this.registerUser}/>
              </Route>
              <Route exact path="/ideas">
                <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
              </Route>
              <Route exact path="/ideas/add">
                <AddIdea addIdea={this.addIdea}/>
              </Route>
              <Route exact path='/ideas/edit/:id' render={props => <EditIdea ideas = {this.state.ideas} props={props} id={props.match.params.id} editIdea={this.editIdea}/>}>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
