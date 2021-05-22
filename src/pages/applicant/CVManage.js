import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Aos from "aos";
import CandidateItem from './../../components/employer/index/CandidateItem';
import img from './../../image/document-256.png';
import loading_gif from './../../image/loader.gif';
import callApi from '../../utils/apiCaller';
import DeleteCVDialog from '../../components/applicant/DeleteCVDialog';

class CVManage extends Component{
    constructor(props) {
        super(props);
        this.state={
            list_cv: [],
            loading: false,
            count_page: 0,
            page: 1,
            choice_delete: ""
        };
        Aos.init({duration: 1000});
    }
    setPage = (page) => {
        this.setState({"page": page});
        this.setState({"list_cv": []});
        this.setListCV(page);
    }
    setListCV = (page) => {
        if (page > 0) {
            this.setState({loading: true});
            callApi("/cv/my?page=" + (page - 1), 'GET').then(rs => {
                this.setState(rs.data);
                this.setState({loading: false});
            });
        }
    }
    onChoiceDelete = (e, id) => {
        e.stopPropagation();
        this.setState({choice_delete: id});
        window.$('#deleteCVDialog').modal('show');
    }
    onDelete = () => {
        callApi("/cv/" + this.state.choice_delete, 'DELETE').then(rs => {
            window.$('#deleteCVDialog').modal('hide');
            this.setPage(1);
        });
    }
    componentDidMount() {
        callApi("/cv/my/page", 'GET').then(rs => {
            this.setState(rs.data);
        });
        this.setState({loading: true});
        callApi("/cv/my?page=0", 'GET').then(rs => {
            this.setState({loading: false});
            this.setState(rs.data);
        });
    }
    render(){
        document.body.style.backgroundColor = "#eceff1";
        
        return (
            <div>
                <div className="col col-md-10 center mt-5">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-4 mt-3">
                            <div className="container position-sticky list-title bg-white rounded row p-3 mx-auto">
                                <div className="col-12 mt-3"><h1 className="h2 text-break text-center">Quản lý CV</h1></div>
                                <div className="col-12 mt-3 text-center">
                                    <Link className="btn btn-success" to="/mau-cv">Thêm CV</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-3">
                            <h4 className="h4 text-center mb-5">- Danh sách CV của bạn -</h4>
                            <div className="job-item">
                                {this.state.list_cv.length>0?this.showCandidates(this.state.list_cv):(this.state.loading?"":<div><img className="center my-5" src={img} alt="" width="200px" /><h2 className="h2 text-center text-muted">Không tìm thấy CV</h2></div>)}
                                {this.state.loading?<img className="center" src={loading_gif} alt="" width="50px"></img>:""}
                            </div>
                            <ul className="pagination justify-content-center my-5">
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
                </div>
                <DeleteCVDialog onDelete={this.onDelete}/>
            </div>
        );
    }
    showCandidates(candidates) {
        var result = null;
        if (candidates.length > 0) {
            result = candidates.map((candidate, index) => {
                return (
                    <CandidateItem 
                        key={index}
                        job={candidate}
                        manage={true}
                        onChoiceDelete={this.onChoiceDelete}
                    />
                )
            })
        }
        return result;
    }
    showPage = (page_count, page_choose) => {
        var result = null;
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

export default CVManage;