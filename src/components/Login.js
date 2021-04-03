import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "../style.css"
import logo_img from "../image/LogoMakr-87TXng_pnsj0a.png"

class Login extends Component {

    render() {
        document.body.style.backgroundColor = "#394141";
        return (
            <div className="login">
                <div className="header">
                    <Link to="/"><img className="center" src={logo_img} height='250px' width='250px' alt=""/></Link>
                </div>
                <div className="container">
                    <div className="login-form">
                        <div className="main">
                            <div className="form">

                                <form>
                                    <div className="info">
                                        <input placeholder="E-mail"
                                            name="username"
                                            className="user"
                                            type="text"
                                            required=""
                                        />
                                        <span className="icon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="info">
                                        <input placeholder="Mật khẩu"
                                            name="password"
                                            className="pass"
                                            type="password"
                                            required=""

                                        />
                                        <span className="icon2"><i className="fa fa-unlock" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="forget">
                                        <h6><a href="/">Quên mật khẩu?</a></h6>
                                        <div className="submit">
                                            <button type="button" className="btn btn-success center">Đăng nhập</button>
                                        </div>
                                        <div className="register center-text">
                                            <h5>Bạn chưa có tài khoản? <a href="/dang-ky">Đăng ký</a></h5>
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
export default Login;