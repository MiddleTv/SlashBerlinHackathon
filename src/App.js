import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Register from './pages/Register';
import Test from './pages/AjaxTest';
         

import './App.css';
import AjaxTest from './pages/AjaxTest';

class App extends Component {
  render() {
    return (
      <Router basename="/hackafind/">
        <div className="App">
          <div className="FormField">
                 <Link
                  className="FormField__Button mr-20" 
                  role="button"
                  to="/AjaxTest"
                  >
                  Test
                  </Link> 
                </div>
            <Route exact path="/" component={SignUpForm}>
            </Route>
            <Route path="/sign-in" component={SignInForm}>
            </Route>
            <Route path="/register" component={Register}>
            </Route>
            <Route path="/AjaxTest" component={AjaxTest}>
            </Route>
        </div>
      </Router>
    );
  }
}

export default App;
