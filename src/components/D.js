import React, { Component, Fragment } from 'react';

function d(WrapperComponent) {
  return class D extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
    }

    // instance is the instance of WrapperComponent
    refc(instance) {
      // console.log(instance); =>  B {...}
      // instance.getName() && alert(instance.getName());
    }

    onInputChange = e => {
      this.setState({
        ...this.state,
        value: e.target.value
      });
    };

    render() {
      {
        /* HOC delete prop (age) in the B Component*/
      }
      const { age, ...otherProps } = this.props;
      // get the state from the wrapped component (child component)
      const newProps = {
        value: this.state.value,
        onChange: this.onInputChange
      };
      return (
        <Fragment>
          <h1>/* This is HOC D */</h1>
          {/* HOC added prop (sex) in the B Component*/}
          <WrapperComponent
            sex={'male'}
            {...otherProps}
            // Pros: can get all functions and DOMs of wrappered component
            // Cons: using ref is risky
            ref={this.refc.bind(this)}
            {...newProps}
          ></WrapperComponent>
        </Fragment>
      );
    }
  };
}

export default d;
