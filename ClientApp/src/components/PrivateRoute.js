// ./PrivateRoute.jsx

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeEdit from '../pages/HomePage-Editor'
import Home from '../pages/HomePage';
import Information from '../pages/Information';
import Locations from '../pages/Locations';
import Login from '../pages/Login'
import LoggedIn from '../pages/LoggedIn'


const PrivateRoute = () => {

    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path="/HomeEditor" component={HomeEdit} />
            <Route exact path='/Informatie' component={Information}></Route>
            <Route exact path='/Locaties' component={Locations}></Route>
            <Route exact path='/Inloggen' component={Login}></Route>
            <Route exact path='/Ingelogd' component={LoggedIn}></Route>
        </Switch>
    )
}

export default PrivateRoute;