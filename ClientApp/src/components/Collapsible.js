// Creator: Sharoek Mahboeb 1018492

import React, { useState, useRef } from "react";


function pictureContent(props, { multipleImages }, {list}) {
    if (props == null)
        return "";
    else if (multipleImages)
        return  list.map((index) => (<img className="Picture" src={index.image} alt='' />)) 
        
    return (
        <img className="Picture" src={props} alt="" />
        
    );
}


function videoContent(props) {
    if (props == null)
        return "";

    return (   
     <video className="content" src={props} controls="controls" autoPlay="" />
    );
}

function Collapsible(props) {
    //bool to check if the onclickevent happened or not
    const [isOpen, setIsOpen] = useState(false);

    //useRef is used for getting the height of the element content. 
    const parentRef = useRef();
    const picHolder = props.pic;
    const vidHolder = props.vid;
    const multipleImages = props.multipleImages;
    const list = props.list;


    let picContent = pictureContent(picHolder, { multipleImages }, {list})
    let vidContent = videoContent(vidHolder)

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
            {videoContent.props !== null || videoContent.props !== undefined ? vidContent : ""}
            {console.log(vidHolder)}


            {picHolder !== null ? picContent : ""}
            {console.log(picContent)}
            
        </div> 
        
    </div>
}

export default Collapsible;