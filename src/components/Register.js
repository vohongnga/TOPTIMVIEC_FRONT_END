import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../style.css';

class Register extends Component {
    render() {
        document.body.style.backgroundColor = "#e9e9e9";
        return (
            <div className="col-sm-8 center">
                <div className="row">
                    <div className="col-sm-5 card mt-sm-5">
                        <img src="https://res.cloudinary.com/pikann22/image/upload/v1617098321/toptimviec/Pointofsale_jobs_f78ajf.jpg" className="mt-sm-3"></img>
                        <div className="card-body">
                            <h5 className="card-title">Người tìm việc</h5>
                            <a href="#" className="btn btn-success">Đăng ký Người tìm việc</a>
                        </div>
                    </div>
                    <div className="col-sm-5 offset-sm-2 card mt-sm-5">
                        <img src="https://res.cloudinary.com/pikann22/image/upload/v1617098321/toptimviec/Best-Applicant-Tracking-Systems-Workable-vs-BreezyHR-vs-ApplicantPro_zam89c.png" className="mt-sm-3"></img>
                        <div className="card-body">
                            <h5 className="card-title">Nhà tuyển dụng</h5>
                            <a href="#" className="btn btn-success">Đăng ký Nhà tuyển dụng</a>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default Register;