import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Test from '../nhatuyendung/Test';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {"navbar": true};
    }
    changeNavbarBg = () => {
        if (window.scrollY >= 100) {
            this.setState({"navbar": false})
        }
        else {
            this.setState({"navbar": true})
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.changeNavbarBg);
    }
    render() {
        return (
            <header className={this.props.hide ? this.state.navbar ? "d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 fixed-top scrolling-navbar": "d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 fixed-top scrolling-navbar dark" : "d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 scrolling-navbar dark"}>
                <Link className="navbar-brand d-flex align-items-center col-3 mb-md-0 text-dark text-decoration-none" to="/"><img src="https://res.cloudinary.com/pikann22/image/upload/w_150,c_scale/v1613830816/toptimviec/LogoMakr-48tDoh_uhomu6.png" /></Link>

                <ul className="nav col-12 col-md-auto justify-content-center mb-md-0">
                    <li>
                        <Link className="nav-link px-2 link-secondary" to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/mau-cv" className="nav-link px-2 link-dark">Mẫu CV</Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-2 link-dark">Công ty</Link>
                    </li>
                </ul>

                <div className="col-3 text-end">
                    <div className="float-right">
                        <Link className="btn btn-outline-success text-success mr-1 text-truncate"  to="/dang-nhap">Đăng nhập</Link>
                        <Link className="btn btn-success text-truncate"  to="/dang-ky">Đăng ký</Link>
                    </div>
                </div>
            </header>


        );
    }
}
export default Header;
