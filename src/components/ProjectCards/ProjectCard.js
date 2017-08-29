/**
 * Created by ansarimofid on 26/08/17.
 */
import React, {Component} from 'react';

import './ProjectCard.css'

class ProjectCard extends Component {

  render() {
    const imgUrl = require('../../'+this.props.cardData.thumb);
    return (
      <div className="uk-width-1-2@s uk-width-1-3@m uk-margin-medium-top project-card">
        <div className="uk-card uk-card-default">
          <a href={this.props.cardData.link} className="uk-card-media-top uk-overflow-hidden"  target="blank">
            <img src={imgUrl} alt={this.props.cardData.title}/>
            <div className="img-overlay"></div>
          </a>
          <div className="uk-card-body">
            <h3 className="uk-card-title uk-text-bold">{this.props.cardData.title}</h3>
            <div className="tags">
              {this.props.cardData.tags.map((tag,index)=>{return <span key={index}>{tag}</span>})}
            </div>
            <div className="uk-margin-small-top"><a href={this.props.cardData.link} className="uk-button uk-button-line" target="blank">View Project</a></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard;