import React, { Component } from 'react';
import Aos from "aos";
import { withRouter } from "react-router-dom";
import JobItem from '../../components/common/JobItem';
import '../../style.css';
import {connect} from 'react-redux';
import * as actions from './../../actions/index';
import * as services from './../../services/ListService';

class Post extends Component{

    constructor(props) {
        super(props);
        this.state={
            "post": {
                'hashtag':[],
                'title':'',
                'salary':0,
                'benefit': '',
                'description':'',
                'request':'',
                'recommend':[],
                'address':'',
                'deadline':'',
                'employer':{
                    '_id': '',
                    'avatar':'',
                    'name': ''
                }
            }
        }
        Aos.init({duration: 1000});
    }

    toCompany = (id) => {
        this.props.history.push("/cong-ty/"+id);
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

    componentDidMount(){
       var match= this.props.match;
       if(match){
           var id = match.params.id;
           services.getPost(id).then(res=>{
               this.setState({post:res.data.post});
           });
       }
   }
    render(){
        document.body.style.backgroundColor = "#eceff1";
        let hashtags = this.state.post.hashtag;
        let benefitList = this.state.post.benefit.split("\n");
        let descriptionList = this.state.post.description.split("\n");
        let requestList = this.state.post.request.split("\n");
        let id = this.state.post.employer._id;
        const jobRecommend = this.state.post.recommend;
        return (

            <div className="col-10 mx-auto ">
                <div className ="row">
                    <div className="col-sm-12 col-md-8 col-lg-8 mt-3">
                        <div className="bg-white rounded mt-4 p-3">
                            <h1 className="mb-5 h1">{this.state.post.title}</h1>
                            <button type="button" className="btn btn-success btn-lg btn-block">Apply now</button>
                            <div className="infor border-top-bottom mt-4">
                                <div className = "hashtag mb-3 mt-3">
                                    {hashtags.map(hashtag => ( <button type="button" className="btn btn-light btn-sm mr-1 mt-1" onClick={(e) =>this.onClickHashtag(e, hashtag)}>{hashtag}</button>))}
                                </div>
                                <p className="mb-3"><i className="fa fa-dollar-sign mr-2"></i>Lương: {this.state.post.salary}</p>
                                <p className="mb-3"><i className="fa fa-map-marker mr-2" aria-hidden="true"></i>Địa điểm: {this.state.post.address}</p>
                                <p className="mb-3"><i className="fa fa-calendar mr-2" aria-hidden="true"></i>Đến hạn: {this.state.post.deadline}</p>
                            </div>
                            <div class ="benefit mt-5 border-top pt-4">
                                <h2 className = "mb-3 h2">Quyền lợi</h2>
                                {benefitList.map(benefit=>{return <p className="mb-2 p">{benefit}</p>})}
                            </div>
                            <div className = "description mt-5 border-top pt-4">
                                <h2 className = "mb-3 h2 " >Mô tả công việc</h2>
                                    {descriptionList.map(description=>{return <p className="mb-2 p">{description}</p>})}
                            </div>
                            <div className="request mt-5 border-top pt-4">
                                <h2 className="mb-3 h2">Yêu cầu công việc</h2>
                                {requestList.map(request=>{return <p className="mb-2 p">{request}</p>})}
                            </div>
                        </div>
                        <div className = "border-top">
                            <h2 className = "my-5 h2 " >Công việc liên quan</h2>
                            <div className="job-item">
                                {this.showJobs(jobRecommend)}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="container position-sticky list-title bg-white rounded row p-3 mx-auto">
                            <div className="col-12 text-center mt-2"><p className="text-muted">Công ty</p></div>
                            <img className="mx-auto my-5" src={this.state.post.employer.avatar} alt="" width="170px" onClick={(e) =>this.toCompany(id)}></img>
                            <div className="col-12"><h1 className="h2 text-break text-center pointer " onClick={(e) =>this.toCompany(id)}>{this.state.post.employer.name}</h1></div>
                            <div className="col-12 mt-3 text-center">
                                <button className="btn btn-primary" onClick={(e) =>this.toCompany(id)}>Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        );
    }

    showJobs(jobRecommend) {
        var result = null;
        if (jobRecommend.length > 0) {
            result = jobRecommend.map((job, index) => {
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
        search_value: state.search_value
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post));