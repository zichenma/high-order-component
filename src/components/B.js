import React, { Component, Fragment } from 'react';
import d from './D';

@d
class B extends Component {
  render() {
    return (
      <Fragment>
        <h1>This is Component B</h1>
      </Fragment>
    );
  }
}

export default B;
