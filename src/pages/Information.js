import React from "react";
import syringe from '../../src/assets/images/syringe.png';
import Collapsible from "../components/Collapsible";
import video1 from "../../src/assets/videos/Wat gebeurt er met mijn bloed_.mp4";
import corona from '../../src/assets/images/corona.png';
import coronamaatregels from '../../src/assets/images/coronamaatregels.jpg';
import '../styles/information.css';

class Information extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="title">
                    <h1>Information</h1>
                </div>
                <b>Let op: In verband met het Coronavirus werken we voor bloedafname met geplande afspraken. Dit is om te voorkomen dat er te veel patiënten tegelijk in de wachtruimte zijn. U kunt hier online een afspraak maken voor bloedafname.</b>
                <h2>Voorbereiding</h2>
                <p style={{margin: 0}} class="paragraf">Wat je moet meenemen:</p>
                <span class="paragraf">- Aanvraagformulier<br/>- Verzekeringspas<br/>- Identiteitsbewijs </span>
                <Collapsible  src={syringe} video={video1} classname="Icons"/>     
                
                <Collapsible  src={corona}  picture={coronamaatregels}  classname='Icons' />      
            </div>
        )
       
    }
}

export default Information;