import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListContent extends Component {
  render() {
    return (
      <div className="col-lg-9 col-md-6 center p-4 rounded ">
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row">
              <div className="col-md-12">
                <h2 className="h2 text-index">TRANG QUẢN TRỊ VIÊN</h2>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="item row h-40 full-width mx-1 mb-3 rounded bg-grey big-hover border border-secondary py-3 px-1 col-3 text-center">
                <Link to="" className="">
                  <h4 className="h4">Quản lý tin</h4>
                </Link>
              </div>
              <div className="item row h-40 full-width mx-1 mb-3 rounded bg-grey big-hover border border-secondary py-3 px-1 col-3">
                <Link to="" className="">
                  <h4 className="h4">Quản lý cv </h4>
                </Link>
              </div>
              <div className="item row h-40 full-width mx-1 mb-3 rounded bg-grey big-hover border border-secondary py-3 px-1 col-3">
                <Link to="" className="">
                  <h4 className="h4">Quản lý công ty </h4>
                </Link>
              </div>
              <div className="item row h-40 full-width mx-1 mb-3 rounded bg-grey big-hover border border-secondary py-3 px-1 col-3">
                <Link to="" className="">
                  <h4 className="h4">Quản lý tài khoản</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListContent;
