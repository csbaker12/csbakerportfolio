import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Header from './components/nav/header';
// import Connect from './components/connect';
import Education from './components/education';
import Projects from './components/projects';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Route path='/connect' component={Connect} /> */}
          <Route path='/education' component={Education} />
          <Route path='/projects' component={Projects} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
