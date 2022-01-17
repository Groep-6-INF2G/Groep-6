import React from "react";
import syringe from '../../src/assets/images/syringe.png';
import Collapsible from "../components/Collapsible";
import video1 from "../../src/assets/videos/Wat gebeurt er met mijn bloed_.mp4";
import corona from '../../src/assets/images/corona.png';
import urine from '../../src/assets/images/urine.png';
import verloopOnderzoek from '../../src/assets/images/verloopOnderzoek.png';
import '../styles/information.css';
import { MdOutlineChairAlt, MdSocialDistance } from 'react-icons/md';
import { BiBody, BiPlusMedical, BiTestTube } from 'react-icons/bi';
import { AiOutlineIdcard, AiOutlineFieldTime } from 'react-icons/ai';
import { BsCreditCard, BsChatText, BsCalendarCheck, BsTelephoneInbound } from 'react-icons/bs';
import { RiFileTextLine, RiSurgicalMaskLine } from 'react-icons/ri';
import { GiBandageRoll, GiMasonJar } from 'react-icons/gi';
import { IoIosTimer } from 'react-icons/io';




export default class Information extends React.Component {
    render() {
        return (
            <div className="container">

                <Collapsible src={syringe} className="Icons" title="Bloedafname">
                    <div>

                        <Collapsible title="Wat is het doel van bloedafname?">

                                <div className="text">
                                    <BiBody color="#79b9d5" fontSize="35px" />
                                    <p> - Informatie over uw lichaam </p>
                                </div> 
                        </Collapsible>

                        <Collapsible title="Voorbereiding">
                            <div>
                                <div className="text">
                                    <BsCalendarCheck color="#79b9d5" fontSize="35px" />
                                    <p> - Afspraak telefonisch of online plannen </p>
                                </div>
                                    <div className="text">
                                        <RiFileTextLine color="#79b9d5" fontSize="35px"/>
                                        <p> - Verwijzing van uw zorgverlener meenemen </p>
                                </div>

                                    <div className="text">
                                         <BsCreditCard color="#79b9d5" fontSize="35px" />
                                        <p> - Verzekeringspas meenemen</p>
                                       
                                </div>

                                    <div className="text">
                                        <AiOutlineIdcard color="#79b9d5" fontSize="35px" />
                                        <p> - Identiteitsbewijs meenemen</p>
                                    </div>
                                </div>
                        </Collapsible>

                        <Collapsible title="Verloop onderzoek">
                            <div>
                                <div className="text">
                                    <MdOutlineChairAlt color="#79b9d5" fontSize="35px" />
                                    <p> - Zittend bloedafname </p>
                                </div>
                                <div className="text">
                                    <GiBandageRoll color="#79b9d5" fontSize="35px" />
                                    <p> - Voorzien van een stuwband </p>
                                </div>
                                <div className="text">
                                    <BsChatText color="#79b9d5" fontSize="35px" />
                                    <p> - Volg de aanwijzingen van de medewerker </p>
                                </div>
                                <div className="text">
                                    <IoIosTimer color="#79b9d5" fontSize="35px" />
                                    <p> - Maximaal 5 minuten </p>
                                </div>
                            </div>
                        </Collapsible>

                        <Collapsible title="Doorlooptijden en uitslag">
                            <div>
                                <div className="text">
                                    <AiOutlineFieldTime color="#79b9d5" fontSize="35px" />
                                    <p> - Uitslag binnen enkele dagen</p>
                                </div>
                                <div className="text">
                                    <BiPlusMedical color="#79b9d5" fontSize="35px" />
                                    <p> - Direct toegestuurd naar uw arts of verloskundige</p>
                                </div>
                                <div className="text">
                                    <BsTelephoneInbound color="#79b9d5" fontSize="35px" />
                                    <p> - De arts of verloskundige neemt contact met u op</p>
                                </div>

                            </div>
                        </Collapsible>

                        <Collapsible title="Wat gebeurt er met mijn bloed?">
                            {<video src={video1} width="1024" height="576" controls />}
                        </Collapsible>

                    </div>
                </Collapsible>

                <Collapsible src={urine} className="Icons" className="Icons" title="Urineonderzoek">
                    <Collapsible title="Wat is het doel van het onderzoek?">
                        <div className="text">
                            <BiBody color="#79b9d5" fontSize="35px" />
                            <p> - Informatie over uw gezondheid </p>
                        </div>
                    </Collapsible>
                    <Collapsible title="Voorbereiding">
                        <div>
                            <div className="text">
                                <GiMasonJar color="#79b9d5" fontSize="35px" />
                                <p> - Urinepotje ontvangen van zorgverlener</p>
                            </div>
                            <div className="text">
                                <BiTestTube color="#79b9d5" fontSize="35px" />
                                <p> - Urinebuisje ontvangen van zorgverlener </p>
                            </div>
                        </div>
                    </Collapsible>

                    <Collapsible title="Verloop onderzoek">
                        <div>
                            <img src={verloopOnderzoek} className="Picture" alt="verloop urineonderzoek" />
                        </div>
                    </Collapsible>

                    <Collapsible title="Doorlooptijden en uitslag">
                        <div>
                            <div className="text">
                                <AiOutlineFieldTime color="#79b9d5" fontSize="35px" />
                                <p> - Uitslag na enkele dagen tot aan een week</p>
                            </div>
                            <div className="text">
                                <BiPlusMedical color="#79b9d5" fontSize="35px" />
                                <p> - Direct toegestuurd naar uw huisarts</p>
                            </div>
                            <div className="text">
                                <BsTelephoneInbound color="#79b9d5" fontSize="35px" />
                                <p> - De arts neemt contact met u op</p>
                            </div>

                        </div>
                    </Collapsible>

                </Collapsible>

                <Collapsible src={corona} className="Icons" className="Icons" title="Coronamaatregelen">
                    <div className="text">
                        <MdSocialDistance color="#79b9d5" fontSize="35px" />
                        <p> - 1.5m afstand </p>
                    </div>
                    <div className="text">
                        <RiSurgicalMaskLine color="#79b9d5" fontSize="35px" />
                        <p> - Mondkapje verplicht </p>
                        </div>
                </Collapsible>

            </div>
        )
       
    }
}
