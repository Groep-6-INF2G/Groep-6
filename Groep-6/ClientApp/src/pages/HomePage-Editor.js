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
        await fetch("api/wysiwyg?id=1", {
            method: "GET",
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
            body: JSON.stringify(homepageData)
        })
    }

    render() {
        return (
            <>
                <div className='featureList'>
                    <div className='featureItem'>
                        <div className='a'>
                            <GiTestTubes color="#79b9d5" fontSize="35px" />
                            <h2 className="title">Info</h2>
                            <p className="description">Informatie over Bloedprikken en Urinetest</p>
                            <p className="link">Zie informatie <BsArrowRightShort fontSize="25px" /></p>
                        </div>
                    </div>
                    <div className='featureItem'>
                        <div className='a'>
                            <MdOutlineLocationOn color="#79b9d5" fontSize="35px" />
                            <h2 className="title">180+ Locaties</h2>
                            <p className="description">Star-shl heeft 180+ locaties waar je kan laten Bloedprikken en Urinetesten</p>
                            <p className="link">Zie locaties <BsArrowRightShort fontSize="25px" /></p>
                        </div>
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
