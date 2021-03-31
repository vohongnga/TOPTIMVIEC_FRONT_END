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
    componentWillUnmount() {
        window.removeEventListener('scroll', this.changeNavbarBg);
    }
    render() {
        return (
            <header className={this.props.hide ? this.state.navbar ? "navbar navbar-expand-md d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 fixed-top scrolling-navbar navbar-dark": "navbar navbar-expand-md d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 fixed-top scrolling-navbar dark navbar-dark" : "navbar navbar-expand-md d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 scrolling-navbar dark navbar-dark sticky-top"}>
                <Link className="navbar-brand d-flex align-items-center col-3 mb-md-0 text-dark text-decoration-none" to="/"><img src="https://res.cloudinary.com/pikann22/image/upload/w_150,c_scale/v1613830816/toptimviec/LogoMakr-48tDoh_uhomu6.png" /></Link>
                <button className="ml-auto navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-sm-9 collapse navbar-collapse row" id="collapsibleNavbar">
                    <ul className="navbar-nav mx-auto justify-content-center mb-md-0">
                        <li>
                            <Link className="nav-link px-2 active" to="/">Trang chủ</Link>
                        </li>
                        <li>
                            <Link to="/mau-cv" className="nav-link px-2">Mẫu CV</Link>
                        </li>
                        <li>
                            <Link to="#" className="nav-link px-2">Công ty</Link>
                        </li>
                    </ul>

                    <div className="navbar-nav ml-auto">
                        <Link className="btn btn-outline-success text-success mr-1 text-truncate"  to="/dang-nhap">Đăng nhập</Link>
                        <Link className="btn btn-success text-truncate mt-1 mt-md-0"  to="/dang-ky">Đăng ký</Link>
                    </div>
                </div>
            </header>


        );
    }
}
export default Header;
