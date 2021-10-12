// Creator: Sharoek Mahboeb 1018492

import React, { useState, useRef } from "react";

function Collapsible(props) {
    //bool to check if the onclickevent happened or not
    const [isOpen, setIsOpen] = useState(false);

    //useRef is used for getting the height of the element content. 
    const parentRef = useRef();
    
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
            <div className="content" > {props.content} </div>
        </div>
    </div>
}

export default Collapsible;