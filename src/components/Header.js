import React from "react";
import "../styles/header.css";
import { Link } from 'react-router-dom';
import logo from '../assets/images/Star-shlColour.png'
import login from '../assets/images/login.png'

class Header extends React.Component {
    render () {
        return (
            <div class="header">
                <div class="logo">
                    <Link to="/"><img src={logo} alt="Startpagina"/></Link>
                </div>
                <div class="login-button">
                    <Link to="/Inloggen"><img src={login} alt="Inloggen"/></Link>
                </div>
            </div>
        )
    }
}

export default Header;