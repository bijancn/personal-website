import React from 'react'
import input from '../public/physics.md'

export default React.createClass({
  render() {
    return (
      <div dangerouslySetInnerHTML={ {__html: input} } />
    );
  }
});
