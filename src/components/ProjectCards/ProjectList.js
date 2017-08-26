/**
 * Created by ansarimofid on 26/08/17.
 */
import React, { Component } from 'react';
import ProjectCard from './ProjectCard'

const ProjectDataArr = [{title:'Minimal Agency Landing Page',tags:['Branding', 'Website', 'Desiging'], thumb:'img/project_1.png', link:'https://www.behance.net/gallery/51678875/Minimal-Digital-Agency-Landing-Page'}];

class ProjectList extends Component {

  constructor(props) {
    super(props);
  }

  getProjectCards() {
    let cardArray = [];
    // Get array of random gradients cards
    for (let i=0;i<ProjectDataArr.length;i++) {
      cardArray.push(<ProjectCard cardData={ProjectDataArr[i]}/>);
    }

    return cardArray;
  }

  render() {

    return(
      <div className="uk-container uk-text-center">
        <div className="uk-grid">
          {this.getProjectCards()}
        </div>
      </div>
    )
  }
}

export default ProjectList;
