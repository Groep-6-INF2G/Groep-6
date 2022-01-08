// ./PublicRoute.jsx

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/HomePage';
import Information from '../pages/Information';
import Locations from '../pages/Locations';
import Login from '../pages/Login'
import LoggedIn from '../pages/LoggedIn'
import LoggedOut from '../pages/LoggedOut'

const PublicRoute = () => {

    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/Informatie' component={Information}></Route>
            <Route exact path='/Locaties' component={Locations}></Route>
            <Route exact path='/Inloggen' component={Login}></Route>
            <Route exact path='/Ingelogd' component={LoggedIn}></Route>
            <Route exact path='/Uitloggen' component={LoggedOut}></Route>
        </Switch>
    )
}

export default PublicRoute;