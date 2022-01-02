import React from "react";
import { Redirect } from "react-router";

async function callApi() {
   await fetch("api/Logout");
}


export default class LoggedOut extends React.Component {
    render() {
        {callApi()}
        return <Redirect to="/" />
    }   
}