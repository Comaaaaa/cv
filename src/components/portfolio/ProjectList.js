import React, { Component } from 'react'
import { portfolioData } from '../../data/portfolioData'
import Project from './Project'

export default class ProjectList extends Component {
    state = {
        projects:portfolioData,
        radios: [
            {id: 1, value: "javascript"},
            {id: 2, value: "css"},
            {id: 3, value: "react"},
            {id: 4, value: "php"}
        ],
        selectedRadio: 'javascript'
    };

    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({selectedRadio: radio})
    }

    render() {
        let {projects} = this.state;


        return (
      <div className="portfolioContent">
            <div className="projects">
                {
                projects.map(item => {
                    
                    return (
                        <Project 
                        key={item.id}
                        item={item}
                        />
                    )
                })
                }
            </div>
      </div>
    );
  }
}
