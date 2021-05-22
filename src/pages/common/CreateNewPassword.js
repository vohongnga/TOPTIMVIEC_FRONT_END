import React,{ Component } from "react";
import ForgetPasswordService from "../../services/ForgetPasswordService";

class CreateNewPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            password:"",
            repassword: "",
            notif : {
                password: false,
                repassword: false
            },
            notifmess: "",
        }
    }
    onHandleChange = (e) =>{
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name] : value
        })
    }
    onBlurRepassword = () => {
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
    onSubmit = (e) => {
        e.preventDefault();
        const search = window.location.search;
        const params = new URLSearchParams(search);
        let key = params.get('key');
        let id_user = params.get("id_user"); 
        let {password,repassword} = this.state;
        if(password === repassword){
            ForgetPasswordService.resetPasswordAPI(id_user,key,password).then((res) => {
                console.log("ok");
                window.location.href("/dang-nhap");
            }).catch(err =>{
                if (err.response.status === 400) {
                    this.setState({ notifmess: "(*) Vui lòng nhập đầy đủ thông tin!" });
                } else if (err.response.status === 401) {
                    this.setState({ notifmess: "(*) Id người dùng hoặc khóa xác thực không đúng !" });
                } else if (err.response.status === 403) {
                    this.setState({ notifmess: "(*) Có lỗi trong quá trình xử lý. Vui lòng thử lại !" });
                }
            })
        }else {
            let notif = this.state.notif;
            notif.repassword = true;
            this.setState({ notif });
        }
    }
    render () {
        document.body.style.backgroundColor = "#eceff1 ";
        return (
            <div className="col-lg-4 col-md-6 content jumbotron center mt-5"> 
            <h2 className="h2">Tạo mật khẩu mới !</h2>
            <form >
                <div className="form-group mt-3 mr-3 w-100 ">
                    <input type="text" placeholder="Mật khẩu mới" className="form-control w-100" value={this.state.password} name="password" onChange={this.onHandleChange}/>  
                </div>
                <div className="form-group mt-3 mr-3 w-100 ">
                    <input type="text" placeholder="Xác nhận mật khẩu mới" className="form-control w-100" value={this.state.repassword} name="repassword" onChange={this.onHandleChange} onBlur={this.onBlurRepassword}/>  
                </div>
                {this.state.notif.repassword === true ? <p className="text-danger mt-1">(*) Mật khẩu không trùng khớp !</p> : ""}
                {this.state.notifmess.length > 0 ? <p className="text-danger mt-1">{this.state.notifmess}</p> : ""}
                <div className="submit">
                    <button type="submit" className="btn btn-success btn-email" onClick={this.onSubmit}>Lưu mật khẩu</button>
                </div>
            </form>
        </div>
        )
    }
}
export default CreateNewPassword;