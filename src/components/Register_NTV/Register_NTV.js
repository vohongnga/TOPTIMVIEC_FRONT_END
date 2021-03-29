import React, { Component } from "react";

class Register_NTV extends Component {
    render() {
        return (
            <div className="content">
                <h1>Đăng ký tài khoản</h1>
                <form >
                    <div className="form-group">
                        <label >Họ và tên (*):</label>
                        <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />

                    </div>
                    <div className="form-group">
                        <label >E-mail (*):</label>
                        <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />

                    </div>
                    <div className="form-group">
                        <label >Giới tính:</label> &#12644; 
                        <input type="radio" aria-label="Radio button for following text input" />Nam &#12644; 
                        <input type="radio" aria-label="Radio button for following text input" />Nữ
                    </div>
                    <div className="form-group">
                        <label >Ngày sinh:</label>
                        <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label >Mật khẩu (*):</label>
                        <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label >Xác nhận lại mật khẩu (*):</label>
                        <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="right-w3l">
                        <button type="button" className="btn btn-success">Đăng ký</button>
                    </div>
                </form>

            </div>
        );

    }
}
export default Register_NTV;