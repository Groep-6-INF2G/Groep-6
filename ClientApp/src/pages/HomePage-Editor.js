import React from "react"
import '../styles/homepage.css';

import { Editor } from '@tinymce/tinymce-react';
class HomePageEditor extends React.Component {
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
