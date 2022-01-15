import React from "react";
import '../styles/information.css';

class Locations extends React.Component {
    displayLocations() {
        fetch("api/Locations/")
            .then(response => response.text()) 
    }

    render() {
        return (
            <div className="container">
                <h1>
                    Locaties
                </h1>
                
                <p style={{marginTop:"12px"}}>
                    Hier komt binnenkort een zoekfunctionaliteit om de priklocaties van Star-SHL bij U in de buurt te vinden terecht. Tot dan!
                </p>
            </div>
        )
    }
}

export default Locations;