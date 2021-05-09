import React, { Component } from 'react';
import SettingProfile from '../../components/employer/SettingProfile';
import ChangePassword from '../../components/common/ChangePassword';

class AccountSetting extends Component{
    constructor(props) {
        super(props);
        this.state={
            page: 0
        };
    }
    onClickListGroup = (page) => {
        this.setState({page})
    }
    render(){
        document.body.style.backgroundColor = "#eceff1";
        
        return (
            <div>
                <h2 className="h2 text-center mt-5">- Cài đặt tài khoản -</h2>
                <div className="col col-10 mx-auto mt-5 row">
                    <div className="col-3 list-group">
                        <button type="button" onClick={() => this.onClickListGroup(0)} className={this.state.page === 0 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
                            Chỉnh sửa thông tin
                        </button>
                        <button type="button" onClick={() => this.onClickListGroup(1)} className={this.state.page === 1 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
                            Thay đổi mật khẩu
                        </button>
                        <button type="button" onClick={() => this.onClickListGroup(2)} className={this.state.page === 2 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
                            Cài đặt thông báo
                        </button>
                    </div>
                    <div className="col-9 bg-white rounded p-4 mb-5">
                        {this.state.page === 0 ? <SettingProfile></SettingProfile> : ""}
                        {this.state.page === 1 ? <ChangePassword></ChangePassword> : ""}
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountSetting;