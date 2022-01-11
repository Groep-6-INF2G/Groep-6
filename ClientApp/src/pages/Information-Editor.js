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
import { Editor } from '@tinymce/tinymce-react';


class Information extends React.Component {
    constructor() {
        super();

        this.onSaveContent = this.onSaveContent.bind(this);
        this.state = {
            pagedata:[]
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
                console.log(htmlPageData)
            }
            )
        this.setState({
            pagedata: htmlPageData
        });
        console.log(this.state.pagedata)
    }

    onSaveContent(e, id) {
        let homepageData = {
            sectionid: id,
            sectiondata: e.target.getContent(),
            pageId: 2
        }
        e.preventDefault();
        fetch("api/wysiwyg/Section", {
            method: "POST",
            headers: { 'Accept': 'apllication/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(homepageData)
        })
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
                            <Editor id="1" tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                initialValue={this.state.pagedata[0].sectiondata}
                                init={{
                                    inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                }}
                                onSaveContent={this.onSaveContent}
                            />
                        </Collapsible>

                        <Collapsible title="Voorbereiding">
                            <Editor id="2" tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                initialValue={this.state.pagedata[1].sectiondata}
                                init={{
                                    inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                }}
                                onSaveContent={this.onSaveContent}
                            />
                        </Collapsible>

                        <Collapsible title="Verloop onderzoek">
                            <Editor id="3" tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                initialValue={this.state.pagedata[2].sectiondata}
                                init={{
                                    inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                }}
                                onSaveContent={this.onSaveContent}
                            />
                        </Collapsible>

                        <Collapsible title="Doorlooptijden en uitslag">
                            <Editor id="4" tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                initialValue={this.state.pagedata[3].sectiondata}
                                init={{
                                    inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                }}
                                onSaveContent={this.onSaveContent}
                            />
                        </Collapsible>

                        <Collapsible title="Video">
                            <Editor id="Information" tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                initialValue={'<video src="../../src/assets/videos/Wat gebeurt er met mijn bloed_.mp4" width="1024" height="576" controls />'}
                                init={{
                                    inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                }}
                                onSaveContent={this.onSaveContent}
                            />
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

export default Information;
