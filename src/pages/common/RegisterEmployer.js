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
            notif: ""
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
    onHandleBlur = (e) => {
        
        let repassword = e.target.value;
        if(!repassword ){
            this.setState({notif: "(*) Mật khẩu không được để trống!"});
        }
       
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        let {name,email,password,repassword} = this.state;
        if(password !== repassword){
            this.setState({notif: "(*) Mật khẩu không trùng khớp!"});
        }else {
            EmployerService.fetchEmployerAPI(name,email,password).then(res => {
                
                    if(res.status === 201){
                        console.log("ok");
                        window.location.href = "/dang-ky/xac-nhan";
                    }
            
            }).catch(err => {
                if (err.response.status === 400) {
                    this.setState({notif: "(*) Vui lòng nhập đầy đủ thông tin"});
                } else if (err.response.status === 403) {
                    this.setState({notif: "(*) Lỗi kết nối cơ sở dữ liệu"});
                } else if (err.response.status === 409) {
                    this.setState({notif: "(*) Email đã tồn tại"});
                }
            })
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
                        <input type="text" name="name" id="" className="form-control" placeholder="" onChange={this.onHandleChange}/>
                        
                    </div>
                    <div className="info">
                        <label >E-mail (*):</label>
                        <input type="text" name="email" id="" className="form-control" placeholder="" onChange={this.onHandleChange}/>
                        
                    </div>
                    <div className="info">
                        <label >Mật khẩu (*):</label>
                        <input type="password" name="password" id="" className="form-control" placeholder="" onChange={this.onHandleChange}/>
                        
                    </div>
                    <div className="info">
                        <label >Xác nhận lại mật khẩu (*):</label>
                        <input type="password" name="repassword" id="" className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onHandleBlur}/>
                        
                    </div>
                    {this.state.notif.length>0 ? <p className="text-danger mt-1">{this.state.notif}</p>: ""}
                    <div className="right-w3l">
                     <button type="button" className="btn btn-success center mt30" onClick={this.onSubmit}>Đăng ký</button>
                    </div>
               </form>
               
           </div>
        );

    }
}
export default RegisterEmployer;