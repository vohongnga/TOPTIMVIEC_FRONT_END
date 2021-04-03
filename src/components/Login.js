import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../style.css"
import logo_img from "../image/LogoMakr-87TXng_pnsj0a.png"
import LoginService from "../services/LoginService";

class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
        user: {
          email: "",
          password: "",
          role: ""
        }
      }
    }
    componentDidMount(){
      let {user} = this.state;
        LoginService.fetchLoginAPI(user).then(user => {
            console.log(user);
        })
    }
    onChangeEmail = (e) => {
        let email = e.target.value;
        let {user} = this.state;
        user.email = email;
        this.setState({user});
        // validationSchema = {Yup.object().shape({
        //     email: Yup.string()
        //       .email()
        //       .required("Không được để trống")
              
        //   })}
        
    }
    onChangePassword = (e) => {
        let password = e.target.value;
        let {user} = this.state;
        user.password = password;
        this.setState({user})
    }
    
    onSubmit = () => {
        console.log(this.state.user)
        LoginService.fetchLoginAPI(this.state.user).then(data => {
            //console.log(data);
            //this.setState(data);
            //let role = data.role;
            // let token = data.token;
            // console.log(role);
            localStorage.setItem("avatar",data.avatar);
            localStorage.setItem("id_user",data.id_user);
            localStorage.setItem("name",data.name);
            localStorage.setItem("refresh_token",data.refresh_token);
            localStorage.setItem("role",data.role);
            let token = data.token;
            this.onSuccessSubmit(token);
        })
    }
    onSuccessSubmit = (token) => {
        if(token){
            window.location.href = "/";
           //console.log(token);
        }
    }
    render() {
        document.body.style.backgroundColor = "#394141";
        return (
            <div className="login">
                <div className="header">
                    <Link to="/"><img className="center" src={logo_img} height='250px' width='250px' /></Link>
                </div>
                <div className="container">
                    <div className="login-form">
                        <div className="main">
                            <div className="form">

                                <form>
                                    <div className="info">
                                        <input placeholder="E-mail"
                                            name="email"
                                            className="user"
                                            type="text"
                                            required=""
                                            onChange={this.onChangeEmail}
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
                                        />
                                        <span className="icon2"><i className="fa fa-unlock" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="forget">
                                        <h6><a >Quên mật khẩu?</a></h6>
                                        <div className="submit">
                                            <button type="button" className="btn btn-success center" onClick={this.onSubmit}>Đăng nhập</button>
                                        </div>
                                        <div className="register center-text">
                                            <h5>Bạn chưa có tài khoản? <a>Đăng ký</a></h5>
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