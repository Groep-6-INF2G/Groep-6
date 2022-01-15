import React from "react";
import syringe from '../../src/assets/images/syringe.png';
import Collapsible from "../components/Collapsible";
import video1 from "../../src/assets/videos/Wat gebeurt er met mijn bloed_.mp4";
import corona from '../../src/assets/images/corona.png';
import coronamaatregels from '../../src/assets/images/coronamaatregels.jpg';
import '../styles/information.css';
import meenemen from '../../src/assets/images/meenemen.png';
import passport from '../../src/assets/images/passport.png';
import goal from '../../src/assets/images/goal.png';
import info from '../../src/assets/images/info.png';

export default class Information extends React.Component {
    render() {
        return (
            <div className="container">

                <Collapsible src={syringe} className="Icons" title="Bloed prikken">
                    <div>

                        <Collapsible title="Wat is het doel van bloedprikken?">
                            <div>
                                <p>Door bloed te prikken krijg je informatie over jouw lichaam. Met de informatie die wij krijgen kunnen we kijken of jouw organen gezond zijn en goed functioneren.</p>
                            </div>
                        </Collapsible>

                        <Collapsible title="Voorbereiding">
                            <div>
                                <p className="paragraf">Wat je moet meenemen naar het bloedprikken:</p>
                                <ul className="paragraf">
                                    <li>Aanvraagformulier</li>
                                    <li>Verzekeringspas</li>
                                    <li>Identiteitsbewijs</li>
                                </ul>
                            </div>
                        </Collapsible>

                        <Collapsible title="Verloop onderzoek">
                            <div>
                                <p>
                                    De bloedafname vindt plaats terwijl u zit.<br/>
                                    Er word een of meerdere buisjes bloed afgenomen door een medewerker die een prik aan u geeft in de binnenkant van uw elleboog,<br />
                                    Hiervoor krijgt u een zogenaamde stuwband om uw arm.<br />
                                    Tijdens de bloedafname geeft de medewerker aanwijzingen om het onderzoek zo snel en goed mogelijk te laten verlopen.<br />
                                    De bloedafname duurt in de meeste gevallen niet langer dan vijf minuten.<br />
                                    Mogelijk moet u wel even in de wachtkamer zitten voordat u aan de beurt bent.
                                </p>
                            </div>
                        </Collapsible>

                        <Collapsible title="Doorlooptijden en uitslag">
                            <div>
                                <p>
                                    De uitslag van het bloedonderzoek is meestal binnen enkele dagen bekend.<br />
                                    We sturen deze direct door naar uw arts en/of verloskundige.<br />
                                    Hij/zij zal de uitslag hierna met u bespreken.
                                </p>
                            </div>
                        </Collapsible>

                        <Collapsible title="Video">
                            {<video src={video1} width="1024" height="576" controls />}
                        </Collapsible>

                    </div>
                </Collapsible>

                <Collapsible src={meenemen} className="Icons">
                    <div>
                        <Collapsible src={passport}>
                            <div>
                                <img src={syringe} alt="" width="400" height="300" />
                            </div>
                        </Collapsible>
                        <img src={goal} alt="" width="400" height="300" />
                        <img src={info} alt="" width="400" height="300" />
                    </div>
                </Collapsible>

                <Collapsible src={corona} className="Icons">
                    <div>
                        <img src={coronamaatregels} alt="corona maatregels" width="400" height="300" />
                    </div>
                </Collapsible>

            </div>
        )
       
    }
}
