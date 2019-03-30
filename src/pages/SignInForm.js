import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../logo.png'


class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    handleClick(e) {

    }

    render() {
        return (
        <div className="FormMain">
            <div className="FormLogo">
            <img src={logo} className="App__Logo" alt="logo" />
            </div>
            <div className="FormLogin">
              <div className="FormTitle">
                <NavLink 
                to="/sign-in" 
                activeClassName="FormTitle__Link--Active" 
                className="FormTitle__Link">
                Sign In</NavLink>
                or 
                <NavLink exact 
                to="/" 
                activeClassName="FormTitle__Link--Active" 
                className="FormTitle__Link">
                Sign Up
                </NavLink>
            </div>

            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="username">
                username
                </label>
                <input 
                type="text" 
                id="username" 
                className="FormField__Input"
                placeholder="Enter your username" 
                name="username" 
                value={this.state.username} 
                onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">
                Password
                </label>
                <input 
                type="password" 
                id="password" 
                className="FormField__Input" 
                placeholder="Enter your password" 
                name="password" 
                value={this.state.password} 
                onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <Link
                  className="FormField__Button mr-20" 
                  role="button"
                  to="/register"
                  onClick={this.handleClick()}>
                  Sign In
                  </Link> 
                  <Link to="/" className="FormField__Link">
                  Create an account
                  </Link>
              </div>
            </form>
          </div>
          </div>
        );
    }
}

export default SignInForm;
