import React, { Component } from 'react';

const categories = {
    0:"Developer",
    1:"Designer",
    2:"Business"
}

const skills = {
    0:"JavaScript",
    1:"Java",
    3:"Python",
    4:"React",
    5:"UX Designer",
    6:"FullStack",
    7:"Backend",
    8:"Frontend",
    9:"C#"
}

class SoloView extends Component {
    constructor() {
        super();

        this.state = {
            list: [],
            error: null,
            field: null
        };

        
    }

    buildList =(data)=>{
        console.log(data);
        this.setState({list: data.results })

    }

    componentDidMount(){
        let url = 'http://localhost:5000/user/list/all/all';
        fetch(url)
        .then(response => response.json())
        .then(this.buildList    )
        .catch()
    }

    renderSkills(e){
        //debugger
        var eString = JSON.stringify(e[0])
        var eString2 = eString.slice(1, -1)
        var newSplit = eString2.split(',')
        var sklArray = [];
        for(this.i = 0; this.i < newSplit.length; this.i++)
        {   
            sklArray.push(skills[newSplit[this.i]])
        }
        var response = sklArray.join(",")
        return response;       
    }

    renderCategory(e){
        //debugger
        var eString = JSON.stringify(e[0])
        var eString2 = eString.slice(1, -1)
        var newSplit = eString2.split(',')
        var catArray = [];
        for(this.i = 0; this.i < newSplit.length; this.i++)
        {   
            catArray.push(categories[newSplit[this.i]])
        }
        var response = catArray.join(",")
        return response;       
    }

    render(){
        return (
            <div className="FormMain">
                {this.state.list &&
                this.state.list.map(data => {
                    const cat = this.renderCategory([data.categoly]);
                    const skl = this.renderSkills([data.skills]);

                  return ( <div key = {data.id}>
                             { skl && <li> {skl} </li>}
                             <li> {data.name} </li>
                             { cat && <li> {cat} </li>}
                         </div>)
                }
                    
                )}  
            </div>
        )
    }
}

export default SoloView;