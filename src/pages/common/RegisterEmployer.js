import React, { Component } from "react";
import EmployerService from '../../services/EmployerService';


class RegisterEmployer extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            name: "",
            email: "",
            password: "",
            repassword: "",
            notif: {
                password: false,
                name: false,
                email: false,
                repassword: false
            },
            notifmess: "",
            
        }
    }

    onHandleChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name] : value
        });
    }
    
    onBlurRePassword = () => {

        let { password, repassword } = this.state;
        if (password !== repassword) {
            let notif = this.state.notif;
            notif.repassword = true;
            this.setState({ notif });
        } else {
            let notif = this.state.notif;
            notif.repassword = false;
            this.setState({ notif });
        }

    }
    onBlurPassword = () => {
        let { password } = this.state;
        if (!password) {
            let notif = this.state.notif;
            notif.password = true;
            this.setState({ notif });
        } else {
            let notif = this.state.notif;
            notif.password = false;
            this.setState({ notif });
        }
        this.onBlurRePassword();
    }
    onBlurEmail = () => {
        let { email } = this.state;
        if (!email) {
            let notif = this.state.notif;
            notif.email = true;
            this.setState({ notif });

        } else {
            let notif = this.state.notif;
            notif.email = false;
            this.setState({ notif });
        }
    }
    onBlurName = () => {
        let { name } = this.state;
        if (!name) {
            let notif = this.state.notif;
            notif.name = true;
            this.setState({ notif });

        } else {
            let notif = this.state.notif;
            notif.name = false;
            this.setState({ notif });
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        let {name,email,password,repassword} = this.state;
            if(password === repassword && name && email && password){
                EmployerService.fetchEmployerAPI(name,email,password).then(res => {
                
                    if(res.status === 201){
                        window.location.href = "/dang-ky/xac-nhan";
                    }
                
                }).catch(err => {
                    if (err.response.status === 400) {
                        this.setState({notifmess: "(*) Vui lòng nhập đầy đủ thông tin"});
                    } else if (err.response.status === 403) {
                        this.setState({notifmess: "(*) Đăng ký không thành công.Vui lòng thử lại!"});
                    } else if (err.response.status === 409) {
                        this.setState({notifmess: "(*) Email đã tồn tại"});
                    }
                })
            }else if(password !== repassword){
                let notif = this.state.notif;
                notif.repassword = true;
                this.setState({ notif });
            }else if(!name){
                let notif = this.state.notif;
                notif.name = true;
                this.setState({ notif });
            }else if(!email){
                let notif = this.state.notif;
                notif.email = true;
                this.setState({ notif });
            }else if(!password){
                let notif = this.state.notif;
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
                        <label>Tên công ty (*):</label>
                        <input type="text" name="name"  className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurName}/>
                        
                    </div>
                    {this.state.notif.name === true ? <p className="text-danger mt-1">(*) Tên công ty không được để trống !</p> : ""}
                    <div className="info">
                        <label >E-mail (*):</label>
                        <input type="text" name="email"  className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurEmail}/>
                        
                    </div>
                    {this.state.notif.email === true ? <p className="text-danger mt-1">(*) Email không được để trống!</p> : ""}
                    <div className="info">
                        <label >Mật khẩu (*):</label>
                        <input type="password" name="password"  className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurPassword} />
                        
                    </div>
                    {this.state.notif.password === true ? <p className="text-danger mt-1">(*) Mật khẩu không được để trống!</p> : ""}
                    <div className="info">
                        <label >Xác nhận lại mật khẩu (*):</label>
                        <input type="password" name="repassword"  className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurRePassword}/>
                        
                    </div>
                    {this.state.notif.repassword === true ? <p className="text-danger mt-1">(*) Mật khẩu không trùng khớp !</p> : ""}
                    {this.state.notifmess.length > 0 ? <p className="text-danger mt-1">{this.state.notifmess}</p> : ""}
                   
                    <div className="right-w3l">
                     <button type="button" className="btn btn-success center mt30" onClick={this.onSubmit}>Đăng ký</button>
                    </div>
               </form>
               
           </div>
        );

    }
}
export default RegisterEmployer;