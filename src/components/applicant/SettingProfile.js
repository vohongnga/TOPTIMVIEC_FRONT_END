import React, { Component } from 'react';
import Moment from 'moment';
import callApi from '../../utils/apiCaller';
import ImageUploader from '../common/ImageUploader';
import {connect} from 'react-redux';
import * as actions from './../../actions/index';

class SettingProfile extends Component{
    constructor(props) {
        super(props);
        this.state={
            avatar: "",
            name: "",
            gender: true,
            dob: "1999-01-01",
            place: "",
            success: false,
            name_blank: false
        };
    }
    onChangeName = (e) => {
        this.setState({name: e.target.value});
    }
    onChangeGender = (e) => {
        this.setState({gender: e.target.value === "true" ? true : false});
    }
    onChangeDob = (e) => {
        this.setState({dob: e.target.value});
    }
    onChangePlace = (e) => {
        this.setState({place: e.target.value});
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
                name: this.state.name,
                dob: new Date(this.state.dob),
                gender: this.state.gender,
                place: this.state.place
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
            this.setState({
                name: rs.data.name,
                gender: rs.data.gender,
                avatar: rs.data.avatar,
                dob: Moment(rs.data.dob).format('yyyy-MM-DD'),
                place: rs.data.place
            });
        })
        if (this.props.list_place.length === 0) {
            this.props.fetchListPlace();
        }
    }
    render(){
        return (
            <div>
                <h5 className="h5 mb-4">Ảnh đại diện</h5>

                <ImageUploader imageUrl={this.state.avatar} onChange={this.onChangeAvatar}></ImageUploader>
                
                <h5 className="h5 mt-5 mb-4">Thông tin</h5>
                <div className="mt-2">
                    <div className="form-group">
                        Họ và tên (*):
                        <input type="text" className="form-control mt-3" placeholder="Họ và tên" value={this.state.name} onChange={this.onChangeName} onBlur={this.onBlurName} />
                    </div>
                    {this.state.name_blank === true ? <p className="text-danger mt-1 mb-3">(*) Họ và tên không được để trống !</p> : ""}
                    <div className="form-group">
                        Giới tính:
                        <div className="form-check mt-3">
                            <input className="form-check-input" type="radio" name="gender" id="gender1" value={false} onChange={this.onChangeGender} checked={this.state.gender === false} />
                            <label className="form-check-label" htmlFor="gender1">
                                Nam
                            </label>
                        </div>
                        <div className="form-check mt-3">
                            <input className="form-check-input" type="radio" name="gender" id="gender2" value={true} onChange={this.onChangeGender} checked={this.state.gender === true} />
                            <label className="form-check-label" htmlFor="gender2">
                                Nữ
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        Ngày sinh:
                        <div><input type="date" value={this.state.dob} className="form-control mt-3" onChange={this.onChangeDob}/></div>
                    </div>
                    <div className="form-group">
                        Địa điểm:
                        <select className="form-control mt-3" onChange={this.onChangePlace} value={this.state.place}>
                            <option value="">Địa điểm</option>
                            {this.showListPlace(this.props.list_place)}
                        </select>
                    </div>
                    {this.state.success?<div className="text-success">Lưu thành công</div>:""}
                    <button type="submit" className="btn btn-primary center mt-4" onClick={this.onSubmitProfile}>Lưu</button>
                </div>
            </div>
        );
    }
    showListPlace = (list_place) => {
        let result = null;
        if (list_place.length > 0) {
            result = list_place.map((place, index) => {
                return (
                    <option key={index} value={place}>{place}</option>
                );
            });
            return result;
        }
    }
}

const mapStateToProps = state => {
    return {
        list_place: state.list_place
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchListPlace: () => {
            dispatch(actions.fetchListPlace());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingProfile);
