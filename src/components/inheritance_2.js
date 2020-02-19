import React, { PureComponent } from 'react';
import inheritance from './inheritance_hoc';

@inheritance
class Inheritance_2 extends PureComponent {
  render() {
    return <p>I am a P</p>;
  }
}

export default Inheritance_2;
