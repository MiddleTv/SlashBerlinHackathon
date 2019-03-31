import React, { Component } from 'react';

class AjaxTest extends Component {
    constructor() {
        super();

        this.state = {
            list: [],
            error: null,
        };
    }

    buildList =(data)=>{
        console.log(data);
        this.setState({list: data})
    }


    componentDidMount(){
        let url = 'http://localhost:5000/user/exist/monji';
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch()
    }

    render(){
        return (
            <div className ="FormRight">
                 
            </div>
        )
    }
}

export default AjaxTest;    