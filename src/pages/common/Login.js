import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import "../../style.css";
import logo_img from "../../image/LogoMakr-87TXng_pnsj0a.png";
import LoginService from "../../services/LoginService";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import { withRouter } from "react-router-dom";
import loading_gif from "../../image/loader.gif";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      },
      notif: "",
      checkSaveAccount: true,
      loading: false,
    };
    this.cookies = new Cookies();
  }
  onChangeEmail = (e) => {
    const email = e.target.value;
    const { user } = this.state;
    user.email = email;
    this.setState({ user });
  };
  onChangePassword = (e) => {
    const password = e.target.value;
    const { user } = this.state;
    user.password = password;
    this.setState({ user });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    LoginService.fetchLoginAPI(this.state.user.email, this.state.user.password)
      .then((res) => {
        if (res.status === 200) {
          this.setState({ loading: false });
          this.cookies.set("id_user", res.data.id_user, {
            expires: this.state.checkSaveAccount
              ? new Date(Date.now() + 604800000)
              : 0,
          });
          this.cookies.set("refresh_token", res.data.refresh_token, {
            expires: this.state.checkSaveAccount
              ? new Date(Date.now() + 604800000)
              : 0,
          });
          this.cookies.set("role", res.data.role, {
            expires: this.state.checkSaveAccount
              ? new Date(Date.now() + 604800000)
              : 0,
          });
          this.cookies.set("token", res.data.token, { expires: 0 });
          this.setState({ notif: "" });
          return;
        }
      })
      .then(res => {
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({ loading: false });
        if (err.response.status === 401) {
          this.setState({ notif: "(*) Email ho???c m???t kh???u kh??ng ch??nh x??c" });
        } else if (err.response.status === 403) {
          this.setState({ notif: "(*) L???i k???t n???i c?? s??? d??? li???u" });
        } else if (err.response.status === 405) {
          this.setState({ notif: "(*) Vui l??ng x??c nh???n email" });
        } else if (err.response.status === 412) {
          this.setState({ notif: "(*) T??i kho???n ???? b??? kh??a !" });
        }
      });
  };
  onCheckSaveAccount = (e) => {
    this.setState({ checkSaveAccount: !this.state.checkSaveAccount });
  };
  onBlurEmail = () => {
    if (this.state.user.email.length === 0)
      this.setState({ notif: "(*) Email kh??ng ???????c ????? tr???ng" });
    else this.setState({ notif: "" });
  };
  onBlurPassword = () => {
    if (this.state.user.password.length === 0)
      this.setState({ notif: "(*) Password kh??ng ???????c ????? tr???ng" });
    else this.setState({ notif: "" });
  };
  render() {
    document.body.style.backgroundColor = "#394141";
    return (
      <div className="login">
        <div className="header center col col-5 container">
          <Link to="/">
            <img
              className="center"
              src={logo_img}
              height="250px"
              width="250px"
              alt=""
            />
          </Link>
        </div>
        <div className="container">
          <div className="login-form">
            <div className="main">
              <div className="form">
                <form onSubmit={this.onSubmit}>
                  <div className="info">
                    <input
                      placeholder="E-mail"
                      name="email"
                      className="user"
                      type="text"
                      required=""
                      onChange={this.onChangeEmail}
                      onBlur={this.onBlurEmail}
                    />
                    <span className="icon1">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="info">
                    <input
                      placeholder="M???t kh???u"
                      name="password"
                      className="pass"
                      type="password"
                      required=""
                      onChange={this.onChangePassword}
                      onBlur={this.onBlurPassword}
                    />
                    <span className="icon2">
                      <i className="fa fa-unlock" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="form-check mt-2 ml-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={this.state.checkSaveAccount}
                      onChange={this.onCheckSaveAccount}
                    />
                    <label className="form-check-label text-muted mt-1">
                      Ghi nh??? ????ng nh???p
                    </label>
                  </div>
                  {this.state.notif.length > 0 ? (
                    <p className="text-danger mt-1">{this.state.notif}</p>
                  ) : (
                    ""
                  )}
                  <div className="forget">
                    <h6>
                      <a className="text-muted" href="/quen-mat-khau">
                        Qu??n m???t kh???u?
                      </a>
                    </h6>
                    {this.state.loading ? (
                      <div className="submit">
                        <button
                          type="submit"
                          className="btn btn-success center"
                          disabled
                        >
                          ????ng nh???p
                        </button>
                        <img
                          className="center"
                          src={loading_gif}
                          alt=""
                          width="50px"
                        ></img>
                      </div>
                    ) : (
                      <div className="submit">
                        <button
                          type="submit"
                          className="btn btn-success center"
                          onClick={this.onSubmit}
                        >
                          ????ng nh???p
                        </button>
                      </div>
                    )}

                    <div className="register center-text">
                      <h5 className="text-muted">
                        B???n ch??a c?? t??i kho???n?{" "}
                        <a className="text-muted" href="/dang-ky">
                          ????ng k??
                        </a>
                      </h5>
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
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Login));
