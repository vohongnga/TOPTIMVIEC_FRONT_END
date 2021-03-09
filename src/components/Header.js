import React, { Component } from 'react';
class Header extends Component{
  render(){
      return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <a className="navbar-brand" href="#"><img src="https://res.cloudinary.com/pikann22/image/upload/w_60,c_scale/v1613642165/toptimviec/LogoMakr-87TXng_pnsj0a.png"/></a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Trang chủ <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Mẫu CV</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Công ty</a>
                </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a className="btn btn-outline-success"><i className="fa fa-sign-in-alt" aria-hidden="true"></i>Đăng nhập</a></li>&nbsp;&nbsp;
                <li><a href="" className="btn btn-outline-success"><i className="fa fa-user" aria-hidden="true"></i>Đăng ký</a></li>
               
            </ul>
        </div>
    </nav>
      );
  }
}
export default Header;
