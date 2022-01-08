import React from "react";
import "../styles/navbar.css";
import { Link } from 'react-router-dom';
import home from '../assets/images/home-page.png'
import info from '../assets/images/info.png'
import map from '../assets/images/goal.png'
import Cookies from 'js-cookie'

class NavBar extends React.Component {

    render () {
        return (
            <div className="navbar">
                <nav>
                    <ul>
                        <li><Link to={Cookies.get('id') === undefined || Cookies.get('id') === null ? "/" : "/HomeEditor"}><img src={home} alt="Startpagina" /></Link></li>
                        <li><Link to="/Informatie"><img src={info} alt="Informatie"/></Link></li>
                        <li><Link to="/Locaties"><img src={map} alt="Locaties"/></Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar;