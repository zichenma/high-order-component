import React, { Component, Fragment } from 'react';

function A(WrapperComponent) {
    return class A extends Component {
        render() {
            return (<Fragment>
                <WrapperComponent></WrapperComponent>
            </Fragment>)
        }
    }
}

export default A;