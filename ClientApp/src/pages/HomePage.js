import React from "react"
import '../styles/homepage.css';
import parse from 'html-react-parser';
class HomePage extends React.Component {
    constructor() {
        super();

        this.state = {
            pagedata: undefined
        }
    }
    async componentDidMount() {
        let htmlPageData;
        await fetch("api/wysiwyg?id=1", {
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
    
    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.state.pagedata }}></div>
        )
    }
}

export default HomePage;
