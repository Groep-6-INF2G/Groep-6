import React from "react"
import '../styles/homepage.css';
import { MdOutlineLocationOn } from 'react-icons/md';
import { GiTestTubes } from 'react-icons/gi';
import { BsArrowRightShort } from 'react-icons/bs';
import { Editor } from '@tinymce/tinymce-react';

export default class HomePageEditor extends React.Component {
    constructor() {
        super();

        this.onSaveContent = this.onSaveContent.bind(this);
      
        this.state = {
            pagedata: undefined
        }
    }

    async componentDidMount() {
        let htmlPageData;
        const page = await fetch("api/wysiwyg?id=1", {
            method: "GET",
            headers: { 'Accept': 'apllication/json', 'Content-Type': 'application/json' },
            }
        ).then(response => response.json())
            .then(response => {
                htmlPageData = response['pageData']
            }
        )
        this.setState({
            pagedata: htmlPageData
        });
        
    }

    onSaveContent(e) {
        let homepageData = {
            pageId: 1,
            pageData: e.target.getContent()
        }
        e.preventDefault();
        fetch("api/wysiwyg/page", {
            method: "POST",
            headers: { 'Accept': 'apllication/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(homepageData)
        })
    }

    render() {
        return (
            <>
                <div class='featureList'>
                    <div class='item'>
                        <a>

                            <GiTestTubes color="#79b9d5" fontSize="35px" />
                            <h2 class="title">Info</h2>
                            <p class="description">Informatie over Bloedprikken en Urinetest</p>
                            <p class="link">Zie informatie <BsArrowRightShort fontSize="25px" /></p>
                        </a>
                    </div>
                    <div class='item'>
                        <a>
                            <MdOutlineLocationOn color="#79b9d5" fontSize="35px" />
                            <h2 class="title">180+ Locaties</h2>
                            <p class="description">Star-shl heeft 180+ locaties waar je kan laten Bloedprikken en Urinetesten</p>
                            <p class="link">Zie locaties <BsArrowRightShort fontSize="25px" /></p>
                        </a>
                    </div>
                </div>
                <Editor id="HomePage" tinymceScriptSrc={'tinymce/tinymce.min.js'}
                    initialValue={this.state.pagedata}
                    init={{
                        inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                    }}
                    onSaveContent={this.onSaveContent}
                />
            </>
        )
    }
}
