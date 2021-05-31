import React, { Component } from "react";
import ApplicantService from "../../services/ApplicantService";
import loading_gif from "../../image/loader.gif";

class RegisterApplicant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email:"",
            gender: false,
            dob: "1999-01-01",
            password: "",
            repassword: "",
            notif: {
                password: false,
                name: false,
                email: false,
                repassword: false
            },
            notifmess: "",
            loading: false
        }
    }
    
    onHandleChange = (e) => {
        const target = e.target;
        const name = target.name;
        let value = target.value;
        if (name === 'gender') value = (value === 'true');
        this.setState({
            [name]: value
        });
    }
    onBlurRePassword = () => {

        const { password, repassword } = this.state;
        if (password !== repassword) {
            const notif = this.state.notif;
            notif.repassword = true;
            this.setState({ notif });
        } else {
            const notif = this.state.notif;
            notif.repassword = false;
            this.setState({ notif });
        }

    }
    onBlurPassword = () => {
        const { password } = this.state;
        if (!password) {
            const notif = this.state.notif;
            notif.password = true;
            this.setState({ notif });
        } else {
            const notif = this.state.notif;
            notif.password = false;
            this.setState({ notif });
        }
        this.onBlurRePassword();
    }
    onBlurEmail = () => {
        const { email } = this.state;
        if (!email) {
            const notif = this.state.notif;
            notif.email = true;
            this.setState({ notif });

        } else {
            const notif = this.state.notif;
            notif.email = false;
            this.setState({ notif });
        }
    }
    onBlurName = () => {
        const { name } = this.state;
        if (!name) {
            const notif = this.state.notif;
            notif.name = true;
            this.setState({ notif });

        } else {
            const notif = this.state.notif;
            notif.name = false;
            this.setState({ notif });
        }
    }
    onChangeDob = (e) => {
        this.setState({"dob": e.target.value})
    }
    onHandleBlur = (e) => {
        
        const repassword = e.target.value;
        if(!repassword ){
            this.setState({notif: "(*) Mật khẩu không được để trống!"});
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const { name, email, gender, dob, password, repassword} = this.state;
        if(password === repassword && name && email && password){
            ApplicantService.fetchApplicantAPI(name, email, gender, new Date(dob), password).then(res => {
                this.setState({ loading: false });
                if (res.status === 201) {
                    window.location.href = "/dang-ky/xac-nhan";
                }
    
            }).catch(err => {
                this.setState({ loading: false });
                if (err.response.status === 400) {
                    this.setState({ notifmess: "(*) Vui lòng nhập đầy đủ thông tin" });
                } else if (err.response.status === 403) {
                    this.setState({ notifmess: "(*) Đăng ký không thành công.Vui lòng thử lại!" });
                } else if (err.response.status === 409) {
                    this.setState({ notifmess: "(*) Email đã tồn tại" });
                }
            })
        }else if(password !== repassword){
            this.setState({ loading: false });
            const notif = this.state.notif;
            notif.repassword = true;
            this.setState({ notif });
        }else if(!name){
            this.setState({ loading: false });
            const notif = this.state.notif;
            notif.name = true;
            this.setState({ notif });
        }else if(!email){
            this.setState({ loading: false });
            const notif = this.state.notif;
            notif.email = true;
            this.setState({ notif });
        }else if(!password){
            this.setState({ loading: false });
            const notif = this.state.notif;
            notif.password = true;
            this.setState({ notif });
        }
        
    }
    
     
    render() {
        document.body.style.backgroundColor = "#394141";
        return (
            
            <div className="col-lg-4 col-md-6 content jumbotron center mt-3">
                <h1 className="center h1">Đăng ký tài khoản</h1>
                <form >
                    <div className="info">
                        <label >Họ và tên (*):</label>
                        <input type="text" name="name"  className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurName} />

                    </div>
                    {this.state.notif.name === true ? <p className="text-danger mt-1">(*) Họ và tên không được để trống !</p> : ""}
                    <div className="info">
                        <label >E-mail (*):</label>
                        <input type="text" name="email"  className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurEmail} />

                    </div>
                    {this.state.notif.email === true ? <p className="text-danger mt-1">(*) Email không được để trống!</p> : ""}
                    <div className="info" >
                        <label >Giới tính:</label> &#12644;
                        <input type="radio" name="gender" value={false} onChange={this.onHandleChange} checked={this.state.gender === false} />&nbsp;Nam &#12644;
                        <input type="radio" name="gender" value={true} onChange={this.onHandleChange} checked={this.state.gender === true} />&nbsp;Nữ
                    </div>
                    <div className="info">
                        <label >Ngày sinh:</label>
                        <div><input type="date" value={this.state.dob} className="form-control" onChange={this.onChangeDob}/></div>
                    </div>
                   
                    <div className="info">
                        <label >Mật khẩu (*):</label>
                        <input type="password" name="password"  className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurPassword} />
                    </div>
                    {this.state.notif.password === true ? <p className="text-danger mt-1">(*) Mật khẩu không được để trống!</p> : ""}
                    <div className="info">
                        <label >Xác nhận lại mật khẩu (*):</label>
                        <input type="password" name="repassword"  className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurRePassword} />
                    </div>
                    {this.state.notif.repassword === true ? <p className="text-danger mt-1">(*) Mật khẩu không trùng khớp !</p> : ""}
                    {this.state.notifmess.length > 0 ? <p className="text-danger mt-1">{this.state.notifmess}</p> : ""}
                    {this.state.loading ? 
                        <div className="right-w3l">
                            <button type="button" className="btn btn-success center mt30" disabled>Đăng ký</button>
                            <img className="center" src={loading_gif} alt="" width="50px"></img>
                        </div>
                    : 
                        <div className="right-w3l">
                            <button type="button" className="btn btn-success center mt30" onClick={this.onSubmit}>Đăng ký</button>
                        </div>
                    }
                   
                </form>

            </div>
        );
    }
}
    
export default RegisterApplicant;