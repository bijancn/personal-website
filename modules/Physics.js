import React from 'react'
import ReactMarkdown from 'react-markdown'
import input from '../public/physics.md'

export default React.createClass({
  render() {
    return (
      <div dangerouslySetInnerHTML={ {__html: input} } />
    );
  }
});
