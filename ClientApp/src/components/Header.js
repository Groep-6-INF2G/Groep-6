import React from "react";
import "../styles/header.css";
import { Link } from 'react-router-dom';
import logo from '../assets/images/Star-shlColour.png'
import login from '../assets/images/login.png'
import logout from '../assets/images/logout.png'
import IsAuthenticated from './isAuthenticated'
import logOut from './LoggedOut'

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = { isAuth: false };

        IsAuthenticated().then((res) => {
            if (res === 200) {
                this.setState({isAuth:true})
            }
        })
    }
    
    render() {
        if (this.state.isAuth)
            return (
                <div className="header">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="Startpagina" /></Link>
                    </div>
                    <div className="login-button">
                        <button onClick={ logOut }> <img src={logout} alt="Uitloggen" /></button>
                    </div>
                </div>
            )
        else
            return (
            <div className="header">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="Startpagina" /></Link>
                    </div>
                    <div className="login-button">
                        <Link to="/Inloggen"><img src={login} alt="Inloggen" /></Link>
                    </div>
            </div>
        )
    }
}
