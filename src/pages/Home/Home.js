/**
 * Created by ansarimofid on 24/08/17.
 */
import React from 'react'
import ProjectList from '../../components/ProjectCards/ProjectList'

import './Home.css'

const Home = ()=>(
  <div className="home">
      <div className="hero-wrapper uk-text-center">
          <div className="hero-container uk-container">
              <div className="title-deco hero-title color-primary gradient-text">
                  Hello World
              </div>
              <div className="intro uk-text-bold uk-margin-small-left">I'm <span className="color-primary">Mofid Ansari</span></div>
              <div className="info uk-margin-small-top uk-margin-small-left">I’m <span className="color-primary uk-text-bold">UI Designer</span> and currently 4th year student at IIIT Vadodara</div>
          </div>
      </div>
      <div className="project-list">
            <ProjectList/>
      </div>
  </div>
);

export default Home
