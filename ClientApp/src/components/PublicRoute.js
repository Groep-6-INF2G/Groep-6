// ./PublicRoute.jsx

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/HomePage';
import Information from '../pages/Information';
import Locations from '../pages/Locations';
import Login from '../pages/Login'
import Verification from '../pages/Verification';


const PublicRoute = () => {

    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Informatie' component={Information}/>
            <Route exact path='/Locaties' component={Locations}/>
            <Route exact path='/Inloggen' component={Login}/>
            <Route exact path='/Verification' component={Verification}/>
        </Switch>
    )
}

export default PublicRoute;