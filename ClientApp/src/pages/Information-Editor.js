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
import { Editor } from '@tinymce/tinymce-react';


export default class InfoEditor extends React.Component {
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
                htmlPageData.sort((a, b) => parseFloat(a.sectionid) - parseFloat(b.sectionid));
                console.log(htmlPageData)
            }
            )
        this.setState({
            pagedata: htmlPageData
        });
        console.log(this.state.pagedata)
    }

    onSaveContent(id, e) {
        let homepageData = {
            sectionid: id,
            sectiondata: e.target.getContent(),
            pageId: 2
        }
        e.preventDefault();
        fetch("api/wysiwyg/section", {
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
                    <Collapsible src={syringe} className="Icons" title="Bloedafname">
                        <div>

                            <Collapsible title="Wat is het doel van bloedafname?">

                                <div className="text">
                                    <BiBody color="#79b9d5" fontSize="35px" />
                                    <Editor tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                        initialValue={this.state.pagedata[0].sectiondata}
                                        init={{
                                            inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                        }}
                                        onSaveContent={(e) => this.onSaveContent(1, e)}
                                    />
                                </div>
                            </Collapsible>

                            <Collapsible title="Voorbereiding">
                                <div>
                                    <div className="text">
                                        <BsCalendarCheck color="#79b9d5" fontSize="35px" />
                                        <Editor tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                            initialValue={this.state.pagedata[1].sectiondata}
                                            init={{
                                                inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                            }}
                                            onSaveContent={(e) => this.onSaveContent(2, e)}
                                        />
                                    </div>
                                    <div className="text">
                                        <RiFileTextLine color="#79b9d5" fontSize="35px" />
                                        <Editor tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                            initialValue={this.state.pagedata[2].sectiondata}
                                            init={{
                                                inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                            }}
                                            onSaveContent={(e) => this.onSaveContent(3, e)}
                                        />
                                    </div>

                                    <div className="text">
                                        <BsCreditCard color="#79b9d5" fontSize="35px" />
                                        <Editor tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                            initialValue={this.state.pagedata[3].sectiondata}
                                            init={{
                                                inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                            }}
                                            onSaveContent={(e) => this.onSaveContent(4, e)}
                                        />

                                    </div>

                                    <div className="text">
                                        <AiOutlineIdcard color="#79b9d5" fontSize="35px" />
                                        <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                            initialValue={this.state.pagedata[4].sectiondata}
                                            init={{
                                                inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                            }}
                                            onSaveContent={(e) => this.onSaveContent(5, e)}
                                        />
                                    </div>
                                </div>
                            </Collapsible>

                            <Collapsible title="Verloop onderzoek">
                                <div>
                                    <div className="text">
                                        <MdOutlineChairAlt color="#79b9d5" fontSize="35px" />
                                        <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                            initialValue={this.state.pagedata[5].sectiondata}
                                            init={{
                                                inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                            }}
                                            onSaveContent={(e) => this.onSaveContent(6, e)}
                                        />
                                    </div>
                                    <div className="text">
                                        <GiBandageRoll color="#79b9d5" fontSize="35px" />
                                        <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                            initialValue={this.state.pagedata[6].sectiondata}
                                            init={{
                                                inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                            }}
                                            onSaveContent={(e) => this.onSaveContent(7, e)}
                                        />
                                    </div>
                                    <div className="text">
                                        <BsChatText color="#79b9d5" fontSize="35px" />
                                        <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                            initialValue={this.state.pagedata[7].sectiondata}
                                            init={{
                                                inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                            }}
                                            onSaveContent={(e) => this.onSaveContent(8, e)}
                                        />
                                    </div>
                                    <div className="text">
                                        <IoIosTimer color="#79b9d5" fontSize="35px" />
                                        <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                            initialValue={this.state.pagedata[8].sectiondata}
                                            init={{
                                                inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                            }}
                                            onSaveContent={(e) => this.onSaveContent(9, e)}
                                        />
                                    </div>
                                </div>
                            </Collapsible>

                            <Collapsible title="Doorlooptijden en uitslag">
                                <div>
                                    <div className="text">
                                        <AiOutlineFieldTime color="#79b9d5" fontSize="35px" />
                                        <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                            initialValue={this.state.pagedata[9].sectiondata}
                                            init={{
                                                inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                            }}
                                            onSaveContent={(e) => this.onSaveContent(10, e)}
                                        />
                                    </div>
                                    <div className="text">
                                        <BiPlusMedical color="#79b9d5" fontSize="35px" />
                                        <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                            initialValue={this.state.pagedata[10].sectiondata}
                                            init={{
                                                inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                            }}
                                            onSaveContent={(e) => this.onSaveContent(11, e)}
                                        />
                                    </div>
                                    <div className="text">
                                        <BsTelephoneInbound color="#79b9d5" fontSize="35px" />
                                        <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                            initialValue={this.state.pagedata[11].sectiondata}
                                            init={{
                                                inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                            }}
                                            onSaveContent={(e) => this.onSaveContent(12, e)}
                                        />
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
                                <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                    initialValue={this.state.pagedata[12].sectiondata}
                                    init={{
                                        inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                    }}
                                    onSaveContent={(e) => this.onSaveContent(13, e)}
                                />
                            </div>
                        </Collapsible>
                        <Collapsible title="Voorbereiding">
                            <div>
                                <div className="text">
                                    <GiMasonJar color="#79b9d5" fontSize="35px" />
                                    <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                        initialValue={this.state.pagedata[13].sectiondata}
                                        init={{
                                            inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                        }}
                                        onSaveContent={(e) => this.onSaveContent(14, e)}
                                    />
                                </div>
                                <div className="text">
                                    <BiTestTube color="#79b9d5" fontSize="35px" />
                                    <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                        initialValue={this.state.pagedata[14].sectiondata}
                                        init={{
                                            inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                        }}
                                        onSaveContent={(e) => this.onSaveContent(15, e)}
                                    />
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
                                    <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                        initialValue={this.state.pagedata[15].sectiondata}
                                        init={{
                                            inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                        }}
                                        onSaveContent={(e) => this.onSaveContent(16, e)}
                                    />
                                </div>
                                <div className="text">
                                    <BiPlusMedical color="#79b9d5" fontSize="35px" />
                                    <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                        initialValue={this.state.pagedata[16].sectiondata}
                                        init={{
                                            inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                        }}
                                        onSaveContent={(e) => this.onSaveContent(17, e)}
                                    />
                                </div>
                                <div className="text">
                                    <BsTelephoneInbound color="#79b9d5" fontSize="35px" />
                                    <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                        initialValue={this.state.pagedata[17].sectiondata}
                                        init={{
                                            inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                        }}
                                        onSaveContent={(e) => this.onSaveContent(18, e)}
                                    />
                                </div>

                            </div>
                        </Collapsible>

                    </Collapsible>

                    <Collapsible src={corona} className="Icons" className="Icons" title="Coronamaatregelen">
                        <div className="text">
                            <MdSocialDistance color="#79b9d5" fontSize="35px" />
                            <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                initialValue={this.state.pagedata[18].sectiondata}
                                init={{
                                    inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                }}
                                onSaveContent={(e) => this.onSaveContent(19, e)}
                            />
                        </div>
                        <div className="text">
                            <RiSurgicalMaskLine color="#79b9d5" fontSize="35px" />
                            <Editor  tinymceScriptSrc={'tinymce/tinymce.min.js'}
                                initialValue={this.state.pagedata[19].sectiondata}
                                init={{
                                    inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                                }}
                                onSaveContent={(e) => this.onSaveContent(20, e)}
                            />
                        </div>
                    </Collapsible>


                </div>
            )

        }
    }
}


