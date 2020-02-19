import React, { PureComponent } from 'react';
import inheritance from './inheritance_hoc';

@inheritance
class Inheritance_1 extends PureComponent {
  componentWillMount() {
    console.log('I am componentWillMount from component');
  }
  render() {
    return <div>I am a DIV</div>;
  }
}

export default Inheritance_1;
