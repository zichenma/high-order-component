import React, { Component, Fragment } from 'react';

function d(WrapperComponent) {
  return class D extends Component {
    render() {
      return (
        <Fragment>
          <h1>/* This is HOC D */</h1>
          <WrapperComponent></WrapperComponent>
        </Fragment>
      );
    }
  };
}

export default d;
