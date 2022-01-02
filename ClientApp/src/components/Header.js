import React from "react";
import "../styles/header.css";
import { Link } from 'react-router-dom';
import logo from '../assets/images/Star-shlColour.png'
import login from '../assets/images/login.png'
import logout from '../assets/images/logout.png'
import Cookies from 'js-cookie'

 function loginOrlogout() {
     const myCookieData = Cookies.get('id');

     if (myCookieData != null){
        return <div className="login-button">
            <Link to="/Uitloggen"><img src={logout} alt="Uitloggen" /></Link>
        </div>
        }
    else {
        return <div className="login-button">
            <Link to="/Inloggen"><img src={login} alt="Inloggen" /></Link>
        </div>
    }
    
}



class Header extends React.Component {
    render () {
        return (
            <div className="header">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="Startpagina"/></Link>
                </div>
                {loginOrlogout()}
            </div>
        )
    }
}

export default Header;