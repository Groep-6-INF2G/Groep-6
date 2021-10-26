import React from "react";
import syringe from '../../src/assets/images/syringe.png';
import Collapsible from "../components/Collapsible";
import "../styling/style.css"
import video1 from "../../src/assets/videos/Wat gebeurt er met mijn bloed_.mp4";
import corona from '../../src/assets/images/corona.png';
import coronamaatregels from '../../src/assets/images/coronamaatregels.jpg';

class Information extends React.Component {
    render() {
        return (
            <div className >
            <Collapsible src={syringe} video={video1} classname="Icons"/>     
            <Collapsible src={corona} picture={coronamaatregels}  classname='Icons' />
            </div>

        )
       
    }
}

export default Information;