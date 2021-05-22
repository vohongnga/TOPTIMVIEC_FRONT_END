import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo_img from "../../image/LogoMakr-48tDoh_uhomu6.png";
import admin_img from "../../image/administrator.png";
class SideBar extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6 admin-left-bar fixed-height">
                <div className="">
                    <ul className="">
                        <li className="list-group-item text-center py-4 border-0">
                            <img src={logo_img} className="" alt="" width="200px" />
                        </li>
                        <li className="list-group-item text-center py-4 border-0">
                            <img src={admin_img} className="" alt="" width="130px" />
                        </li>
                        <li className="list-group-item text-center border-0" >
                            <NavLink className="nav-link h4 text-muted" activeClassName="bg-light rounded" exact to="/">Trang chủ</NavLink>
                        </li>
                        <li className="list-group-item text-center border-0">
                            <NavLink className="nav-link h4 text-muted" activeClassName="bg-light rounded" exact to="/quan-ly-tin">Quản lý tin</NavLink>
                        </li>
                        <li className="list-group-item text-center border-0">
                            <NavLink className="nav-link h4 text-muted" activeClassName="bg-light rounded" exact to="/quan-ly-cv">Quản lý CV</NavLink>
                        </li>
                        <li className="list-group-item text-center border-0">
                            <NavLink className="nav-link h4 text-muted" activeClassName="bg-light rounded" exact to="/quan-ly-cong-ty">Quản lý công ty</NavLink>
                        </li>
                        <li className="list-group-item text-center border-0">
                            <NavLink className="nav-link h4 text-muted" activeClassName="bg-light rounded" exact to="/quan-ly-tai-khoan">Quản lý tài khoản</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}
export default SideBar;
