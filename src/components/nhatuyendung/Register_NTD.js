import React, { Component } from "react";

class Register_NTD extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            
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
                        <input type="text" name="" id="" className="form-control" placeholder="" />
                        
                    </div>
                    <div className="info">
                        <label >E-mail (*):</label>
                        <input type="text" name="" id="" className="form-control" placeholder="" />
                        
                    </div>
                    <div className="info">
                        <label >Mật khẩu (*):</label>
                        <input type="text" name="" id="" className="form-control" placeholder="" />
                        
                    </div>
                    <div className="info">
                        <label >Xác nhận lại mật khẩu (*):</label>
                        <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                        
                    </div>
                    <div className="right-w3l">
                     <button type="button" className="btn btn-success center mt30">Đăng ký</button>
                    </div>
               </form>
               
           </div>
        );

    }
}
export default Register_NTD;