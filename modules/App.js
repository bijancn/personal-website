import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <div id="head">
        <h1><span className="title-highlight">Bijan</span> Chokoufe Nejad</h1>
        <ul role="nav" id="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/physics">Physics</NavLink></li>
        </ul>
        </div>
          {React.cloneElement(this.props.children, {
            key: location.pathname
          })}
      </div>
    )
  }
})
//
        // {this.props.children}
