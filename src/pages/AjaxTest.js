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
        this.setState({list: data.main.temp})
    }


    componentDidMount(){
        let url = 'http://api.openweathermap.org/data/2.5/weather?lat=57.71&lon=11.97&appid=0775e588b19b40d03486fc8437456434';
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch()
    }

    render(){
        return (
            <div className ="FormRight">
                <ul>
                   
                 <h3>{this.state.temp}</h3>
                    
                    
                
                </ul>
                {this.state.error &&
                    <h3>{this.state.error}</h3>
                }
            </div>
        )
    }
}

export default AjaxTest;    