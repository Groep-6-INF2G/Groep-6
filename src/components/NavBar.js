import React from "react";
import "../styles/navbar.css";
import { Link } from 'react-router-dom';
import home from '../assets/images/home-page.png'
import info from '../assets/images/info.png'
import map from '../assets/images/goal.png'

class NavBar extends React.Component {
    render () {
        return (
            <div class="navbar">
                <nav>
                    <ul>
                        <li><Link to="/"><img src={home} alt="Startpagina"/></Link></li>
                        <li><Link to="/Informatie"><img src={info} alt="Informatie"/></Link></li>
                        <li><Link to="/Locaties"><img src={map} alt="Locaties"/></Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar;