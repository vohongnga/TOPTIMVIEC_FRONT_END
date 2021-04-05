import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo_img from "../../image/LogoMakr-48tDoh_uhomu6.png";
import { connect } from 'react-redux';
import SearchForm from "./SearchForm";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "navbar": true,
            "searchbar": true
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
        window.addEventListener('scroll', this.changeNavbarBg);
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
                            <NavLink activeClassName="active" exact to="/mau-cv" className="nav-link px-2">Mẫu CV</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" exact to="/cong-ty" className="nav-link px-2">Công ty</NavLink>
                        </li>
                    </ul>

                    <div className="navbar-nav ml-auto">
                        <Link className="btn btn-outline-success text-success mr-1 text-truncate"  to="/dang-nhap">Đăng nhập</Link>
                        <Link className="btn btn-success text-truncate mt-1 mt-md-0"  to="/dang-ky">Đăng ký</Link>
                    </div>
                </div>
                {this.props.hide_header && !this.state.searchbar ? <div className="container-fluid col-10 mx-auto"><SearchForm header={true}/></div>: ""}
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        hide_header : state.hide_header
    }
}

export default connect(mapStateToProps, null)(Header);
