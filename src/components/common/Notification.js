import React, { Component } from 'react';
import { Link } from "react-router-dom";
import img from "../../image/document-256.png";
import callApi from '../../utils/apiCaller';
import loading_gif from "../../image/loader.gif";
import socketConnector from "../../utils/socketio";

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "list_notify": [],
            "loading": false,
            "stop": false,
            "show": false,
            "num_notify": 0,
            "list_notify_socket": []
        };
        this.dropdownRef = React.createRef();
        this.listNotifySocketRef = React.createRef();
    }
    onScrollDown = () => {
        if (document.getElementById('notify-scroll-bar').scrollTop >= document.getElementById('notify-scroll-body').clientHeight - document.getElementById('notify-scroll-bar').clientHeight) {
            if (!this.state.loading && !this.state.stop) {
                this.setState({"loading": true});
                callApi("notification", 'POST', {"list_id_showed": this.state.list_notify.map((notify) => notify._id)}).then(rs => {
                    this.setState({"loading": false});
                    if (rs.data.list_notify.length > 0) {
                        this.state.list_notify.push(...rs.data.list_notify);
                        this.setState({"list_notify": [...this.state.list_notify]});
                    }
                    else {
                        this.setState({"stop": true})
                    }
                });
            }
        }
    }
    getData = () => {
        if (!this.state.show) {
            this.setState({"show": true})
            if (!this.state.loading && !this.state.stop) {
                this.setState({"list_notify": []});
                this.setState({"loading": true});
                callApi("notification", 'POST', {"list_id_showed": []}).then(rs => {
                    this.setState({"loading": false});
                    if (rs.data.list_notify.length > 0) {
                        this.setState(rs.data);
                    }
                    else {
                        this.setState({"stop": true});
                    }
                });
            }
        }
        else {
            this.setState({
                "list_notify": [],
                "loading": false,
                "stop": false,
                "show": false
            });
            this.setNumNotify();
        }
    }
    closeNotifySocket = (e, index) => {
        e.stopPropagation();
        const list_notify_socket = [...this.state.list_notify_socket];
        list_notify_socket.splice(index, 1);
        this.setState({list_notify_socket})
    }
    onClickNotifySocket = (e, index) => {
        e.stopPropagation();
        this.getData();
        this.setState({list_notify_socket: []})
    }
    handleClick = (e) => {
        const { target } = e
        if (!this.dropdownRef.current.contains(target) && !this.listNotifySocketRef.current.contains(target)) {
            if (this.state.show) {
                this.setState({
                    "list_notify": [],
                    "loading": false,
                    "stop": false,
                    "show": false
                });
                this.setNumNotify();
            }
        }
    }
    setNumNotify = () => {
        callApi("notification/count", 'get').then(rs => {
            this.setState(rs.data);
        });
    }
    componentDidMount() {
        document.addEventListener('click', this.handleClick);
        document.getElementById('notify-scroll-bar').addEventListener('scroll', this.onScrollDown);
        this.setNumNotify();
        const socket = socketConnector();
        socket.on('new', (data) => {
            this.setState({"num_notify": data.num_notify})
            this.state.list_notify_socket.push({
                content: data.content,
                id_attach: data.id_attach,
                img: data.img,
                time: data.time,
                type: data.type
            });
            this.setState({list_notify_socket: [...this.state.list_notify_socket]})
        });
    }
    componentWillUnmount(){
        document.removeEventListener('click', this.handleClick)
        document.getElementById('notify-scroll-bar').removeEventListener('scroll', this.onScrollDown);
    }
    render(){
        return (
            <li className="nav-item dropdown ml-lg-3">
                <div className="nav-link dropdown-toggle" onClick={this.getData} role="button" ref={this.dropdownRef}>
                    <i className="fa fa-bell size-icon"/>
                    {this.state.num_notify > 0 ? <p className="notify-badge">{this.state.num_notify}</p> : ""}
                </div>
                <div className={"dropdown-menu dropdown-menu-right drop overflow-auto notify-dropdown" + (this.state.show ? " show" : " hide")}  id="notify-scroll-bar">
                    <div id="notify-scroll-body">
                        {this.state.list_notify.length > 0 ? this.showListNotification(this.state.list_notify) : 
                            this.state.loading ? "" :
                            <div className="pt-5">
                                <img className="center mt-5 mb-4" src={img} alt="" width="150px" />
                                <h2 className="h2 text-center text-muted text-wrap mx-5">
                                    Không tìm thấy thông báo
                                </h2>
                            </div>
                        }
                        {this.state.loading ? <img className="center mt-2" src={loading_gif} alt="" width="50px" /> : ""}
                    </div>
                </div>
                <div className="position-fixed fixed-bottom right-0 p-3" ref={this.listNotifySocketRef}>
                    {this.showListNotificationSocket(this.state.list_notify_socket)}
                </div>
            </li>
        );
    }
    showListNotification = (list_notify) => {
        var result = null;
        if (list_notify.length > 0) {
            result = list_notify.map((notify, index) => {
                return (
                    <Link className="dropdown-item pt-3 px-3 pb-2" to={notify.type === "mail" ? "/hop-thu/" + notify.id_attach : "#"} key={index}>
                        <div className="row">
                            <div className="col col-2 logo">
                                <img
                                className="mx-auto avatar-mail rounded-circle" 
                                height="50px" width="50px"
                                src={notify.img}
                                alt=""
                                />
                            </div>
                            <div className="col col-10 px-3">
                                <div>
                                    <p className={notify.read ? "text-break text-wrap notify-item" : "text-break text-wrap notify-item font-weight-bold"}>{notify.content}</p>
                                </div>
                                <div>
                                    <p className="text-muted mt-3 text-right small">{notify.time}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            });
            return result;
        }
    }
    showListNotificationSocket = (list_notify) => {
        var result = null;
        if (list_notify.length > 0) {
            result = list_notify.map((notify, index) => {
                return (
                    <div id="liveToast" onClick={(e) => this.onClickNotifySocket(e, index)} className="toast show" role="button" data-delay="2000" key={index}>
                        <div className="toast-header">
                        <strong className="mr-auto">Thông báo</strong>
                        <button type="button" className="ml-2 mb-1 close" onClick={(e) => this.closeNotifySocket(e, index)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="toast-body">
                        <div className="row">
                            <div className="col col-2 logo">
                                <img
                                className="mx-auto avatar-mail rounded-circle" 
                                height="50px" width="50px"
                                src={notify.img}
                                alt=""
                                />
                            </div>
                            <div className="col col-10 px-3">
                                <div>
                                    <p className="text-break text-wrap notify-item">{notify.content}</p>
                                </div>
                                <div>
                                    <p className="text-muted mt-3 text-right small">{notify.time}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                );
            });
            return result;
        }
    }
}

export default Notification;
