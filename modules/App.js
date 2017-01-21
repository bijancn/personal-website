import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children, {
            key: location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
})
//
        // {this.props.children}
