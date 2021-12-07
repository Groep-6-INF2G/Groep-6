import React from "react";

export default class LoggedIn extends React.Component {
    render() {

        if (localStorage.getItem('loggedIn') === 'true') {
            return(
            <h1>
                Ingelogd
            </h1>)
        }
        return(null)
    }
}