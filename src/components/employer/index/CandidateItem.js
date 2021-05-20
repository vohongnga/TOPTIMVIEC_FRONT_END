import React, { Component} from 'react';
import '../../../style.css';
import "aos/dist/aos.css";
import { withRouter, Link } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './../../../actions/index';
import * as employer_action from './../../../actions/employer/index';

class CandidateItem extends Component {
    toPost = (id) => {
        window.open("/cv/"+id, "_blank")
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
    onChooseCV = (e) => {
        e.stopPropagation(); 
        window.$('#chooseCVModal').modal('show');
        this.props.chooseCV(this.props.job._id);
    }
    onDeleteCV = (e) => {
        e.stopPropagation(); 
        window.$('#deleteCVFromListDialog').modal('show');
        this.props.chooseCV(this.props.job._id);
    }
    render() {
        var {job} = this.props;
        return (
            <div className="item row h-100 full-width mx-1 mb-3 rounded bg-white big-hover pr-2 pl-4 pt-4 pb-3" data-aos={this.props.list ? "fade-left" : "fade-right"} onClick={(e) =>this.toPost(job._id)}>
                <div className="col col-2 logo">
                    <img className="mx-auto pr-2" src={job.avatar} alt="" />
                </div>
                <div className="col col-10">
                    <h4 className="text-truncate">{job.name}</h4>
                    <div className="row mt-4 mb-1">
                        <div className="col-8 detail mb-0 pb-0">
                            <h5 className="text-truncate">{job.position}</h5>
                            <div className="row pl-3 mt-3">{this.showHashtag(job.hashtag)}</div>
                        </div>
                        <div className="col-4 ml-auto city_and_posted_date h-100 text-right">
                            {!this.props.manage ? <Link to="#" className="btn btn-success text-white" role="button" onClick={this.onChooseCV}>Chọn</Link> : ""}
                            {this.props.list ? <Link to="#" className="btn btn-danger text-white ml-1" role="button" onClick={this.onDeleteCV}>Xóa</Link> : ""}
                            {this.props.manage ? 
                                <div>
                                    <Link to="#" className="btn btn-primary text-white ml-1" role="button">Sửa</Link> 
                                    <Link to="#" className="btn btn-danger text-white ml-1" role="button" onClick={(e) => this.props.onChoiceDelete(e, job._id)}>Xóa</Link> 
                                </div>
                            : ""}
                            <div className="text-right mt-4">
                                <p className="text-truncate">{job.place}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    showHashtag = (listHashtag) => {
        var result = null;
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
            return dispatch(employer_action.fetchSetListCV(list_id_showed, list_hashtag, place));
        },
        setLoadJob: (load) => {
            return dispatch(actions.setLoadJob(load));
        },
        setLoadingJob: (loading) => {
            return dispatch(actions.setLoadingJob(loading));
        },
        setListJob: (jobs) => {
            return dispatch(actions.setListJob(jobs));
        },
        chooseCV: (cv) => {
            return dispatch(employer_action.chooseCV(cv));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CandidateItem));
