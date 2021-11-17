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
                {/* <div className="grid">
                    <div className="grid1">
                        <div className="textAnimation">
                            <p class="paragraf">Let op: </p>
                        </div>
                        <div className="textAnimation">
                            <p class="paragraf"><span>In verband met het Coronavirus werken we voor bloedafname met geplande afspraken. Dit is om te voorkomen dat er te veel patiënten tegelijk in de wachtruimte zijn. U kunt hier online een afspraak maken voor bloedafname.</span>
                            </p>
                        </div>
                    </div>
            </div> */}

                {/*<h1>Informatie</h1>
                <h2>Wat is het doel van bloedprikken?</h2>
                <p>Door bloed te prikken krijg je informatie over jouw lichaam. Met de informatie die wij krijgen kunnen we kijken of jouw organen gezond zijn en goed functioneren.</p>
                <h2>Voorbereiding</h2>
                <p class="paragraf">Wat je moet meenemen naar het bloedprikken:</p>
                <ul class="paragraf">
                    <li>Aanvraagformulier</li>
                    <li>Verzekeringspas</li>
                    <li>Identiteitsbewijs</li>
                </ul>
                <h2>Verloop onderzoek</h2>
                <p>
                    De bloedafname vindt plaats terwijl u zit.
                     Er word één of meerdere buisjes bloed afgenomen door een medewerker die een prik aan u geeft in de binnenkant van uw elleboog,
                     Hiervoor krijgt u een zogenaamde stuwband om uw arm. 
                     Tijdens de bloedafname geeft de medewerker aanwijzingen om het onderzoek zo snel en goed mogelijk te laten verlopen. 
                     De bloedafname duurt in de meeste gevallen niet langer dan vijf minuten. 
                     Mogelijk moet u wel even in de wachtkamer zitten voordat u aan de beurt bent.
                </p>
                <h2>Doorlooptijden en uitslag</h2>
                <p>    
                    De uitslag van het bloedonderzoek is meestal binnen enkele dagen bekend. 
                    We sturen deze direct door naar uw arts en/of verloskundige. 
                    Hij/zij zal de uitslag hierna met u bespreken.
                </p>*/}



                <Collapsible  src={syringe} video={video1} classname="Icons" title="Bloed prikken"/>
                <Collapsible  src={corona}  picture={coronamaatregels}  classname='Icons' title="Mondkapjes plicht"/>      
            </div>
        )
       
    }
}

export default Information;
