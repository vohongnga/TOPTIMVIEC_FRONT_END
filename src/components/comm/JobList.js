import React, { Component } from 'react';
import '../../style.css';
import JobItem from './JobItem';
import Aos from "aos";
import {connect} from 'react-redux';
import * as actions from './../../actions/index';

class JobList extends Component {
    constructor(props) {
        super(props);
        Aos.init({duration: 1000});
        this.state={
            "load_data": true
        }
    }
    onScrollDown = () => {
        var scroll_offset=500;
        if (window.innerHeight + document.documentElement.scrollTop > document.scrollingElement.scrollHeight-scroll_offset && !this.state.load_data) {
            this.setState({"load_data": true});
            this.props.fetchAppendListJob(this.props.jobs.map((job) => job._id), this.props.search_value.tag, this.props.search_value.place).then(() => {
                this.setState({"load_data": false});
            });
        }
    }
    componentDidMount() {
        this.setState({"load_data": true});
        this.props.fetchListJob(this.props.jobs.map((job) => job._id), this.props.search_value.tag, this.props.search_value.place).then(() => {
            this.setState({"load_data": false});
        });
        
        window.addEventListener('scroll', this.onScrollDown);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.onScrollDown);
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
        search_value: state.search_value,
        jobs: state.jobs
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchListJob: (list_id_showed, list_hashtag, place) => {
            return dispatch(actions.fetchSetListJob(list_id_showed, list_hashtag, place));
        },
        fetchAppendListJob: (list_id_showed, list_hashtag, place) => {
            console.log("akadsj");
            return dispatch(actions.fetchAppendListJob(list_id_showed, list_hashtag, place));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
