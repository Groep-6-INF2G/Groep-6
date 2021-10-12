import React from "react";
import syringe from '../../src/assets/images/syringe.png';
import Collapsible from "../components/Collapsible";
import "../styling/style.css"

class Information extends React.Component {
    render() {
        return (
            <Collapsible src={syringe} content="test" classname="Syringe"/>             
        )
       
    }
}

export default Information;