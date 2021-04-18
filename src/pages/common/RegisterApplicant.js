import React, { Component } from "react";
import ApplicantService from "../../services/ApplicantService";

class RegisterApplicant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            gender: "",
            dob: "",
            password: "",
            repassword: "",
            notif: {
                password: false,
                name: false,
                email: false,
                repassword: false
            },
            notifmess: ""

        }
    }
    onHandleChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }
    onBlurRePassword = (e) => {

        let repassword = e.target.value;
        let password = e.target.value;
        if (password !== repassword) {
            let notif = this.state.notif;
            notif.repassword = true;
            this.setState({notif});
        }

    }
    onBlurPassword = (e) => {
        let password = e.target.value;
        if (!password) {
            let notif = this.state.notif;
            notif.password = true
            this.setState({ notif})
        }
    }
    onBlurEmail = (e) => {
        let email = e.target.value;
        if (!email) {
            let notif = this.state.notif;
            notif.email = true
            this.setState({ notif})
           
        }
    }
    onBlurName = (e) => {
        let name = e.target.value;
        if (!name) {
            let notif = this.state.notif;
            notif.name = true
            this.setState({ notif})
            
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        let { name, email, gender, dob, password } = this.state;

        ApplicantService.fetchApplicantAPI(name, email, gender, dob, password).then(res => {

            if (res.status === 201) {
                console.log("ok");
                window.location.href = "/dang-ky/xac-nhan";
            }

        }).catch(err => {
            if (err.response.status === 400) {
                this.setState({ notifmess: "(*) Vui lòng nhập đầy đủ thông tin" });
            } else if (err.response.status === 403) {
                this.setState({ notifmess: "(*) Lỗi kết nối cơ sở dữ liệu" });
            } else if (err.response.status === 409) {
                this.setState({ notifmess: "(*) Email đã tồn tại" });
            }
        })

    }
    render() {
        document.body.style.backgroundColor = "#394141";
        return (

            <div className="col-lg-4 col-md-6 content jumbotron center mt-3">
                <h1 className="center h1">Đăng ký tài khoản</h1>
                <form >
                    <div className="info">
                        <label >Họ và tên (*):</label>
                        <input type="text" name="name" id="" className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurName} />

                    </div>
                    {this.state.notif.name === true ? <p className="text-danger mt-1">(*) Họ và tên không được để trống !</p> : ""}
                    <div className="info">
                        <label >E-mail (*):</label>
                        <input type="text" name="email" id="" className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurEmail} />

                    </div>
                    {this.state.notif.email === true ? <p className="text-danger mt-1">(*) Email không được để trống!</p> : ""}
                    <div className="info">
                        <label >Giới tính:</label> &#12644;
                        <input type="radio" name="gender" value="false" onChange={this.onHandleChange} checked="checked" />&nbsp;Nam &#12644;
                        <input type="radio" name="gender" value="true" onChange={this.onHandleChange} />&nbsp;Nữ
                    </div>
                    <div className="info">
                        <label >Ngày sinh:</label>
                        <input type="text" name="dob" id="" className="form-control" placeholder="" onChange={this.onHandleChange} />
                    </div>
                    <div className="info">
                        <label >Mật khẩu (*):</label>
                        <input type="password" name="password" id="" className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurPassword} />
                    </div>
                    {this.state.notif.password === true ? <p className="text-danger mt-1">(*) Mật khẩu không được để trống!</p> : ""}
                    <div className="info">
                        <label >Xác nhận lại mật khẩu (*):</label>
                        <input type="password" name="repassword" id="" className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurRePassword} />
                    </div>
                    {this.state.notif.repassword === true? <p className="text-danger mt-1">(*) Mật khẩu không trùng khớp !</p> : ""}
                    {this.state.notifmess.length > 0 ? <p className="text-danger mt-1">{this.state.notif}</p> : ""}
                    <div className="right-w3l">
                        <button type="button" className="btn btn-success center mt30" onClick={this.onSubmit}>Đăng ký</button>
                    </div>
                </form>

            </div>
        );

    }
}
export default RegisterApplicant;