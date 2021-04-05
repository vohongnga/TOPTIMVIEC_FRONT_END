import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
class Header extends Component{
  render(){
      return ( 
          <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <Link className="navbar-brand" to="#"><img src="https://res.cloudinary.com/pikann22/image/upload/w_150,c_scale/v1613830816/toptimviec/LogoMakr-48tDoh_uhomu6.png" alt=""/></Link>
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
                    <li><Link to="" className="btn btn-success">Đăng tin</Link></li>&nbsp;&nbsp;
                    <li><Link to="" className="btn btn-outline-success"><i class="fa fa-comments" aria-hidden="true"></i></Link></li>&nbsp;&nbsp;
                    <li><Link to="" className="btn btn-outline-success"><i class="fa fa-bell" aria-hidden="true"></i></Link></li>&nbsp;&nbsp;
                    <li class = "dropdown"><Link to="" className="btn btn-outline-success dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" aria-hidden="true"></i></Link>
                        <div class="dropdown-menu">
                            <Link to="" class="dropdown-item active">Trang cá nhân</Link>
                            <Link to="" class="dropdown-item">Quản lý tài khoản</Link>
                            <Link to="" class="dropdown-item">Hộp thư</Link>
                            <Link to="" class="dropdown-item">Đăng xuất</Link>
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
