import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../style.css';
import JobItem from './JobItem';
import Aos from "aos";
import img from './../../image/document-256.png';
import loading_gif from './../../image/loader.gif';
import callApi from '../../utils/apiCaller';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_post:  [],
            "count_page": 0,
            "loading": false,
            "page": 1,
        }
        Aos.init({duration: 1000});
    }
    setPage = (page) => {
        this.setState({"page": page});
        this.setState({"list_employer": []});
        this.fetchData(page);
    }
    setCountPage = () => {
        callApi("/post/my/page", 'GET').then(rs => {
            this.setState(rs.data)
        });
    }
    fetchData = (page) => {
        this.setState({loading: true});
        callApi("post/my?page=" + (page - 1), 'GET').then(rs => {
            this.setState(rs.data);
            this.setState({loading: false});
        });
    }
    componentDidMount() {
        this.setCountPage();
        this.fetchData(1);
    }
    render() {
        const {list_post} = this.state;
        return (
            <div className="col-lg-12 mt-3">
                <div className="job-item">
                    {list_post.length>0?this.showJobs(list_post):(this.state.loading?"":<div><img className="center my-5" src={img} alt="" width="200px" /><h2 className="h2 text-center text-muted">Không tìm thấy công việc</h2></div>)}
                    {this.state.loading?<img className="center" src={loading_gif} alt="" width="50px"></img>:""}
                    <ul className="pagination justify-content-center mb-5 mt-3">
                    <li className="page-item">
                        <button className="page-link" onClick={() => this.setPage(1)}>
                            Đầu
                        </button>
                    </li>
                    {this.showPage(this.state.count_page, this.state.page)}
                    <li className="page-item">
                        <button className="page-link" onClick={() => this.setPage(this.state.count_page)}>
                            Cuối
                        </button>
                    </li>
                    </ul>
                    </div>
            </div>
        );
    }
    showJobs(jobs) {
        let result = null;
        if (jobs.length > 0) {
            result = jobs.map((job, index) => {
                return (
                    <div className="row mt-3" key={index}>
                        <div className="col col-10">
                            <JobItem
                                key={index}
                                job={job}
                            />
                        </div>
                        <div className="col col-2 justify-content-center align-self-center">
                            <Link to={"/sua-bai-dang/" + job._id} className="btn btn-primary mr-2">Sửa</Link>
                            <Link to = "" className ="btn btn-danger">Xoá</Link>
                        </div>
                    </div>
                )
            })
        }
        return result;
    }

showPage = (page_count, page_choose) => {
    let result = null;
    if (page_count > 0) {
        const begin_page = (+page_choose - 2 > 0) ? (+page_choose -2) : 1;
        const end_page = (begin_page + 5 < page_count) ? (begin_page + 5) : page_count 
        const page_array = Array(end_page - begin_page + 1).fill().map((_, idx) => begin_page + idx - 1)
        result = page_array.map((page, index) => {
            return (
                <li className={page + 1 === +page_choose ? "page-item active" : "page-item"} key={page}>
                    <button className="page-link" onClick={() => this.setPage(page+1)}>
                        {page+1}
                    </button>
                </li>
            )
        })
    }
    return result;
}
}

export default PostList;
