import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/HomePage';
import Information from '../pages/Information';
import Locations from '../pages/Locations';

import "../styling/style.css"

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Informatie' component={Information}></Route>
      <Route exact path='/Locaties' component={Locations}></Route>
    </Switch>
  );
}

export default Main;