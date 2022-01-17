import React from "react";
import dropdown from '../assets/images/dropdown.png';


export default class Collapsible extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false, height: 0 };
        this.parentRef = React.createRef();
        this.childRef = React.createRef();

        this.setIsOpen = this.setIsOpen.bind(this);
    }

    //bool to check if the onclickevent happened or not
    setIsOpen(e) {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
        e.stopPropagation();
    }

    render() {
        return <div className="collapsible">

            <div className="clickable" onClick={this.setIsOpen}>
                {this.props.src !== undefined && <img src={this.props.src} alt="" className={this.props.className} />}
                <div style={{ display: "inline-flex", alignItems: "center" }}>
                    <h2>{this.props.title}</h2>
                    {this.props.src === undefined && <img src={dropdown} id="dropdown" alt="" width="10" height="10" style={this.state.isOpen ? { marginLeft: "10px", transform: 'rotate(180deg)' } : { marginLeft: "10px" }} />}
                </div>
            </div>

            <div
                className="content-parent"
                ref={this.parentRef}
                style={this.state.isOpen ?
                    {
                        //The current height of the content when the element is open
                        maxHeight: "4000px",
                        transition: 'max-height cubic-bezier(0.4, 0, 1, 1) 1s',

                    }
                    :
                    {
                        //Else height is 0px
                        maxHeight: "0px",
                        transition: 'max-height 1s cubic-bezier(0, 0.74, 0.08, 1.02) 0s',
                    }
                }
            >
                {this.props.children}
            </div>

        </div>
    }
}
