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
                <p class="paragraf">Let op: In verband met het Coronavirus werken we voor bloedafname met geplande afspraken. Dit is om te voorkomen dat er te veel patiënten tegelijk in de wachtruimte zijn. U kunt hier online een afspraak maken voor bloedafname.</p>
                <h2>Wat is het doel van bloedprikken?</h2>
                <p>Door bloed prikken krijg je informatie over je lichaam. Met het informatie die we krijgen kunnen we kijken of je organen gezond zijn en goed functioneren. </p>
                <h2>Voorbereiding</h2>
                <p style={{margin: 0}} class="paragraf">Wat je moet meenemen naar het bloedprikken:</p>
                <span class="paragraf">- Aanvraagformulier<br/>- Verzekeringspas<br/>- Identiteitsbewijs </span>
                <h2>Verloop onderzoek</h2>
                <p>
                    De bloedafname vindt plaats terwijl u zit.
                     Er word één of meerdere buisjes bloed afgenomen door een medewerker die een prik aan de binnenkant van uw elleboog 
                     Om één of meerdere buisjes bloed af te kunnen nemen prikt de medewerker bloedafname aan de binnenkant van uw elleboog in een ader. 
                     Hiervoor krijgt u een zogenaamde stuwband om uw arm. 
                     Tijdens de bloedafname geeft de medewerker aanwijzingen om het onderzoek zo snel en goed mogelijk te laten verlopen. 
                     De bloedafname duurt in de meeste gevallen niet langer dan vijf minuten. 
                     Mogelijk moet u wel even in de wachtkamer zitten voordat u aan de beurt bent.
                </p>
                <h2>Doorlooptijden en uitslag</h2>
                <p>    
                    De uitslag van het bloedonderzoek is meestal binnen enkele dagen bekend. 
                    We sturen deze direct door naar uw arts of verloskundige. 
                    Hij/zij bespreekt de uitslag met u.
                </p>
                <Collapsible  src={syringe} video={video1} classname="Icons"/>     
                <Collapsible  src={corona}  picture={coronamaatregels}  classname='Icons' />      
            </div>
        )
       
    }
}

export default Information;