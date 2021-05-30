import React,{ Component } from "react";
import {Link} from "react-router-dom";
import LoginService from "../../services/LoginService";
import logo_img from "../../image/LogoMakr-48tDoh_uhomu6.png";
class HeaderAdmin extends Component {
    logOut = () => {
        LoginService.logoutAPI();
    };
    render() {
        return (
            <header className= "navbar navbar-expand-md d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 scrolling-navbar dark navbar-dark sticky-top">
                <Link className="navbar-brand d-flex align-items-center col-3 mb-md-0 text-dark text-decoration-none" to="/"><img src={logo_img} alt=""/></Link>
                <button className="ml-auto navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-sm-9 collapse navbar-collapse row">
                    <div className="navbar-nav ml-auto">
                        <button className="btn btn-success text-truncate mt-1 mt-md-0" onClick={this.logOut}>Đăng xuất</button>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderAdmin;