import React, { Component } from 'react';
import login from '../assets/images/login.png'

export default class LoginLogout extends Component {
    render() {
        let button = <Link to="/Inloggen"><img src={login} alt="Inloggen" /></Link>;
        let cookie = Cookies.get('id');
        if (cookie != undefined || )
        return {
            {button}
        }
    }
}
