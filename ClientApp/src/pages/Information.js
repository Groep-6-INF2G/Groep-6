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
    constructor() {
        super();
        this.state = {
            pagedata: []
        }
    }
    async componentDidMount() {
        let htmlPageData;
        const page = await fetch("api/wysiwyg?id=2", {
            method: "GET",
            headers: { 'Accept': 'apllication/json', 'Content-Type': 'application/json' },
        }).then(response => response.json())
            .then(response => {
                htmlPageData = response
                htmlPageData.sort((a, b) => parseFloat(a.sectionid) - parseFloat(b.sectionid));
                console.log(htmlPageData)
            }
            )
        this.setState({
            pagedata: htmlPageData
        });
        console.log(this.state.pagedata)
    }

    render() {
        if (this.state.pagedata[0] === null || this.state.pagedata[0] === undefined) {
            return null
        }
        else {
            return (
                <div className="container">

                    <Collapsible src={syringe} className="Icons" title="Bloed prikken">
                        <div>

                            <Collapsible title="Wat is het doel van bloedprikken?">
                                <div dangerouslySetInnerHTML={{ __html: this.state.pagedata[0].sectiondata }}></div>
                            </Collapsible>

                            <Collapsible title="Voorbereiding">
                                <div dangerouslySetInnerHTML={{ __html: this.state.pagedata[1].sectiondata }}></div>
                            </Collapsible>

                            <Collapsible title="Verloop onderzoek">
                                <div dangerouslySetInnerHTML={{ __html: this.state.pagedata[2].sectiondata }}></div>
                            </Collapsible>

                            <Collapsible title="Doorlooptijden en uitslag">
                                <div dangerouslySetInnerHTML={{ __html: this.state.pagedata[3].sectiondata }}></div>
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
}
