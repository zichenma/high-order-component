import React, { Component, Fragment } from 'react';
import A from './A';


class B extends Component {
    render() {
        return (<Fragment>
            <h1>This is Component B</h1>
        </Fragment>)
    }
}


export default A(B);