import React, { Component } from "react";
import LoginService from "../../services/LoginService";

class ListContent extends Component {
    logOut = () => {
        LoginService.logoutAPI();
    }
    render() {
        return (
            <div className="col-lg-9 col-md-6 px-0">
                <div className="dark py-4 text-right pr-3">
                    <button className="btn btn-success text-truncate" onClick={this.logOut}>Đăng xuất</button>
                </div>
                <div className="p-5 row m-0">
                    <div className="col-4 p-2">
                        <div className="card border-secondary px-0">
                            <div className="card-header bg-white border-0">Số bài đăng</div>
                            <div className="card-body text-secondary">
                                <h2 className="h2 card-title text-center">2000</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-2">
                        <div className="card border-secondary px-0">
                            <div className="card-header bg-white border-0">Số bài đăng</div>
                            <div className="card-body text-secondary">
                                <h2 className="h2 card-title text-center">2000</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-2">
                        <div className="card border-secondary px-0">
                            <div className="card-header bg-white border-0">Số bài đăng</div>
                            <div className="card-body text-secondary">
                                <h2 className="h2 card-title text-center">2000</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-2">
                        <div className="card border-secondary px-0">
                            <div className="card-header bg-white border-0">Số bài đăng</div>
                            <div className="card-body text-secondary">
                                <h2 className="h2 card-title text-center">2000</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-2">
                        <div className="card border-secondary px-0">
                            <div className="card-header bg-white border-0">Số bài đăng</div>
                            <div className="card-body text-secondary">
                                <h2 className="h2 card-title text-center">2000</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-2">
                        <div className="card border-secondary px-0">
                            <div className="card-header bg-white border-0">Số bài đăng</div>
                            <div className="card-body text-secondary">
                                <h2 className="h2 card-title text-center">2000</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ListContent;
