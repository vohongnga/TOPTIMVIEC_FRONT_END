import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
import LoginService from "../../services/LoginService";

class ChangePassword extends Component{
    constructor(props) {
        super(props);
        this.state={
            old_password: "",
            new_password: "",
            re_new_password: "",
            old_password_notif: false,
            new_password_notif: false,
            re_new_password_notif: false,
            incorrect: false
        };
    }
    onChangeOldPassword = (e) => {
        this.setState({old_password: e.target.value});
    }
    onChangeNewPassword = (e) => {
        this.setState({new_password: e.target.value});
    }
    onChangeReNewPassword = (e) => {
        this.setState({re_new_password: e.target.value});
    }
    onBlurOldPassword = () => {
        if (this.state.old_password === "") {
            this.setState({old_password_notif: true})
        }
        else {
            this.setState({old_password_notif: false})
        }
    }
    onBlurNewPassword = () => {
        if (this.state.new_password === "") {
            this.setState({new_password_notif: true})
        }
        else {
            this.setState({new_password_notif: false})
        }
    }
    onBlurReNewPassword = () => {
        if (this.state.re_new_password !== this.state.new_password) {
            this.setState({re_new_password_notif: true})
        }
        else {
            this.setState({re_new_password_notif: false})
        }
    }
    onSubmitPassword = (e) => {
        e.preventDefault()
        if (this.state.old_password === "") {
            this.setState({old_password_notif: true})
        }
        else if (this.state.new_password === "") {
            this.setState({new_password_notif: true})
        }
        else if (this.state.re_new_password !== this.state.new_password) {
            this.setState({re_new_password_notif: true})
        }
        else {
            callApi("reset-password", "PUT", {
                "old_password": this.state.old_password,
                "new_password": this.state.new_password
            }).then(rs => {
                // LoginService.logoutAPI();
                if (rs) {
                    LoginService.logoutAPI();
                }
                else {
                    this.setState({incorrect: true})
                }
            });
        }
    }
    render(){
        return (
            <div>
                <h5 className="h5 mb-4">?????i m???t kh???u</h5>
                <form className="mt-2" onSubmit={this.onSubmitPassword}>
                    <div className="form-group">
                        M???t kh???u c?? (*)
                        <input type="password" className="form-control mt-3" placeholder="M???t kh???u c??" onChange={this.onChangeOldPassword} onBlur={this.onBlurOldPassword}></input>
                    </div>
                    {this.state.old_password_notif?<div className="text-danger mb-3">M???t kh???u c?? kh??ng ???????c ????? tr???ng</div>:""}
                    <div className="form-group">
                        M???t kh???u m???i (*)
                        <input type="password" className="form-control mt-3" placeholder="M???t kh???u m???i" onChange={this.onChangeNewPassword} onBlur={this.onBlurNewPassword}></input>
                    </div>
                    {this.state.new_password_notif?<div className="text-danger mb-3">M???t kh???u m???i kh??ng ???????c ????? tr???ng</div>:""}
                    <div className="form-group">
                        Nh???p l???i m???t kh???u m???i (*)
                        <input type="password" className="form-control mt-3" placeholder="Nh???p l???i m???t kh???u m???i" onChange={this.onChangeReNewPassword} onBlur={this.onBlurReNewPassword}></input>
                    </div>
                    {this.state.re_new_password_notif?<div className="text-danger mb-3">M???t kh???u kh??ng kh???p</div>:""}
                    {this.state.incorrect?<div className="text-danger mb-3">M???t kh???u c?? kh??ng ch??nh x??c</div>:""}
                    <button type="submit" className="btn btn-primary center mt-4" onClick={this.onSubmitPassword}>L??u</button>
                </form>
            </div>
        );
    }
}

export default ChangePassword;