import React, { Component } from 'react';
import '../../style.css';
import JobItem from './JobItem';
import Aos from "aos";
import {connect} from 'react-redux';
import * as actions from './../../actions/index';
import img from './../../image/document-256.png';
import loading_gif from './../../image/loader.gif';

class JobList extends Component {
    constructor(props) {
        super(props);
        Aos.init({duration: 1000});
        this.state={
            "load_data": false
        }
    }
    onScrollDown = () => {
        var scroll_offset=500;
        if (window.innerHeight + document.documentElement.scrollTop > document.scrollingElement.scrollHeight-scroll_offset && this.props.search_value.load) {
            this.props.setLoadJob(false);
            this.setState({"load_data": true});
            var lengthListJob = this.props.jobs.length;
            this.props.fetchAppendListJob(this.props.jobs.map((job) => job._id), this.props.search_value.tag, this.props.search_value.place).then(() => {
                if (this.props.jobs.length!==lengthListJob) {
                    this.props.setLoadJob(true);
                }
                this.setState({"load_data": false});
            });
        }
    }
    componentDidMount() {
        this.props.setLoadJob(false);
        var lengthListJob = this.props.jobs.length;
        if (lengthListJob === 0) {
            this.setState({"load_data": true});
            this.props.fetchListJob(this.props.jobs.map((job) => job._id), this.props.search_value.tag, this.props.search_value.place).then(() => {
                if (this.props.jobs.length!==lengthListJob) {
                    this.props.setLoadJob(true);
                }
                this.setState({"load_data": false});
            });
        }
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
                    {this.props.jobs.length>0?this.showJobs(jobs):this.state.load_data?"":<div><img className="center my-5" src={img} alt="" width="200px" /><h2 className="h2 text-center text-muted">Không tìm thấy công việc</h2></div>}
                    {this.state.load_data?<img className="center" src={loading_gif} alt="" width="50px"></img>:""}
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
            return dispatch(actions.fetchAppendListJob(list_id_showed, list_hashtag, place));
        },
        setLoadJob: (load) => {
            return dispatch(actions.setLoadJob(load));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
