import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './../../actions/index';
import * as services from './../../services/ListService';
import { Typeahead } from 'react-bootstrap-typeahead';

class NewPost extends Component{

    constructor(props) {
        super(props);
        this.state={
            'hashtag':[],
            'title':'',
            'salary':0,
            'benefit': '',
            'description':'',
            'request':'',
            'address':'',
            'deadline':'',
            'place' : [],
            notif: {
                title: false,
                hashtag: false,
                salary: false,
                benefit: false,
                description:false,
                request:false,
                address:false,
                deadline:false,
                place:false
            },
            notifApi: "",
        };
    }

    onHandleChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }

    onBlurTitle = (e)=>{
        let { title } = this.state;
        if (!title) {
            let notif = this.state.notif;
            notif.title = true;
            this.setState({ notif });

        } else {
            let notif = this.state.notif;
            notif.title = false;
            this.setState({ notif });
        }
    }

    onBlurDescription = (e)=>{
        let { description } = this.state;
        if (!description) {
            let notif = this.state.notif;
            notif.description = true;
            this.setState({ notif });

        } else {
            let notif = this.state.notif;
            notif.description = false;
            this.setState({ notif });
        }
    }

    onBlurHashtag = (e)=>{
        let { hashtag } = this.state;
        if (!hashtag) {
            let notif = this.state.notif;
            notif.hashtag = true;
            this.setState({ notif });

        } else {
            let notif = this.state.notif;
            notif.hashtag = false;
            this.setState({ notif });
        }
    }

    onBlurRequest = (e)=>{
        let { request } = this.state;
        if (!request) {
            let notif = this.state.notif;
            notif.request = true;
            this.setState({ notif });

        } else {
            let notif = this.state.notif;
            notif.request = false;
            this.setState({ notif });
        }
    }

    onBlurAddress = (e)=>{
        let { address } = this.state;
        if (!address) {
            let notif = this.state.notif;
            notif.address = true;
            this.setState({ notif });

        } else {
            let notif = this.state.notif;
            notif.address = false;
            this.setState({ notif });
        }
    }

    onBlurBenefit = (e)=>{
        let { benefit } = this.state;
        if (!benefit) {
            let notif = this.state.notif;
            notif.benefit = true;
            this.setState({ notif });

        } else {
            let notif = this.state.notif;
            notif.benefit = false;
            this.setState({ notif });
        }
    }

    onBlurSalary = (e)=>{
        let { salary } = this.state;
        if (!salary) {
            let notif = this.state.notif;
            notif.salary = true;
            this.setState({ notif });

        } else {
            let notif = this.state.notif;
            notif.salary = false;
            this.setState({ notif });
        }
    }

    onChangeHashtag = (e) => {
        this.props.onChangeHashtag(e);
        let hashtag = this.state.hashtag;
        hashtag = e;
        this.setState({hashtag})
    }
