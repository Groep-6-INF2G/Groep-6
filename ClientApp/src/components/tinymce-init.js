import React, { Component } from "react";
import tinymce from "tinymce";
import "tinymce/themes/silver";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/table";

class TinyEditorComponent extends Component {
    componentDidMount() {
        tinymce.init({
            selector: `#${this.props.id}`,
            skin_url: `${process.env.PUBLIC_URL}/skins/ui/oxide`,
            plugins: 'wordcount table',
            inline: true,
            setup: editor => {
                this.setState({ editor });
                editor.on('keyup change', () => {
                    const content = editor.getContent();
                    this.props.onEditorChange(content);
                });
            }
        });
    }
    componentWillUnmount() {
        tinymce.remove(this.state.editor);
    }
    render() {
        return (<textarea id="{this.props.id}" />);
    }
}
export default TinyEditorComponent;