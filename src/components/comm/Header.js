import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Test from '../nhatuyendung/Test';
class Header extends Component{
  render(){
      return ( 
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <a className="navbar-brand" href="#"><img src="https://res.cloudinary.com/pikann22/image/upload/w_150,c_scale/v1613830816/toptimviec/LogoMakr-48tDoh_uhomu6.png"/></a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">                   
                    <Link to ="/test">Trang chủ</Link>
                </li>&nbsp;&nbsp;
                <li className="nav-item">
                    <Link to="/header">Mẫu CV</Link>
                </li>&nbsp;&nbsp;
                <li className="nav-item">
                    <Link to="#">Công ty</Link>
                </li>&nbsp;&nbsp;
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a className="btn btn-outline-success"><i className="fa fa-sign-in-alt" aria-hidden="true"></i>Đăng nhập</a></li>&nbsp;&nbsp;
                <li><a href="/register" className="btn btn-outline-success"><i className="fa fa-user" aria-hidden="true"></i>Đăng ký</a></li>
               
            </ul>
        </div>
    </nav>
    
 
   
      );
  }
}
export default Header;
