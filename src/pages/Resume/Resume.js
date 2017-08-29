/**
 * Created by ansarimofid on 24/08/17.
 */
import React from 'react'

import './resume.css'

const Resume = () => (
  <div className="uk-container resume uk-text-left uk-margin-large-top uk-margin-large-bottom">
    <div is uk-grid>
      <div className="uk-width-1-6@s uk-width-1-6@m"></div>
      <div className="uk-width-2-3@s uk-width-2-3@m">
        <h2 className="page-title uk-text-bold uk-text-uppercase color-grey-54">Resume</h2>

        {/*About*/}
        <section className="about uk-margin-large-top">
          <h4 className="title-deco">About</h4>
          <p>Hi, I’m <span className="color-primary">Mofid Ansari</span>, a self taught <span className="color-primary">UI Designer</span>  final year Undergrad student from IIIT Vadodara. I started with developing websites and eventually the designing component caught my Imagination which encouraged me to explore it more seriously from a professional perspective. Since last 2 years, I’ve been exploring, learning and creating as much as I can to evolve as a better designer.</p>
        </section>

        {/*Skills*/}
        <section className="skills uk-margin-large-top">
          <h4 className="title-deco">Skills</h4>
          <div is uk-grid>
            <div className="uk-width-1-2@m">
              <div className="h5 section-subtitle">Core Skills</div>
              <div className="core-skills-list uk-flex uk-flex-wrap uk-margin-small-top">
                <div className="core-skill circle-text-container">Web Design</div>
                <div className="core-skill circle-text-container">Photoshop</div>
                <div className="core-skill circle-text-container">Sketch</div>
                <div className="core-skill circle-text-container">Material Design</div>
                <div className="core-skill circle-text-container">HTML & CSS</div>
              </div>
            </div>
            <div className="uk-width-1-2@m">
              <div className="h5 section-subtitle">Other Skills</div>
              <div className="other-skills-list  uk-flex uk-flex-wrap uk-margin-small-top">
                <div className="other-skill">UX</div>
                <div className="other-skill">Graphic Design</div>
                <div className="other-skill">Illustration</div>
                <div className="other-skill">Color Theory</div>
                <div className="other-skill">Typography</div>
                <div className="other-skill">Github</div>
                <div className="other-skill">JavaScript</div>
                <div className="other-skill">jQuery</div>
                <div className="other-skill">Ajax</div>
                <div className="other-skill">NodeJs</div>
                <div className="other-skill">ReactJS</div>
                <div className="other-skill">Wordpress</div>
              </div>
            </div>
          </div>
        </section>

        {/*Education*/}
        <section className="edu uk-margin-large-top">
          <h4 className="title-deco">Education</h4>
          <div className="edu-list">

            <div className="edu-item uk-flex">
              <div className="year uk-margin-small-right"><span>2018</span></div>
              <div className="edu-info">
                <div className="degree text-medium">Bachelor of Technology (B.Tech), Information Technology</div>
                <div className="inst-name text-size-14 color-grey-38">INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, VADODARA</div>
                <div className="grade text-size-14">
                  <span className="text-medium">CGPA:</span> 7.91/10
                </div>
              </div>
            </div>

            <div className="edu-item uk-flex">
              <div className="year uk-margin-small-right"><span>2014</span></div>
              <div className="edu-info">
                <div className="degree text-medium">XII (Senior Secondary), Science</div>
                <div className="inst-name text-size-14 color-grey-38">CBSE Board (RLB Memorial Senior Secondary School, Lucknow)</div>
                <div className="grade text-size-14">
                  <span className="text-medium">Percentage :</span> 94.00%
                </div>
              </div>
            </div>

            <div className="edu-item uk-flex">
              <div className="year uk-margin-small-right"><span>2012</span></div>
              <div className="edu-info">
                <div className="degree text-medium">X (Secondary)</div>
                <div className="inst-name text-size-14 color-grey-38">CBSE Board (Christ Jyoti Senior Secondary School)</div>
                <div className="grade text-size-14">
                  <span className="text-medium">CGPA:</span> 10.00/10.00
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Experience*/}
        <section className="edu uk-margin-large-top">
          <h4 className="title-deco">Experience</h4>
          <div className="exp-list">

            <div className="exp-item">
              <div className="position text-medium">Web Developer</div>
              <div className="inst-name text-size-14 color-grey-38">SECUREITLAB</div>
              <div className="time text-size-14">May 2016 - Sep 2016</div>
            </div>

          </div>
        </section>

        {/*Hoby*/}
        <section className="edu uk-margin-large-top">
          <h4 className="title-deco">Interest & Hobbies</h4>
          <div className="hobby-list uk-flex uk-flex-wrap">

            <div className="hobby-item circle-text-container">Music</div>
            <div className="hobby-item circle-text-container">Books</div>
            <div className="hobby-item circle-text-container">Anime</div>
            <div className="hobby-item circle-text-container">Travel</div>
          </div>
          <div className="uk-padding-small"></div>
        </section>
      </div>
    </div>
  </div>
);

export default Resume
