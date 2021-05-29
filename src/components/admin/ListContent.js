import React, { Component } from "react";
import { getInfo } from "../../services/AdminService";
import LoginService from "../../services/LoginService";
import loading_gif from "../../image/loader.gif";
class ListContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            listInfo : "",
            loading: false
        }
    }
    logOut = () => {
        LoginService.logoutAPI();
    }
    componentDidMount() {
        this.setState({ loading: true });
        getInfo().then((res) => {
            this.setState({listInfo: res.data});
            this.setState({ loading: false });
        })
    }
    render() {
        let {listInfo} = this.state;
        return (
            <div className="col-lg-9 col-md-6 px-0">
                <div className="dark py-4 text-right pr-3 sticky-top">
                    <button className="btn btn-success text-truncate" onClick={this.logOut}>Đăng xuất</button>
                </div>
                <div className="p-5 row m-0">
                    <div className="col-4 p-2">
                        <div className="card border-secondary px-0">
                            <div className="card-header bg-white border-0">Số lượng nhà tuyển dụng</div>
                            <div className="card-body text-secondary">
                                <h2 className="h2 card-title text-center">{listInfo.count_employer}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-2">
                        <div className="card border-secondary px-0">
                            <div className="card-header bg-white border-0">Số lượng người tìm việc</div>
                            <div className="card-body text-secondary">
                                <h2 className="h2 card-title text-center">{listInfo.count_applicant}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-2">
                        <div className="card border-secondary px-0">
                            <div className="card-header bg-white border-0">Số lượng bài đăng</div>
                            <div className="card-body text-secondary">
                                <h2 className="h2 card-title text-center">{listInfo.count_post}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-2">
                        <div className="card border-secondary px-0">
                            <div className="card-header bg-white border-0">Số lượng cv</div>
                            <div className="card-body text-secondary">
                                <h2 className="h2 card-title text-center">{listInfo.count_cv}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-2">
                        <div className="card border-secondary px-0">
                            <div className="card-header bg-white border-0">Số lượng bài đăng còn thời hạn</div>
                            <div className="card-body text-secondary">
                                <h2 className="h2 card-title text-center">{listInfo.count_post_unexpired}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-2">
                        <div className="card border-secondary px-0">
                            <div className="card-header bg-white border-0">Số lượng tài khoản</div>
                            <div className="card-body text-secondary">
                                <h2 className="h2 card-title text-center">{listInfo.count_user}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.loading ? (
          <img
            className="center mb-5"
            src={loading_gif}
            alt=""
            width="50px"
          ></img>
        ) : (
          ""
        )}
            </div>
        );
    }
}
export default ListContent;
