/// <reference path="../../node_modules/tinymce/tinymce.min.js" />
import React from "react"
import '../styles/homepage.css';
import "jquery"
import { Editor } from '@tinymce/tinymce-react';
class HomePage extends React.Component {
    render() {
        return (
            <>
                <Editor initialValue="<p>bruh.</p>" init={{ height: 500, inline: true }}/>
                <script src="../../node_modules/tinymce/tinymce.min.js"></script>
            </>
        )
    }
}

export default HomePage;