import React from "react"
import '../styles/homepage.css';
import { MdOutlineLocationOn } from 'react-icons/md';
import { GiTestTubes } from 'react-icons/gi';
import { BsArrowRightShort } from 'react-icons/bs';
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
            <>
                <div class='featureList'>
                    <div class='item'>
                        <a href="/Informatie">
                            
                                <GiTestTubes color="#79b9d5" fontSize="35px"/>
                            <h2 class="title">Info</h2>
                            <p class="description">Informatie over Bloedprikken en Urinetest</p>
                            <p class="link">Zie informatie <BsArrowRightShort fontSize="25px"/></p>
                        </a>
                    </div>
                    <div class='item'>
                        <a href="/Locaties">
                            <MdOutlineLocationOn color="#79b9d5" fontSize="35px"/>
                            <h2 class="title">180+ Locaties</h2>
                            <p class="description">Star-shl heeft 180+ locaties waar je kan laten Bloedprikken en Urinetesten</p>
                            <p class="link">Zie locaties <BsArrowRightShort fontSize="25px" /></p>
                        </a>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: this.state.pagedata }}></div>
            </>
        )
    }
}
