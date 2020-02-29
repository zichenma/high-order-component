import React, { Fragment } from 'react';
import './App.css';
import './static/iconfont.css';
// import A from './components/A';
// import B from './components/B';
// import C from './components/C';
// import Inheritance_1 from './components/inheritance_1';
// import Inheritance_2 from './components/inheritance_2';
import RouterMap from './router';
import Tabbar from './components/tabbar';

function App() {
  return (
    <Fragment>
      {/* <A />
      <B name={'Joh Doe'} age={34} />
      <C />
      <Inheritance_1 />
      <Inheritance_2 /> */}
      <RouterMap />
      {/* <Tabbar /> */}
      {/* <div className='iconfont icon-home'></div> */}
    </Fragment>
  );
}

export default App;
