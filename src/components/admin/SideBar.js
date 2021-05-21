import React, { Component } from "react";
import { Link } from "react-router-dom";
import find_user from "../../image/find_user.png";
class SideBar extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6 navbar-side navbar-default">
        <div className="sidebar-collapse">
        <ul className="list-group nav">
          <li className="list-group-item text-center py-4">
            <img src={find_user} className="user-image img-responsive" />
          </li>
          <li className="list-group-item text-center py-4 " >
            <Link to="" className=" h4 text-sidebar ">Trang chủ</Link>
          </li>
          <li className="list-group-item text-center py-4">
            <Link to="" className=" h4 text-sidebar">Quản lý tin</Link>
          </li>
          <li className="list-group-item text-center py-4">
            <Link to="" className=" h4 text-sidebar">Quản lý CV</Link>
          </li>
          <li className="list-group-item text-center py-4">
            <Link to="" className=" h4 text-sidebar">Quản lý công ty</Link>
          </li>
          <li className="list-group-item text-center py-4">
            <Link to="" className=" h4 text-sidebar">Quản lý tài khoản</Link>
          </li>
        </ul>
        </div>
        
      </div>
    );
  }
}
export default SideBar;
