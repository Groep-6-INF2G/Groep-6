import React from "react"
import '../styles/homepage.css';
import "jquery"
import { Editor } from '@tinymce/tinymce-react';
import { renderToString } from 'react-dom/server'
import HomePage from './HomePage'
class HomePageEditor extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        console.log(e.target.getContent())
    }
    render() {
        return (
            <>
                <form onSubmit={this.onSubmit}>
                    <Editor id="HomePage" tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={renderToString(<HomePage/>)}
                        init={{
                            inline: true, plugins: 'save', toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |  removeformat | save cancel'
                        }}
                        onSaveContent={this.onSaveContent}
                    />
                </form>
                
            </>
        )
    }
}

export default HomePageEditor;
