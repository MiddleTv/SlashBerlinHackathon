import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            password: '',
            name: '',
        };

        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render(){
        return(
            <div className="FormMain">
                <div className="FormLeft">
                <h1>SOLO</h1>
                </div>
                <div className="FormRight">
                <h1>GROUP</h1>
                </div>
            </div>
        );
    }
}

export default Register;