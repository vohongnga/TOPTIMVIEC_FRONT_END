import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './style.css';
class Header extends Component{
  render(){
      return ( 
          <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <a className="navbar-brand" href="#"><img src="https://res.cloudinary.com/pikann22/image/upload/w_150,c_scale/v1613830816/toptimviec/LogoMakr-48tDoh_uhomu6.png"/></a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-20 mt-lg-0 ">
                    <li className="nav-item active"> 
                        <Link to ="/test">Trang chủ</Link>
                    </li>&nbsp;&nbsp;
                    <li className="nav-item">
                    <Link to ="/list">Danh sách</Link>
                    </li>&nbsp;&nbsp;
                    <li className="nav-item">
                        <Link to="#">Quản lý tin</Link>
                    </li>&nbsp;&nbsp;
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a className="btn btn-success">Đăng tin</a></li>&nbsp;&nbsp;
                    <li><a href="" className="btn btn-outline-success"><i class="fa fa-comments" aria-hidden="true"></i></a></li>&nbsp;&nbsp;
                    <li><a href="" className="btn btn-outline-success"><i class="fa fa-bell" aria-hidden="true"></i></a></li>&nbsp;&nbsp;
                    <li class = "dropdown"><a href="" className="btn btn-outline-success dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" aria-hidden="true"></i></a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item active" href="#">Trang cá nhân</a>
                            <a class="dropdown-item" href="#">Quản lý tài khoản</a>
                            <a class="dropdown-item" href="#">Hộp thư</a>
                            <a class="dropdown-item" href="#">Đăng xuất</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        

    </div>
      );
  }
}
export default Header;
