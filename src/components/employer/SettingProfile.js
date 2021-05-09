import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
import ImageUploader from '../common/ImageUploader';

class SettingProfile extends Component{
    constructor(props) {
        super(props);
        this.state={
            avatar: "",
            bio: "",
            name: "",
            success: false,
            name_blank: false
        };
    }
    onChangeName = (e) => {
        this.setState({name: e.target.value});
    }
    onChangeBio = (e) => {
        this.setState({bio: e.target.value});
    }
    onBlurName = () => {
        if (this.state.name === "") {
            this.setState({name_blank: true})
        }
        else {
            this.setState({name_blank: false})
        }
    }
    onSubmitProfile = () => {
        if (this.state.name === "") {
            this.setState({name_blank: true})
        }
        else {
            callApi("profile", "PUT", {
                "name": this.state.name,
                "bio": this.state.bio
            }).then(rs => {
                this.setState({success: true});
            });
        }
    }
    onChangeAvatar = (url) => {
        callApi("avatar", "PUT", {
            "avatar": url
        }).then(rs => {
            this.setState({avatar: url});
        });
    }
    componentDidMount() {
        callApi("profile", "GET").then(rs => {
            this.setState(rs.data);
        })
    }
    render(){
        return (
            <div>
                <h5 className="h5 mb-4">Ảnh đại diện</h5>

                <ImageUploader imageUrl={this.state.avatar} onChange={this.onChangeAvatar}></ImageUploader>
                
                <h5 className="h5 mt-5 mb-4">Thông tin</h5>
                <div className="mt-2">
                    <div className="form-group">
                        Tên công ty (*)
                        <input type="text" className="form-control mt-3" placeholder="Tên công ty" value={this.state.name} onChange={this.onChangeName} onBlur={this.onBlurName}></input>
                    </div>
                    {this.state.name_blank?<div className="text-danger mb-3">Tên không được để trống</div>:""}
                    <div className="form-group">
                        Giới thiệu
                        <textarea className="form-control mt-3" placeholder="Giới thiệu" value={this.state.bio} onChange={this.onChangeBio}></textarea>
                    </div>
                    {this.state.success?<div className="text-success">Lưu thành công</div>:""}
                    <button type="submit" className="btn btn-primary center mt-4" onClick={this.onSubmitProfile}>Lưu</button>
                </div>
            </div>
        );
    }
}

export default SettingProfile;