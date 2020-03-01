// react snippets: rcc
// will create react component

import React, { Component, Fragment } from 'react';

function A(WrapperComponent) {
  return class A extends Component {
    render() {
      return (
        <Fragment>
          <h1>/* This is HOC A */</h1>
          <WrapperComponent></WrapperComponent>
        </Fragment>
      );
    }
  };
}

export default A;
