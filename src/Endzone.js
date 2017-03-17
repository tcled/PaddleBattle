import React, { Component } from 'react';
import './Endzone.css';

var posX;

class Endzone extends Component {
    constructor(props) {
        super(props);
        if (this.props.side === "left") {
            posX = 0;
        } else if (this.props.side === "right") {
            posX = "calc(100% - 15vw)";
        }
    }
    render() {
        return(
            <div className="endZone" style={{left: posX}}>
                <h1 className="vertText">{this.props.text}</h1>
            </div>
        )
    }
}

export default Endzone;