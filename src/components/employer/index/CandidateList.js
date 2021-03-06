import React, { Component } from 'react';
import '../../../style.css';
import CandidateItem from './CandidateItem';
import ChooseCVModal from './ChooseCVModal';
import Aos from "aos";
import {connect} from 'react-redux';
import * as actions from './../../../actions/index';
import img from './../../../image/document-256.png';
import loading_gif from './../../../image/loader.gif';
import * as employer_action from './../../../actions/employer/index';

class CandidateList extends Component {
    constructor(props) {
        super(props);
        Aos.init({duration: 1000});
    }
    onScrollDown = () => {
        const scroll_offset=500;
        if (window.innerHeight + document.documentElement.scrollTop > document.scrollingElement.scrollHeight-scroll_offset && this.props.search_value.load) {
            this.props.setLoadJob(false);
            this.props.setLoadingJob(true);
            const lengthListJob = this.props.jobs.length;
            this.props.fetchAppendListJob(this.props.jobs.map((job) => job._id), this.props.search_value.tag, this.props.search_value.place).then(() => {
                if (this.props.jobs.length!==lengthListJob) {
                    this.props.setLoadJob(true);
                }
                this.props.setLoadingJob(false);
            });
        }
    }
    componentDidMount() {
        this.props.setListJob([]);
        this.props.setLoadJob(false);
        const lengthListJob = this.props.jobs.length;
        if (lengthListJob === 0) {
            this.props.setLoadingJob(true);
            this.props.fetchListJob(this.props.jobs.map((job) => job._id), this.props.search_value.tag, this.props.search_value.place).then(() => {
                if (this.props.jobs.length!==lengthListJob) {
                    this.props.setLoadJob(true);
                }
                this.props.setLoadingJob(false);
            });
        } else {
            this.props.setLoadJob(true);
        }
        window.addEventListener('scroll', this.onScrollDown);
    }
    componentWillUnmount(){
        this.props.setListJob([]);
        window.removeEventListener('scroll', this.onScrollDown);
    }
    render() {
        const {jobs} = this.props;
        return (
            <div className="col-lg-8 mt-3">
                <div className="job-item">
                    {this.props.jobs.length>0?this.showJobs(jobs):(this.props.search_value.loading?"":<div><img className="center my-5" src={img} alt="" width="200px" /><h2 className="h2 text-center text-muted">Kh??ng t??m th???y ???ng vi??n</h2></div>)}
                    {this.props.search_value.loading?<img className="center" src={loading_gif} alt="" width="50px"></img>:""}
                </div>
                <ChooseCVModal />
            </div>
        );
    }
    showJobs(jobs) {
        let result = null;
        if (jobs.length > 0) {
            result = jobs.map((job, index) => {
                return (
                    <CandidateItem 
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
            return dispatch(employer_action.fetchSetListCV(list_id_showed, list_hashtag, place));
        },
        fetchAppendListJob: (list_id_showed, list_hashtag, place) => {
            return dispatch(employer_action.fetchAppendListCV(list_id_showed, list_hashtag, place));
        },
        setLoadJob: (load) => {
            return dispatch(actions.setLoadJob(load));
        },
        setLoadingJob: (loading) => {
            return dispatch(actions.setLoadingJob(loading));
        },
        setListJob: (jobs) => {
            return dispatch(actions.setListJob(jobs));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateList);
