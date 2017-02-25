import React, { Component } from 'react';
import './Endzone.css';

class Endzone extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h1>{this.props.text}</h1>
            </div>
        )
    }

}

export default Endzone;