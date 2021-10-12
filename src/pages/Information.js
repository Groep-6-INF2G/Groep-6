import React from "react";
import syringe from '../../src/assets/images/syringe.png';
import Collapsible from "../components/Collapsible";
import "../styling/style.css"
import video1 from "../../src/assets/videos/Wat gebeurt er met mijn bloed_.mp4";

class Information extends React.Component {
    render() {
        return (
            <Collapsible src={syringe} video={video1} classname="Syringe"/>      

        )
       
    }
}

export default Information;