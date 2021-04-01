import React, { Component } from 'react';
import '../../style.css';
import Job_item from './Job_item';
import Aos from "aos";

class Job_list extends Component {
    constructor(props) {
        super(props);
        Aos.init({duration: 1000});
    }
    render() {
        return (
            <div className="col-lg-8 mt-3">
                <div className="job-item">
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                    <Job_item/>
                </div>
            </div>
        );
    }
}
export default Job_list;
