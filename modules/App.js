import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Socials from './Socials.js'

export default React.createClass({
  render() {
    return (
      <div>
        <div id="head">
        <h1><span className="title-highlight">Bijan</span> Chokoufe Nejad</h1>
        <ul role="nav" id="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/physics">Physics</NavLink></li>
          <li><NavLink to="/latex-packages">Latex Packages</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        </div>
        <div id="content">
          {React.cloneElement(this.props.children, {
            key: location.pathname
          })}
        </div>
        <div id="footer">
          <Socials></Socials>
        </div>
      </div>
    )
  }
})
