import React from "react"
import '../styles/homepage.css';
import { MdOutlineLocationOn } from 'react-icons/md';
import { GiTestTubes } from 'react-icons/gi';
import { BsArrowRightShort } from 'react-icons/bs';
export default class HomePage extends React.Component {
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
        }
        ).then(response => response.json())
            .then(response => {
                htmlPageData = response['pageData']
                this.setState({
                    pagedata: htmlPageData
                });
            }
            )
        
    }
    
    render() {
        return (
            <>
                <div className='featureList'>
                    <div className='featureItem'>
                        <a href="/Informatie">
                            <GiTestTubes color="#79b9d5" fontSize="35px"/>
                            <h2 className="title">Info</h2>
                            <p className="description">Informatie over Bloedprikken en Urinetest</p>
                            <p className="link">Zie informatie <BsArrowRightShort fontSize="25px"/></p>
                        </a>
                    </div>
                    <div className='featureItem'>
                        <a href="/Locaties">
                            <MdOutlineLocationOn color="#79b9d5" fontSize="35px"/>
                            <h2 className="title">180+ Locaties</h2>
                            <p className="description">Star-shl heeft 180+ locaties waar je kan laten Bloedprikken en Urinetesten</p>
                            <p className="link">Zie locaties <BsArrowRightShort fontSize="25px" /></p>
                        </a>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: this.state.pagedata }}></div>
            </>
        )
    }
}
