import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/HomePage';
import Information from '../pages/Information';
import Locations from '../pages/Locations';
import Login from '../pages/Login'
import HomeEdit from '../pages/HomePage-Editor'

const Main = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/Informatie' component={Information}></Route>
        <Route exact path='/Locaties' component={Locations}></Route>
        <Route exact path='/Inloggen' component={Login}></Route>
        <Route exact path='/HomeEditor' component={HomeEdit}></Route>

      </Switch>
    </div>
  );
}

export default Main;