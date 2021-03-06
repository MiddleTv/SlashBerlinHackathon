import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../logo.png'


class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            password: '',
            name: '',
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

              <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                  <label 
                  className="FormField__Label" 
                  htmlFor="username">
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
                  <label 
                  className="FormField__Label" 
                  htmlFor="password">
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
                    <button 
                    className="FormField__Button mr-20">
                    Sign Up
                    </button> 
                    <Link to="/sign-in" className="FormField__Link">
                    I'm already member
                    </Link>
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default SignUpForm;
