import React, { Fragment } from 'react';
import './App.css';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import Inheritance_1 from './components/inheritance_1';
import Inheritance_2 from './components/inheritance_2';

function App() {
  return (
    <Fragment>
      <A />
      <B name={'Joh Doe'} age={34} />
      <C />
      <Inheritance_1 />
      <Inheritance_2 />
    </Fragment>
  );
}

export default App;
