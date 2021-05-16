import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo_img from "../../../image/LogoMakr-48tDoh_uhomu6.png";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import SearchForm from "./../../common/SearchForm";
import LoginService from "../../../services/LoginService";
import Notification from "../../common/Notification";

class HeaderEmployer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "navbar": true,
            "searchbar": true,
            "avatar": "https://res.cloudinary.com/pikann22/image/upload/v1615044354/toptimviec/TCM27Jw1N8ESc1V0Z3gfriuG1NjS_hXXIww7st_jZ0bFz3xGRjKht7JXzfLoU_ZelO4KPiYFPi-ZBVZcR8wdQXYHnwL5SDFYu1Yf7UBT4jhd9d8gj0lCFBA5VbeVp9SveFfJVKRcLON-OyFX_kxrs3f.png"
        };
    }
    changeNavbarBg = () => {
        if (window.scrollY >= 100) {
            this.setState({"navbar": false})
        }
        else {
            this.setState({"navbar": true})
        }
        if (window.scrollY >= 350) {
            this.setState({"searchbar": false})
        }
        else {
            this.setState({"searchbar": true})
        }
    }
    componentDidMount() {
        var avatar = sessionStorage.getItem("avatar");
        if (avatar !== "") {
            this.setState({"avatar": avatar})
        }
        window.addEventListener('scroll', this.changeNavbarBg);
    }
    logOut = () => {
        LoginService.logoutAPI();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.changeNavbarBg);
    }
    render() {
        return (
            <header className={this.props.hide_header ? this.state.navbar ? "navbar navbar-expand-md d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 fixed-top scrolling-navbar navbar-dark": "navbar navbar-expand-md d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 fixed-top scrolling-navbar dark navbar-dark" : "navbar navbar-expand-md d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 scrolling-navbar dark navbar-dark sticky-top"}>
                <Link className="navbar-brand d-flex align-items-center col-3 mb-md-0 text-dark text-decoration-none" to="/"><img src={logo_img} alt=""/></Link>
                <button className="ml-auto navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-sm-9 collapse navbar-collapse row" id="collapsibleNavbar">
                    <ul className="navbar-nav mx-auto justify-content-center mb-md-0">
                        <li>
                            <NavLink activeClassName="active" exact className="nav-link px-2" to="/">Trang chủ</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" exact to="/danh-sach" className="nav-link px-2">Danh sách</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" exact to="/quan-ly-tin" className="nav-link px-2">Quản lý tin</NavLink>
                        </li>
                    </ul>

                    <div className="navbar-nav ml-auto">
                        <Link className="btn btn-success text-truncate mt-1 mt-md-0"  to="#">Đăng tin</Link>
                        <Notification />
                        <li className="nav-item dropdown ml-lg-3 mr-lg-2">
                            <div className="nav-link dropdown-toggle p-0" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img className="rounded-circle" src={this.state.avatar} width="38px" height="38px" alt=""></img></div>
                            <div className="dropdown-menu dropdown-menu-right drop">
                                <Link className="dropdown-item" to="#">Trang cá nhân</Link>
                                <Link className="dropdown-item" to="/hop-thu">Hộp thư</Link>
                                <Link className="dropdown-item" to="/tai-khoan">Cài đặt tài khoản</Link>
                                <Link className="dropdown-item" to="#" onClick={this.logOut}>Đăng xuất</Link>
                            </div>
                        </li>
                    </div>
                </div>
                {this.props.hide_header && !this.state.searchbar ? <div className="container-fluid col-10 mx-auto d-none d-sm-none d-md-block d-lg-block"><SearchForm header={true} employer={true}/></div>: ""}
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        hide_header : state.hide_header
    }
}

export default connect(mapStateToProps, null)(withRouter(HeaderEmployer));
