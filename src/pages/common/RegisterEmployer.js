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
    
    onSubmit = (e) => {
        e.preventDefault();
        let {name} = this.state;
        let {email} = this.state;
        let {password} = this.state;
        let {repassword} = this.state;
        EmployerService.fetchEmployerAPI(name,email,password,repassword).then(res => {
            //console.log("ok");
            if(res.status === 200){
                console.log("ok");
                this.setState({
                    name: name,
                    email:email,
                    password:password,
                    repassword:repassword
                })
                console.log("ok");
                window.location.href = "/dang-nhap";
            }
            window.location.href = "/dang-nhap";
        }).catch(err => {
            if (err.response.status === 400) {
                this.setState({notif: "(*) Vui lòng nhập đầy đủ thông tin"});
            } else if (err.response.status === 403) {
                this.setState({notif: "(*) Lỗi kết nối cơ sở dữ liệu"});
            } else if (err.response.status === 409) {
                this.setState({notif: "(*) Email đã tồn tại"});
             }//else if(this.state.password !== this.state.repassword){
            //     this.setState({notif: "(*) Mật khẩu không trùng khớp!"});
            // }
        })
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
                        <input type="text" name="password" id="" className="form-control" placeholder="" onChange={this.onHandleChange}/>
                        
                    </div>
                    <div className="info">
                        <label >Xác nhận lại mật khẩu (*):</label>
                        <input type="text" name="repassword" id="" className="form-control" placeholder="" onChange={this.onHandleChange}/>
                        
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