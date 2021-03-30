import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Test from '../nhatuyendung/Test';
class Header extends Component{
  render(){
      return ( 
        <nav className="navbar navbar-expand-sm navbar dark sticky-top">
        <Link className="navbar-brand" to="/"><img src="https://res.cloudinary.com/pikann22/image/upload/w_150,c_scale/v1613830816/toptimviec/LogoMakr-48tDoh_uhomu6.png"/></Link>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">                   
                    <Link className="nounderline" to ="/">Trang chủ</Link>
                </li>&nbsp;&nbsp;
                <li className="nav-item">
                    <Link to="/mau-cv">Mẫu CV</Link>
                </li>&nbsp;&nbsp;
                <li className="nav-item">
                    <Link to="#">Công ty</Link>
                </li>&nbsp;&nbsp;
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <Link className="btn btn-outline-success "  to="/dang-nhap">Đăng nhập</Link>;
                <Link className="btn btn-success "  to="/dang-ky">Đăng ký</Link>;
            </ul>
        </div>
    </nav>
    
 
   
      );
  }
}
export default Header;
