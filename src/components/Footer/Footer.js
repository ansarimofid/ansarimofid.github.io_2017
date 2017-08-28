/**
 * Created by ansarimofid on 24/08/17.
 */
import React from 'react'

import './Footer.css'

const Footer = () => (
  <div className="uk-container uk-margin-medium-top uk-margin-medium-bottom">
    <footer className="uk-text-center">
      <ul className="uk-navbar-nav uk-flex-inline">
        <li><a href="https://www.behance.net/ansarimofid" className="uk-icon-button" is uk-icon="icon: behance" target="blank"></a></li>
        <li><a href="https://dribbble.com/ansarimofid" className="uk-icon-link" is uk-icon="icon:  dribbble" target="blank"></a></li>
        <li><a href="https://www.linkedin.com/in/ansarimofid/" className="uk-icon-link" is uk-icon="icon: linkedin" target="blank"></a></li>
        <li><a href="https://twitter.com/ansarimofid_" className="uk-icon-link" is uk-icon="icon: twitter" target="blank"></a></li>
      </ul>
    </footer>
  </div>
);

export default Footer