import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Checkbox, Form } from 'react-semantic-ui';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            password: '',
            fullname: '',
            groupname: '',
            selectedOption: '0',
            selectedSkills: [],
        };

        this.handleChangeR = this.handleChangeR.bind(this);
        this.handleChangeC = this.handleChangeC.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    handleChangeR(e) {   
        this.setState({
        selectedOption: e.target.value
      });
    }

    handleChangeC(e) {
        this.setState({
            selectedSkills: e.target.value
        })
    }

    render(){
        return(
            <div className="FormMain">
                <div className="FormLeft">
                    <div className="FormLogo">
                        Solo
                    </div>
                    <div className="FormField">
                    <label 
                    className="FormField__Label" 
                    htmlFor="fullname">
                    Full Name
                    </label>
                    <input 
                    type="text" 
                    id="fullname" 
                    className="FormField__Input" 
                    placeholder="Enter your full name" 
                    name="fullname" 
                    value={this.state.fullname} 
                    onChange={this.handleChangeR} />

                    <form>
                        <div className="ForLogo">Field</div>
                  <div className="FormFieldRadio">
                  <label>
                    <input type="radio" value="0" onChange={this.handleChangeR} checked={this.state.selectedOption === '0'}/>
                    Developer
                  </label>
                  </div>
                  <div className="FormFieldRadio">
                  <label>
                    <input type="radio" value="1" onChange={this.handleChangeR} checked={this.state.selectedOption === '1'}/>
                    Designer
                  </label>
                  </div>
                  <div className="FormFieldRadio">
                  <label>
                    <input type="radio" value="2" onChange={this.handleChangeR} checked={this.state.selectedOption === '2'}/>
                    Business
                  </label>
                  </div>
                  </form>
                  <form>
                  <div className = "FormField"> 
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="0" value={this.state.hasAgreed} onChange={this.handleChangeC} /> ReactJS
                </label>
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="0" value={this.state.hasAgreed} onChange={this.handleChangeC} /> C#
                </label>
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="0" value={this.state.hasAgreed} onChange={this.handleChangeC} /> C++
                </label>
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="0" value={this.state.hasAgreed} onChange={this.handleChangeC} /> Ruby
                </label>
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="0" value={this.state.hasAgreed} onChange={this.handleChangeC} /> Python
                </label>
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="0" value={this.state.hasAgreed} onChange={this.handleChangeC} /> Java
                </label>

              </div>
              </form>

              <div className="FormField">
                    
                    <Link to="/solo_view" className="FormField__Link">
                    <button 
                    className="FormField__Button mr-20">
                    Submit
                    </button> 
                    </Link>
              </div>

                </div>
                </div>
                <div className="FormRight">

                    <div className="FormLogo">
                        Group
                    </div>
                    <div className="FormField">
                  <label 
                  className="FormField__Label" 
                  htmlFor="groupname">
                  Group Name
                  </label>
                  <input 
                  type="text" 
                  id="groupname" 
                  className="FormField__Input" 
                  placeholder="Enter your group name" 
                  name="groupname" 
                  value={this.state.groupname} 
                  onChange={this.handleChange} />
                </div>
                    
                </div>
            </div>
        );
    }
}

export default Register;