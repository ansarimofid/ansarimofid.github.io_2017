/**
 * Created by ansarimofid on 26/08/17.
 */
import React, { Component } from 'react';
import ProjectCard from './ProjectCard'
import ProjectData from '../../data/ProjectData'

const ProjectDataArr = ProjectData;

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
