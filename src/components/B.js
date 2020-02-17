import React, { Component, Fragment } from 'react';
import d from './D';

@d
class B extends Component {
  render() {
    return (
      <Fragment>
        <h1>This is Component B</h1>
        <div>My name is {this.props.name}.</div>
        <div> My age is {this.props.age}.</div>
        <div> My gender is {this.props.sex}.</div>
      </Fragment>
    );
  }
}

export default B;
