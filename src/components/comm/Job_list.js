import React, { Component } from 'react';
import '../../style.css';
import Job_item from './Job_item';

class Job_list extends Component {
    render() {
        return (
            <div className="col-md-8 mt-3">
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
