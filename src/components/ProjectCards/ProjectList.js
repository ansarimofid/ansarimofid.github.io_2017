/**
 * Created by ansarimofid on 26/08/17.
 */
import React, {Component} from 'react';
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
    for (let i = 0; i < ProjectDataArr.length; i++) {
      cardArray.push(<ProjectCard key={i} cardData={ProjectDataArr[i]}/>);
    }

    return cardArray;
  }

  render() {

    return (
      <div className="uk-container uk-text-center projects">
        <div className="uk-grid">
          {this.getProjectCards()}
        </div>
        <a href="https://www.behance.net/ansarimofid" target="blank"
           className="more-project uk-margin-small-top uk-button uk-button-line">
          View more projects
        </a>
        <div className="uk-padding-small"></div>
      </div>
    )
  }
}

export default ProjectList;
