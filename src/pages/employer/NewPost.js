import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Moment from 'moment';
import * as actions from '../../actions/index';
import * as services from '../../services/ListService';
import { Typeahead } from 'react-bootstrap-typeahead';
import loading_gif from './../../image/loader.gif';

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'hashtag': [],
            'title': '',
            'salary': '',
            'benefit': '',
            'description': '',
            'request': '',
            'address': '',
            'deadline': Moment(new Date()).format('yyyy-MM-DD'),
            'place': [],
            notif: {
                title: false,
                hashtag: false,
                salary: false,
                benefit: false,
                description: false,
                request: false,
                address: false,
                deadline: false,
                place: false
            },
            notifApi: "",
            submiting: false,
            loading: true,
            action: "add"
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

    onBlurTitle = (e) => {
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

    onBlurDescription = (e) => {
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

    onBlurPlace = (e) => {
        let { place } = this.state;
        if (place.length === 0) {
            let notif = this.state.notif;
            notif.place = true;
            this.setState({ notif });

        } else {
            let notif = this.state.notif;
            notif.place = false;
            this.setState({ notif });
        }
    }

    onBlurHashtag = (e) => {
        let { hashtag } = this.state;
        if (hashtag.length === 0) {
            let notif = this.state.notif;
            notif.hashtag = true;
            this.setState({ notif });

        } else {
            let notif = this.state.notif;
            notif.hashtag = false;
            this.setState({ notif });
        }
    }

    onBlurRequest = (e) => {
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

    onBlurAddress = (e) => {
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

    onBlurBenefit = (e) => {
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

    onBlurSalary = (e) => {
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

    onChangeHashtag = (hashtag) => {
        this.setState({ hashtag })
    }

    onChangePlace = (place) => {
        this.setState({ place })
    }

    onSubmit = (e) => {
        e.preventDefault();
        let { title, description, request, benefit, salary, place, hashtag, address, deadline, action } = this.state;
        if (title && description && request && benefit && salary && place.length > 0 && hashtag.length > 0 && address && deadline) {
            this.setState({ submiting: true });
            if(action === 'add') {
                services.newPost(title, description, request, benefit, salary, place, hashtag, address, deadline)
                .then(res => {
                    this.setState({ submiting: false });
                    if (res.status === 200) {
                        this.props.history.push("/tin/" + res.data.id_post);
                    }
                })
                .catch(err => {
                    this.setState({ submiting: false });
                    if (err.status === 400) {
                        this.setState({ notifApi: "(*) Vui l??ng nh???p ?????y ????? th??ng tin" });
                    } else if (err.status === 403) {
                        this.setState({ notifApi: "(*) C?? l???i x???y ra khi k???t n???i CSDL" });
                    } else if (err.status === 401) {
                        this.setState({ notifApi: "(*) B???n kh??ng c?? quy???n ????ng tin tuy???n d???ng" });
                    }
                })
            } else {
                services.editPost(this.props.match.params.id, title, description, request, benefit, salary, place, hashtag, address, deadline)
                .then(res => {
                    this.setState({ submiting: false });
                    if (res.status === 200) {
                        this.props.history.push("/tin/" + this.props.match.params.id);
                    }
                })
                .catch(err => {
                    this.setState({ submiting: false });
                    if (err.status === 400) {
                        this.setState({ notifApi: "(*) Vui l??ng nh???p ?????y ????? th??ng tin" });
                    } else if (err.status === 403) {
                        this.setState({ notifApi: "(*) C?? l???i x???y ra khi k???t n???i CSDL" });
                    } else if (err.status === 401) {
                        this.setState({ notifApi: "(*) B???n kh??ng c?? quy???n ????ng tin tuy???n d???ng" });
                    }
                })
            }
        } else if (!title) {
            let notif = this.state.notif;
            notif.title = true;
            this.setState({ notif });
        } else if (!description) {
            let notif = this.state.notif;
            notif.description = true;
            this.setState({ notif });
        } else if (!request) {
            let notif = this.state.notif;
            notif.request = true;
            this.setState({ notif });
        } else if (!benefit) {
            let notif = this.state.notif;
            notif.benefit = true;
            this.setState({ notif });
        }
        else if (!salary) {
            let notif = this.state.notif;
            notif.salary = true;
            this.setState({ notif });
        }
        else if (place.length === 0) {
            let notif = this.state.notif;
            notif.place = true;
            this.setState({ notif });
        }
        else if (hashtag.length === 0) {
            let notif = this.state.notif;
            notif.hashtag = true;
            this.setState({ notif });
        }
        else if (!address) {
            let notif = this.state.notif;
            notif.address = true;
            this.setState({ notif });
        }
    }

    componentDidMount() {
        let match = this.props.match;
        if (match.params.id) {
            let id = match.params.id;
            this.setState({ loading: true });
            this.setState({ action: "edit" });
            services.getPost(id).then(res => {
                this.setState({ loading: false });
                this.setState(res.data.post);
                this.setState({"deadline": Moment(res.data.post.deadline).format('yyyy-MM-DD'),})
            }).catch(err => {
                this.setState({ loading: false });
            });
        }
        if (this.props.list_hashtag.length === 0) {
            this.props.fetchListHashtag();
        }
        if (this.props.list_place.length === 0) {
            this.props.fetchListPlace();
        }
    }

    render() {
        document.body.style.backgroundColor = "#eceff1";
        let ref = React.createRef();
        let h2 = "????ng tin tuy???n d???ng";
        let btn = "????ng b??i";
        if(this.state.action === "edit")
        {
            h2="S???a b??i ????ng";
            btn = "S???a b??i"
        }
        return (
            <div className="col-lg-8 mx-lg-auto col-md-10 mx-md-auto center mb-5 mt-5  center-text bg-white rounded p-4">
                {this.state.action !== "edit" || this.state.loading === false ?
                <div>
                        <h2 className="h2">{h2}</h2>
                        <form className="mt-4 left-text" onSubmit={this.onSubmit}>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Ti??u ????? b??i ????ng</label>
                                <input type="text" name="title" value={this.state.title} className="form-control mt-2" onChange={this.onHandleChange} onBlur={this.onBlurTitle} placeholder="Nh???p ti??u ?????" />
                                {this.state.notif.title === true ? <p className="text-danger">(*) Ti??u ????? kh??ng ???????c ????? tr???ng !</p> : ""}
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">M?? t??? c??ng vi???c</label>
                                <textarea className="form-control mt-2" name="description" value={this.state.description} placeholder="Nh???p m?? t??? c??ng vi???c" rows="10" onChange={this.onHandleChange} onBlur={this.onBlurDescription}></textarea>
                                {this.state.notif.description === true ? <p className="text-danger">(*) M?? t??? c??ng vi???c kh??ng ???????c ????? tr???ng !</p> : ""}
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Y??u c???u c??ng vi???c</label>
                                <textarea className="form-control mt-2" name="request" value={this.state.request} placeholder="Nh???p y??u c???u c??ng vi???c" rows="10" onChange={this.onHandleChange} onBlur={this.onBlurRequest}></textarea>
                                {this.state.notif.request === true ? <p className="text-danger">(*) Y??u c???u c??ng vi???c kh??ng ???????c ????? tr???ng !</p> : ""}
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Quy???n l???i</label>
                                <textarea className="form-control mt-2" name="benefit" value={this.state.benefit} placeholder="Nh???p quy???n l???i" rows="10" onChange={this.onHandleChange} onBlur={this.onBlurBenefit}></textarea>
                                {this.state.notif.benefit === true ? <p className="text-danger">(*) Quy???n l???i kh??ng ???????c ????? tr???ng !</p> : ""}
                            </div>
                            </div>
                            <div className="form-group ">
                                <label htmlFor="exampleFormControlInput1">Th??nh ph???</label>
                                <Typeahead
                                    id="public-methods-example"
                                    name="place1"
                                    className="mt-2"
                                    labelKey="name"
                                    multiple
                                    options={this.props.list_place}
                                    placeholder="Nh???p th??nh ph???"
                                    ref={ref}
                                    onChange={this.onChangePlace}
                                    onBlur={this.onBlurPlace}
                                    selected={this.state.place}
                                />
                                {this.state.notif.place === true ? <p className="text-danger">(*) Th??nh ph??? kh??ng ???????c ????? tr???ng !</p> : ""}
                            </div>

                            <div className="form-group ">
                                <label htmlFor="exampleFormControlInput1">L????ng</label>
                                <input type="text" name="salary" value={this.state.salary} className="form-control mt-2" placeholder="Nh???p m???c l????ng" onChange={this.onHandleChange} onBlur={this.onBlurSalary} />
                                {this.state.notif.salary === true ? <p className="text-danger">(*) L????ng kh??ng ???????c ????? tr???ng !</p> : ""}
                            </div>

                            <div className="form-group ">
                                <label htmlFor="exampleFormControlInput1">H???n n???p h??? s??</label>
                                <input type="date" name="deadline" value={this.state.deadline} className="form-control mt-2" min={Moment(new Date()).format('yyyy-MM-DD')} placeholder="Ch???n h???n n???p h??? s??" onChange={this.onHandleChange} onBlur={this.onBlurDeadline} />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="exampleFormControlInput1">Hashtag </label>
                                <Typeahead
                                    id="public-methods-example"
                                    name="hashtag1"
                                    className="mt-2"
                                    labelKey="name"
                                    multiple
                                    options={this.props.list_hashtag}
                                    placeholder="Nh???p hashtag"
                                    ref={ref}
                                    onChange={this.onChangeHashtag}
                                    onBlur={this.onBlurHashtag}
                                    selected={this.state.hashtag}
                                />
                                {this.state.notif.hashtag === true ? <p className="text-danger">(*) Hashtag kh??ng ???????c ????? tr???ng !</p> : ""}
                            </div>

                            <div className="form-group ">
                                <label htmlFor="exampleFormControlInput1">?????a ch??? </label>
                                <input type="text" name="address" value={this.state.address} className="form-control mt-2" placeholder="Nh???p ?????a ch??? l??m vi???c" onChange={this.onHandleChange} onBlur={this.onBlurAddress} />
                                {this.state.notif.address === true ? <p className="text-danger">(*) ?????a ch??? kh??ng ???????c ????? tr???ng !</p> : ""}
                            </div>
                            {this.state.notifApi.length > 0 ? <p className="text-danger">{this.state.notifApi}</p> : ""}

                            <div className="text-center mt-5">
                                <button type="submit" className="btn btn-success" disabled={this.state.submiting}>{btn}</button>
                                {this.state.submiting ? <img className="center" src={loading_gif} alt="" width="50px"></img> : ""}
                            </div>
                        </form>
                    </div>
                    : <img className="center mt-2" src={loading_gif} alt="" width="50px"></img>}
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