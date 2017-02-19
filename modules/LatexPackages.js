import React from 'react'
import input from '../public/latexpackages.md'

export default React.createClass({
  render() {
    return (
      <div dangerouslySetInnerHTML={ {__html: input} } />
    );
  }
});
