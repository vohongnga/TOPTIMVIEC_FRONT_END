import React, { Component} from 'react';
import '../../style.css';
import "aos/dist/aos.css";
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './../../actions/index';

class JobItem extends Component {
    toPost = (id) => {
        console.log(this.props.inTag)
        if (this.props.inTag) {
            this.props.history.push("/post/" + id);
            this.props.history.go();
        }
        else {
            window.open("/post/"+id, "_blank");
        }
    }
    onClickHashtag(e, hashtag) {
        e.stopPropagation(); 
        this.props.onChangeHashtag([hashtag]);
        if (this.props.location.pathname === "/") {
            this.props.setLoadingJob(true);
            this.props.setLoadJob(false);
            this.props.setListJob([]);
            this.props.fetchListJob([], [hashtag], this.props.search_value.place).then(() => {
                window.scrollTo({ behavior: 'smooth', top: (window.innerHeight)*0.9 - 150 });
                this.props.setLoadJob(true);
                this.props.setLoadingJob(false);
            });
        }
        else {
            this.props.history.push("/");
        }
    }
    render() {
        const {job} = this.props;
        let place = "";
        if (job.place.length>0) {
            job.place.forEach((element, i) => {
                if (i===0) {
                    place=element;
                } else {
                    place += ", "+element;
                }
            });
        }
        return (
            <div className="item row h-100 full-width mx-1 mb-3 rounded bg-white big-hover pr-2 pl-4 pt-4 pb-3" data-aos="fade-right" onClick={(e) =>this.toPost(job._id)}>
                <div className="col col-2 logo">
                    <img className="mx-auto pr-2" src={job.employer.avatar} alt="" />
                </div>
                <div className="col col-10">
                    <h4 className="text-truncate">{job.title}</h4>
                    <div className="row mt-4 mb-1">
                        <div className="col-8 detail mb-0 pb-0">
                            <h5 className="text-truncate">{job.employer.name}</h5>
                            <div className="row pl-3 mt-3">{this.showHashtag(job.hashtag)}</div>
                        </div>
                        <div className="col-4 ml-auto city_and_posted_date h-100">
                            <p className="text-truncate text-right mt-1"><i className="fa fa-dollar-sign mr-1 mb-2"></i>{job.salary}</p><br/>
                            <div className="text-right mt-3">
                                <p className="text-truncate">{place}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    showHashtag = (listHashtag) => {
        let result = null;
        if (listHashtag.length > 0) {
            result = listHashtag.map((hashtag, index) => {
                return (
                    <button key={index} type="button" className="btn btn-light btn-sm mr-1 mt-1" onClick={(e) =>this.onClickHashtag(e, hashtag)}>{hashtag}</button>
                )
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        search_value: state.search_value,
        list_hashtag: state.list_hashtag,
        list_place: state.list_place,
        jobs: state.jobs,
        list_job_ref: state.list_job_ref
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeHashtag: (hashtag) => {
            dispatch(actions.changeHashtag(hashtag));
        },
        fetchListJob: (list_id_showed, list_hashtag, place) => {
            return dispatch(actions.fetchSetListJob(list_id_showed, list_hashtag, place));
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(JobItem));
