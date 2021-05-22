import React,{ Component } from "react";
import ForgetPasswordService from "../../services/ForgetPasswordService";

class ForgetPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            notifmess: ""
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
    onSubmit = (e) =>{
        e.preventDefault();
        let {email} = this.state;
        ForgetPasswordService.sendMailAPI(email).then((rs) =>{
            window.location.href = "/quen-mat-khau/xac-nhan-email";
        }).catch(err => {
            if (err.response.status === 400) {
                this.setState({ notifmess: "(*) Vui lòng nhập đúng định dạng email !" });
            } else if (err.response.status === 401) {
                this.setState({ notifmess: "(*) Email không tồn tại !" });
            } else if (err.response.status === 403) {
                this.setState({ notifmess: "(*) Có lỗi trong quá trình xử lý. Vui lòng thử lại !" });
            }
        })
        
    }
    render () {
        document.body.style.backgroundColor = "#eceff1 ";
        return (
            <div className="col-lg-4 col-md-6 content jumbotron center mt-5"> 
                <h2 className="h2">Vui lòng nhập địa chỉ email !</h2>
                <form >
                    <div className="form-group mt-3 mr-3 w-100 ">
                        <input type="text" placeholder="E-mail" className="form-control w-100" value={this.state.email} name="email" onChange={this.onHandleChange}/>  
                    </div>
                    {this.state.notifmess.length > 0 ? <p className="text-danger mt-1">{this.state.notifmess}</p> : ""}
                    <div className="submit">
                        <button type="submit" className="btn btn-success btn-email" onClick={this.onSubmit}>Tiếp theo</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default ForgetPassword;