import React from "react";
import "../styles/navbar.css";
import { Link } from 'react-router-dom';
import home from '../assets/images/home-page.png'
import info from '../assets/images/info.png'
import map from '../assets/images/goal.png'
import IsAuthenticated from './isAuthenticated'



class NavBar extends React.Component {
    constructor() {
        super()
        this.state = { isAuth: false };

        IsAuthenticated().then((res) => {
            if (res === 200) {
                this.setState({ isAuth: true })
            }
        })
    }
    render() {
        if (this.state.isAuth) {
            return (
                <div className="navbar">
                    <nav>
                        <ul>
                            <li><Link to="/HomeEditor"><img src={home} alt="Startpagina" /></Link></li>
                            <li><Link to="/Informatie"><img src={info} alt="Informatie" /></Link></li>
                            <li><Link to="/Locaties"><img src={map} alt="Locaties" /></Link></li>
                        </ul>
                    </nav>
                </div>
            )
        }
        else {
            return (
                <div className="navbar">
                    <nav>
                        <ul>
                            <li><Link to="/"><img src={home} alt="Startpagina" /></Link></li>
                            <li><Link to="/Informatie"><img src={info} alt="Informatie" /></Link></li>
                            <li><Link to="/Locaties"><img src={map} alt="Locaties" /></Link></li>
                            
                        </ul>
                    </nav>
                </div>
            )
        }
    }
}

export default NavBar;