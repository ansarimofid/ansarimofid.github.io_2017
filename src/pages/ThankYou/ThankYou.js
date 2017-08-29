/**
 * Created by ansarimofid on 29/08/17.
 */
import React from 'react'
import { NavLink } from 'react-router-dom'

// import './resume.css'

const ThankYou = () => (
  <div className="uk-height-1-1 uk-flex-1 uk-container resume uk-text-left uk-margin-large-top uk-margin-large-bottom">
    <h2 className="uk-text-center">Thank You For Query :)</h2>
    <p className="uk-text-center">Will get back to you ASAP</p>
    <h4 className="uk-text-center">Retun to <NavLink exact to='/' activeClassName="active">Home</NavLink></h4>
  </div>
);

export default ThankYou
