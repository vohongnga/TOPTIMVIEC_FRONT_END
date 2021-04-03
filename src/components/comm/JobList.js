import React, { Component } from 'react';
import '../../style.css';
import JobItem from './JobItem';
import Aos from "aos";
import {connect} from 'react-redux';

class JobList extends Component {
    constructor(props) {
        super(props);
        Aos.init({duration: 1000});
    }
    render() {
        var {jobs} = this.props;
        return (
            <div className="col-lg-8 mt-3">
                <div className="job-item">
                    {this.showJobs(jobs)}
                </div>
            </div>
        );
    }
    showJobs(jobs) {
        var result = null;
        if (jobs.length > 0) {
            result = jobs.map((job, index) => {
                return (
                    <JobItem 
                        key={index}
                        job={job}
                    />
                )
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        jobs: state.jobs
    }
}

export default connect(mapStateToProps, null)(JobList);
