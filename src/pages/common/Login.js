import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../style.css"
import logo_img from "../../image/LogoMakr-87TXng_pnsj0a.png"
import LoginService from "../../services/LoginService";
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import { withRouter } from "react-router-dom";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                email: "",
                password: ""
            },
            notif: "",
            checkSaveAccount: true
        }
    }
    onChangeEmail = (e) => {
        let email = e.target.value;
        let {user} = this.state;
        user.email = email;
        this.setState({user});
    }
    onChangePassword = (e) => {
        let password = e.target.value;
        let {user} = this.state;
        user.password = password;
        this.setState({user})
    }
    onSubmit = (e) => {
        e.preventDefault();
        LoginService.fetchLoginAPI(this.state.user.email, this.state.user.password).then(res => {
            if (res.status === 200) {
                if (this.state.checkSaveAccount) {
                    localStorage.setItem("id_user", res.data.id_user);
                    localStorage.setItem("avatar", res.data.avatar);
                    localStorage.setItem("name", res.data.name);
                    localStorage.setItem("refresh_token", res.data.refresh_token);
                    localStorage.setItem("role", res.data.role);
                }
                sessionStorage.setItem("id_user", res.data.id_user);
                sessionStorage.setItem("avatar", res.data.avatar);
                sessionStorage.setItem("name", res.data.name);
                sessionStorage.setItem("refresh_token", res.data.refresh_token);
                sessionStorage.setItem("role", res.data.role);
                sessionStorage.setItem("token", res.data.token);

                this.setState({notif: ""});
                this.props.history.push("/");
                return;
            }
        }).catch(err => {
            if (err.response.status === 401) {
                this.setState({notif: "(*) Email hoặc mật khẩu không chính xác"});
            } else if (err.response.status === 403) {
                this.setState({notif: "(*) Lỗi kết nối cơ sở dữ liệu"});
            } else if (err.response.status === 405) {
                this.setState({notif: "(*) Vui lòng xác nhận email"});
            }
        })
    }
    onCheckSaveAccount = (e) => {
        this.setState({checkSaveAccount: !this.state.checkSaveAccount});
    }
    onBlurEmail = () => {
        if (this.state.user.email.length === 0)
            this.setState({notif: "(*) Email không được để trống"});
        else
            this.setState({notif: ""});
    }
    onBlurPassword = () => {
        if (this.state.user.password.length === 0)
            this.setState({notif: "(*) Password không được để trống"});
        else
            this.setState({notif: ""});
    }
    render() {
        document.body.style.backgroundColor = "#394141";
        return (
            <div className="login">
                <div className="header center col col-5 container">
                    <Link to="/"><img className="center" src={logo_img} height='250px' width='250px' alt=""/></Link>
                </div>
                <div className="container">
                    <div className="login-form">
                        <div className="main">
                            <div className="form">
                                <form onSubmit={this.onSubmit}>
                                    <div className="info">
                                        <input placeholder="E-mail"
                                            name="email"
                                            className="user"
                                            type="text"
                                            required=""
                                            onChange={this.onChangeEmail}
                                            onBlur={this.onBlurEmail}
                                        />
                                        <span className="icon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="info">
                                        <input placeholder="Mật khẩu"
                                            name="password"
                                            className="pass"
                                            type="password"
                                            required=""
                                            onChange={this.onChangePassword}
                                            onBlur={this.onBlurPassword}
                                        />
                                        <span className="icon2"><i className="fa fa-unlock" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="form-check mt-2 ml-1">
                                        <input className="form-check-input" type="checkbox" checked={this.state.checkSaveAccount} onChange={this.onCheckSaveAccount}/>
                                        <label className="form-check-label text-muted mt-1">
                                            Ghi nhớ đăng nhập
                                        </label>
                                    </div>
                                    {this.state.notif.length>0 ? <p className="text-danger mt-1">{this.state.notif}</p>: ""}
                                    <div className="forget">
                                        <h6><a className="text-muted" href="/">Quên mật khẩu?</a></h6>
                                        <div className="submit">
                                            <button type="submit" className="btn btn-success center" onClick={this.onSubmit}>Đăng nhập</button>
                                        </div>
                                        <div className="register center-text">
                                            <h5 className="text-muted">Bạn chưa có tài khoản? <a className="text-muted" href="/dang-ky">Đăng ký</a></h5>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        setRole: (role) => {
            dispatch(actions.setRole(role));
        }
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Login));
