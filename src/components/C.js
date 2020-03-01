import React, { Component, Fragment } from 'react';
import d from './D';
// import A from './A';

@d
class C extends Component {
  render() {
    return (
      <Fragment>
        <h1>This is Component C</h1>
        <input type='text' {...this.props} />
      </Fragment>
    );
  }
}

export default C;
// export default A(C);
