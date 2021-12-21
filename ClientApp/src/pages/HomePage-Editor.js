import React from "react"
import '../styles/homepage.css';
import "jquery"
import { Editor } from '@tinymce/tinymce-react';
import { renderToStaticNodeStream, renderToString } from 'react-dom/server'
import HomePage from './HomePage'
class HomePageEditor extends React.Component {
    constructor() {
        super();

        this.onSaveContent = this.onSaveContent.bind(this);
      
        this.state = {
            pagedata: undefined
        }
    }
    componentDidMount() {
        let htmlPageData = 'initial html value';
        this.setState = ({
            pagedata: htmlPageData
        }, () => console.log(this.state.pagedata))
        const page = fetch("api/wysiwyg?id=1", {
            method: "GET",
            headers: { 'Accept': 'apllication/json', 'Content-Type': 'application/json' },
            }
        )   .then(response => response.json())
            .then(response => {
                htmlPageData = response['pageData']
                console.log(htmlPageData)
            }
        )
        
    }

    onSaveContent(e) {
        let homepageData = {
            pageId: 1,
            pageData: e.target.getContent()
        }
        e.preventDefault();
        fetch("api/wysiwyg", {
            method: "POST",
            headers: { 'Accept': 'apllication/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(homepageData)
        })
    }
    render() {
        return (
            <>
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

export default HomePageEditor;
