import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Register from './pages/Register';
import SoloView from './pages/SoloView';
         

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/hackafind/">
        <div className="App">
            <Route exact path="/" component={SignUpForm}>
            </Route>
            <Route path="/sign-in" component={SignInForm}>
            </Route>
            <Route path="/register" component={Register}>
            </Route>
            <Route path="/solo_view" component={SoloView}>
            </Route>
        </div>
      </Router>
    );
  }
}

export default App;
