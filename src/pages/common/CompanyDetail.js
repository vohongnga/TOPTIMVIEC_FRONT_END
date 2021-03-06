import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Aos from "aos";
import Cookies from 'universal-cookie';
import callApi from '../../utils/apiCaller';
import JobItem from '../../components/common/JobItem';
import SendMailCvModal from '../../components/applicant/mail/SendMailCvModal';

class CompanyDetail extends Component{
    constructor(props) {
        super(props);
        Aos.init({duration: 1000});
        this.state={
            "avatar": "",
            "bio": "",
            "name": "",
            "list_post": [],
            "contact": false
        };
        this.cookies = new Cookies();
    }
    componentDidMount() {
        const role = this.cookies.get('role');
        this.setState({role})
        if (role) {
            this.setState({"contact": true});
        }
        callApi("/employer/" + this.props.match.params.id, 'GET').then(rs => {
            this.setState(rs.data);
        });
        callApi("/employer/" + this.props.match.params.id + "/post", 'GET').then(rs => {
            this.setState(rs.data);
        });
    }
    onContact = () => {
        if (this.state.contact) {
            window.$('#sendMailCvModal').modal('show');
        }
        else {
            this.props.history.push("/dang-nhap");
        }
    }
    render(){
        document.body.style.backgroundColor = "#eceff1";
        
        return (
            <div className="col-10 mx-auto row mt-5 flex-row-reverse">
                 <div className="col-lg-4 mb-4">
                    <div className="container position-sticky list-title bg-white rounded row p-3 mx-auto">
                        <div className="col-12 text-center mt-2"><p className="text-muted">Công ty</p></div>
                        <img className="mx-auto my-5" src={this.state.avatar} alt="" width="170px"></img>
                        <div className="col-12"><h1 className="h2 text-break text-center">{this.state.name}</h1></div>
                        <div className="col-12 mt-3 text-center">
                            {this.state.role !== "admin" ? <button className="btn btn-primary" onClick={this.onContact}>Liên hệ</button> : ""}
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="bg-white rounded p-3 mb-4">
                        <h5 className="h5 mb-3 text">Giới thiệu</h5>
                        {
                            this.state.bio.split("\n").map((text, index) => {
                                return <p className="mt-2" key={index}>{text}</p>
                            })
                        }
                    </div>
                    <h5 className="h5 mb-4 text ml-3">Công việc</h5>
                    <div className="job-item">
                        {this.state.list_post.length > 0 ? this.showJobs(this.state.list_post) : ""}
                    </div>
                </div>
               
                {this.state.contact && this.state.role !== "admin" ? <SendMailCvModal id_employer={this.props.match.params.id} /> : ""}
            </div>
        );
    }
    showJobs(jobs) {
        let result = null;
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


export default withRouter(CompanyDetail);
