import React, { Component, Fragment } from 'react';

function d(WrapperComponent) {
  return class D extends Component {
    render() {
      {
        /* HOC delete prop (age) in the B Component*/
      }
      const { age, ...otherProps } = this.props;
      return (
        <Fragment>
          <h1>/* This is HOC D */</h1>
          {/* HOC added prop (sex) in the B Component*/}
          <WrapperComponent sex={'male'} {...otherProps}></WrapperComponent>
        </Fragment>
      );
    }
  };
}

export default d;
