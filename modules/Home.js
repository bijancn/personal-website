import React from 'react'
import input from '../public/home.md'

export default React.createClass({
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={ {__html: input} } />
        <i className="fa fa-quora"></i>
        <i className="fa fa-medium"></i>
        <i className="fa fa-facebook"></i>
        <i className="fa fa-xing"></i>
        <i className="fa fa-linkedin"></i>
        <i className="fa fa-bitbucket"></i>
        <i className="fa fa-github"></i>
        <i className="fa fa-skype"></i>
        <i className="fa fa-spotify"></i>
      </div>
    );
  }
});
