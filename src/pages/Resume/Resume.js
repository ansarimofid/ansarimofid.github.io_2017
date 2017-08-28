/**
 * Created by ansarimofid on 24/08/17.
 */
import React from 'react'

import './resume.css'

const Resume = () => (
  <div className="uk-container resume uk-text-left uk-margin-large-top">
    <div is uk-grid>
      <div className="uk-width-1-6@m"></div>
      <div className="uk-width-2-3@m">
        <h2 className="page-title uk-text-bold uk-text-uppercase color-grey-54">Resume</h2>

        <section className="about uk-margin-large-top">
          <h4 className="title-deco">About</h4>
          <p>Hi, I’m <span className="color-primary">Mofid Ansari</span>. I’m self-taught <span className="color-primary">UI Designer</span> and student from IIIT Vadodara. While creating websites I
            really enjoyed the designing part so I started taking it more seriously. From the last 2 years, I’ve been
            exploring, learning and creating as much as I can to evolve as a better designer.</p>
        </section>

        <section className="skills uk-margin-large-top">
          <h4 className="title-deco">Skills</h4>
          <div is uk-grid>
            <div className="uk-width-1-2@m">
              <div className="h5 section-subtitle">Core Skills</div>
              <div className="core-skills-list uk-flex uk-flex-wrap uk-margin-small-top">
                <div className="core-skill">Web Design</div>
                <div className="core-skill">Photoshop</div>
                <div className="core-skill">Sketch</div>
                <div className="core-skill">Material Design</div>
                <div className="core-skill">Html & CSS</div>
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
                <div className="other-skill">ReactJ</div>
                <div className="other-skill">Wordpress</div>
              </div>
            </div>
          </div>
        </section>

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
      </div>
    </div>
  </div>
);

export default Resume
