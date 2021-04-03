import React, { Component } from "react";
import '../style.css';
import img from '../image/2c9f70c48fddd88953171b2a63d08506.png'

class NotFoundPage extends Component {
    render() {
        document.body.style.backgroundColor = "#eceff1";
        return (
            <div>
                <img src={img} className="center mt-5"/>
            </div>
        );

    }
}
export default NotFoundPage;