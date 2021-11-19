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


class Information extends React.Component {
    render() {
        const meeneemlist =
            [
                {
                    image: { goal }
                },
                {
                    image: { info }
                }
            ]
        return (
            <div class="container">

                <Collapsible src={syringe} vid={video1} classname="Icons" />

                <Collapsible src={corona} pic={coronamaatregels} classname='Icons' multipleImages={false} />

                <Collapsible src={meenemen} pic={passport} classname='Icons' multipleImages={true}  list={meeneemlist}  />
            </div>


        )
       
    }
}

export default Information;
