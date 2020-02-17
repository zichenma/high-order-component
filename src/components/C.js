import React, { Component, Fragment } from 'react';
import A from './A';


class C extends Component {
    render() {
        return (<Fragment>
             <h1>This is Component C</h1>
        </Fragment>)
    }
}


export default A(C);