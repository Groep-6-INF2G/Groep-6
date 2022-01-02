import React from "react";
import { Redirect } from "react-router";
import Cookies from 'js-cookie'



export default class LoggedOut extends React.Component {
    render() {
        Cookies.remove('id', {path: '../pages/Login'});
        return <Redirect to="/" />
    }   
}