import React from 'react'
import input from '../public/home.md'

export default React.createClass({
  render() {
    return (
      <div dangerouslySetInnerHTML={ {__html: input} } />
    );
  }
});
