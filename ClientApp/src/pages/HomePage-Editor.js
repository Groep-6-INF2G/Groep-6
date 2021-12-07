import React from "react"
import '../styles/homepage.css';
import "jquery"
import { Editor } from '@tinymce/tinymce-react';
import { renderToString } from 'react-dom/server'
import HomePage from './HomePage'
class HomePageEditor extends React.Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.getContent())
    }
    render() {
        return (
            <>
                <Editor id="HomePage" tinymceScriptSrc={'tinymce/tinymce.min.js'}
                    initialValue={renderToString(<HomePage />)}
                    init={{
                        inline: true, menubar: false, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                    }}
                    onSaveContent={this.handleSubmit}
                />
            </>
        )
    }
}

export default HomePageEditor;
