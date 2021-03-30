import React, { Component } from "react";
import {Link } from 'react-router-dom';
import '../style.css';

class Register extends Component {
    render() {
        document.body.style.backgroundColor = "#394141";
        return (
            
           <div className="row">
                <div className="col-sm-6">
                    <img className="h350 w300 mt2 center" src="https://res.cloudinary.com/pikann22/image/upload/v1617029729/toptimviec/LogoMakr-1n1BGL_b5ptql.png"/> <br/>
                    <button type="button" className="btn btn-success center"><Link to="/dang-ky/nguoi-tim-viec">Đăng ký Người tìm việc</Link></button>
                </div>
                <div className="col-sm-6">
                    <img className="h350 w300 mt2 center" src="https://res.cloudinary.com/pikann22/image/upload/v1617029730/toptimviec/LogoMakr-4DVhex_ssojgd.png"/><br/>
                    <button type="button" className="btn btn-success center"><Link to="/dang-ky/nha-tuyen-dung">Đăng ký Nhà tuyển dụng</Link></button>
                </div>
           </div>
        );

    }
}
export default Register;