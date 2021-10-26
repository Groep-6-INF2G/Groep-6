// Creator: Sharoek Mahboeb 1018492

import React, { useState, useRef } from "react";

function Collapsible(props) {
    //bool to check if the onclickevent happened or not
    const [isOpen, setIsOpen] = useState(false);

    //useRef is used for getting the height of the element content. 
    const parentRef = useRef();

    let textDiv = <div className="content" > {props.content} </div>;
    let picDiv = <div className="Picture" >{props.picture}</div>
    
    return <div className="collapsible">
    <img src={props.src} alt="" className={props.classname} onClick={() => setIsOpen(!isOpen)} />
        <div 
            className= "content-parent" 
            ref={parentRef} 
            style={isOpen ? {
                //The current height of the content when the element is open
                height: parentRef.current.scrollHeight + "px",
            }
            : {
                //Else height is 0px
                height: "0px",
            }
        }
            >
            {props.content !== undefined ? textDiv : ""}
            {console.log(props.content)}
            {props.picture !== undefined ? picDiv : null }
            {console.log(props.picture)}
            <video className="content" src={props.video} controls="controls" autoPlay="" />
            <img src={picDiv} alt=""  className="imgcontent" />
        </div> 
    </div>
}

export default Collapsible;