onHandleChangeS= (e)=>{

const selected = document.querySelectorAll('#changePlace option:checked');
const values = Array.from(selected).map(el => el.value);
let place = values;
this.setState({place})
console.log(values);
}
    onSubmit = (e)=>{
        e.preventDefault();
        let { title, description, request, benefit, salary, place,hashtag,address,deadline} = this.state;
        if(title && description && request && benefit && salary && place && hashtag && address && deadline){
            services.newPost(title, description, request, benefit, salary, place,hashtag,address,deadline).then(res => {

                if (res.status === 200) {
                    console.log(res.data)
                }
                }).catch(err => {
                    if (err.status === 400) {
                        this.setState({ notifApi: "(*) Vui lòng nhập đầy đủ thông tin" });
                    } else if (err.status === 403) {
                        this.setState({ notifApi: "(*) Có lỗi xảy ra khi kết nối CSDL" });
                    } else if (err.status === 401) {
                        this.setState({ notifApi: "(*) Bạn không có quyền đăng tin tuyển dụng" });
                    }
                })

            console.log(this.state);
        }else if(!title){
            let notif = this.state.notif;
            notif.title = true;
            this.setState({ notif });
        }else if(!description){
            let notif = this.state.notif;
            notif.description = true;
            this.setState({ notif });
        }else if(!request){
            let notif = this.state.notif;
            notif.request = true;
            this.setState({ notif });
        }else if(!benefit){
            let notif = this.state.notif;
            notif.benefit = true;
            this.setState({ notif });
        }
        else if(!salary){
            let notif = this.state.notif;
            notif.salary = true;
            this.setState({ notif });
        }
        else if(!place){
            let notif = this.state.notif;
            notif.place = true;
            this.setState({ notif });
        }
        else if(!hashtag){
            let notif = this.state.notif;
            notif.hashtag = true;
            this.setState({ notif });
        }
        else if(!address){
            let notif = this.state.notif;
            notif.address = true;
            this.setState({ notif });
        }
    }

    componentDidMount() {
        if (this.props.list_hashtag.length === 0) {
            this.props.fetchListHashtag();
        }
        if (this.props.list_place.length === 0) {
            this.props.fetchListPlace();
        }
    }

    render(){
        document.body.style.backgroundColor = "#eceff1";
        var ref = React.createRef();

        return (

            <div className="col-10 mx-auto center mb-5 mt-4 center-text bg-white rounded p-4">
                <h2 className = "h2">Thêm bài tuyển dụng</h2>
                <form className = "mt-4 left-text" onSubmit={this.onSubmit}>
                    <div className="form-group ">
                        <label htmlFor="exampleFormControlInput1">Tên bài đăng</label>
                        <input type="email" name = "title" className="form-control mt-2" onChange={this.onHandleChange} onBlur={this.onBlurTitle} placeholder="Nhập tiêu đề"/>
                    </div>
                    {this.state.notif.title === true ? <p className="text-danger mt-1">(*) Tiêu đề không được để trống !</p> : ""}

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Mô tả công việc</label>
                        <textarea className="form-control  mt-2" name = "description" placeholder="Nhập mô tả công việc" rows="3" onChange={this.onHandleChange} onBlur = {this.onBlurDescription}></textarea>
                    </div>
                    {this.state.notif.description === true ? <p className="text-danger mt-1">(*) Mô tả công việc không được để trống !</p> : ""}

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Yêu cầu công việc</label>
                        <textarea className="form-control  mt-2"  name = "request" placeholder ="Nhập yêu cầu công việc" rows="3" onChange={this.onHandleChange} onBlur = {this.onBlurRequest}></textarea>
                    </div>
                    {this.state.notif.request === true ? <p className="text-danger mt-1">(*) Yêu cầu công việc không được để trống !</p> : ""}

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Quyền lợi</label>
                        <textarea className="form-control  mt-2" name = "benefit" placeholder="Nhập quyền lợi" rows="3" onChange={this.onHandleChange} onBlur={this.onBlurBenefit}></textarea>
                    </div>
                    {this.state.notif.benefit === true ? <p className="text-danger mt-1">(*) Quyền lợi không được để trống !</p> : ""}

                    <div className="form-group ">
                        <select className="form-control selectpicker" multiple  name = "place" id = "changePlace" onChange={this.onHandleChangeS} onBlur={this.onBlurPlace} >
                            <option value="">Địa điểm</option>
                            {this.showListPlace(this.props.list_place)}
                        </select>
                    </div>
                    {this.state.notif.place === true ? <p className="text-danger mt-1">(*) Thành phố không được để trống !</p> : ""}

                    <div className="form-group ">
                        <label htmlFor="exampleFormControlInput1">Lương</label>
                        <input type="text" name = "salary" className="form-control mt-2" placeholder = "Nhập mức lương" onChange={this.onHandleChange} onBlur={this.onBlurSalary}/>
                    </div>
                    {this.state.notif.salary === true ? <p className="text-danger mt-1">(*) Lương không được để trống !</p> : ""}

                    <div className="form-group ">
                        <label htmlFor="exampleFormControlInput1">Hạn nộp hồ sơ</label>
                        <input type="date" name = "deadline" className="form-control mt-2" placeholder = "Chọn hạn nộp hồ sơ"onChange={this.onHandleChange} onBlur={this.onBlurDeadline}/>
                    </div>
                    <div className="form-group ">
                        <label htmlFor="exampleFormControlInput1">Hashtag </label>
                        <Typeahead
                            id="public-methods-example"
                            name = "hashtag1"
                            labelKey="name"
                            multiple
                            options={this.props.list_hashtag}
                            placeholder="Tên công việc, vị trí..."
                            ref={ref}
                            onChange={this.onChangeHashtag}
                            selected={this.props.search_value.tag}
                        />
                    </div>
                    {this.state.notif.hashtag === true ? <p className="text-danger mt-1">(*) Hashtag không được để trống !</p> : ""}

                    <div className="form-group ">
                        <label htmlFor="exampleFormControlInput1">Địa chỉ </label>
                        <input type="text" name = "address" className="form-control mt-2" placeholder = "Nhập địa chỉ làm việc"onChange={this.onHandleChange} onBlur={this.onBlurAddress}/>
                    </div>
                    {this.state.notif.address === true ? <p className="text-danger mt-1">(*) Địa điểm không được để trống !</p> : ""}
                    {this.state.notifApi.length > 0 ? <p className="text-danger mt-1">{this.state.notifApi}</p> : ""}

                    <div>
                        <button type="submit" className="btn btn-success" onClick={this.onSubmit}>Submit</button>&nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-primary">Cancel</button>
                    </div>
                </form>
            </div>
        );
    }



    showListPlace = (list_place) => {
        var result = null;
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
        search_value: state.search_value,
        list_hashtag: state.list_hashtag,
        list_place: state.list_place
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeHashtag: (hashtag) => {
            dispatch(actions.changeHashtag(hashtag));
        },
        fetchListHashtag: () => {
            dispatch(actions.fetchListHashtag());
        },
        fetchListPlace: () => {
            dispatch(actions.fetchListPlace());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewPost));