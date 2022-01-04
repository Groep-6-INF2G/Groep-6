import React from "react";
import { useState,  useRef } from "react";
import dropdown from '../assets/images/dropdown.png'


function Collapsible(props) {
    //bool to check if the onclickevent happened or not
    const [isOpen, setIsOpen] = useState(false);

    //useRef is used for getting the height of the element content. 
    const parentRef = useRef();


    //let textDiv = <div className="content" > {props.content} </div>;
    //let picDiv = <div className="Picture" >{props.picture}</div>;
    let picturecontent = <img  className="Picture" src={props.picture} alt="" />
    let videocontent = <video className="content" src={props.video} controls="controls" autoPlay="" /> 
    return <div className="collapsible">

    <img src={props.src} alt="" className={props.classname} onClick={() => setIsOpen(!isOpen)} />
    
        <div 
            className= "content-parent" 
            ref={parentRef} 
            style={isOpen ? {
                //The current height of the content when the element is open
                height: parentRef.current.scrollHeight + "px",
                }
                :
                {
                //Else height is 0px
                height: "0px",
                }
            }   
            >
            {props.content !== null ? videocontent : "" }  
            {console.log(props.content)}
            {videocontent = null}
         
            {props.picture !== null  ? picturecontent : "" }
            {console.log(props.picture)}
            
        </div>
        <h2>{props.title}</h2>
        {props.title == "Bloed prikken" && isOpen ?
            <div>
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
                    Er word een of meerdere buisjes bloed afgenomen door een medewerker die een prik aan u geeft in de binnenkant van uw elleboog,
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
                </p>
            </div> : null
        }
        
    </div>
}

export default Collapsible;