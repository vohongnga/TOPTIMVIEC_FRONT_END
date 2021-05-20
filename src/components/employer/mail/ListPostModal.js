import React, { Component } from "react";
import callApi from "../../../utils/apiCaller";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as employer_action from "./../../../actions/employer/index";

class ListPostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPost: [],
      page: 1,
      count_page: 0,
      loading: false,
    };
  }
  setPage = (page) => {
    this.setState({ page: page });
    this.setState({ listPost: [] });
    this.setListPost(page);
  };
  setListPost = (page) => {
    this.setState({ loading: true });
    callApi("post/my?page=" + (page - 1), "GET").then((rs) => {
      this.setState({ listPost: rs.data.list_post });
      this.setState({ loading: false });
    });
  };
  setCountPage = () => {
    callApi("/post/my/page", "GET").then((rs) => {
      this.setState(rs.data);
    });
  };
  showPage = (page_count, page_choose) => {
    var result = null;
    if (page_count > 0) {
      const begin_page = +page_choose - 2 > 0 ? +page_choose - 2 : 1;
      const end_page =
        begin_page + 5 < page_count ? begin_page + 5 : page_count;
      const page_array = Array(end_page - begin_page + 1)
        .fill()
        .map((_, idx) => begin_page + idx - 1);
      result = page_array.map((page, index) => {
        return (
          <li
            className={
              page + 1 === +page_choose ? "page-item active" : "page-item"
            }
            key={page}
          >
            <button
              className="page-link"
              onClick={() => this.setPage(page + 1)}
            >
              {page + 1}
            </button>
          </li>
        );
      });
    }
    return result;
  };
  componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    let page = params.get("page");
    if (!page) page = 1;
    this.setState({ page: page });
    this.setListPost(1);
    this.setCountPage();
  }
  showHashtag = (listHashtag) => {
    var result = null;
    if (listHashtag.length > 0) {
      result = listHashtag.map((hashtag, index) => {
        return (
          <button
            key={index}
            type="button"
            className="btn btn-light btn-sm mr-1 mt-1"
          >
            {hashtag}
          </button>
        );
      });
    }
    return result;
  };
  onChoosePost = (list) => {
    this.props.choiceAttachPost(list);
    window.$("#listPostModal").modal("hide");
  };
  onClose() {
    window.$("#listPostModal").modal("hide");
  }
  render() {
    let { listPost } = this.state;
    return (
      <div
        className="modal fade bd-example-modal-lg dialog2"
        id="listPostModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="listPostModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Danh sách bài đăng</h5>
              <button type="button" className="close" onClick={this.onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body overflow-auto list-cv-modal">
              {listPost.map((list, index) => (
                <Link
                  to="#"
                  data-aos="fade-right"
                  key={index}
                  onClick={() => this.onChoosePost(list)}
                >
                  <div className="item row h-30 full-width mx-1 mb-3 rounded bg-grey big-hover border border-secondary py-3 px-1">
                    <div className="col col-2 logo ">
                      <img
                        className="mx-auto avatar-list-modal "
                        src={list.employer.avatar}
                        alt=""
                        height="100px"
                        width="100px"
                      />
                    </div>
                    <div className="col col-10">
                      <h4 className="h4 text-truncate">{list.title}</h4>
                      <div className="row mt-4 mb-1">
                        <div className="col-8 detail mb-0 pb-0">
                          <h5 className="text-truncate">
                            {list.employer.name}
                          </h5>
                          <div className="row pl-3 mt-3">
                            {this.showHashtag(list.hashtag)}
                          </div>
                        </div>
                        <div className="col-4 ml-auto city_and_posted_date h-100">
                          <p className="text-truncate text-right mt-1">
                            <i className="fa fa-dollar-sign mr-1 mb-2"></i>
                            {list.salary}
                          </p>
                          <br />
                          <div className="text-right">
                            <p className="text-truncate">{list.place}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <nav aria-label="Page navigation example ">
              <ul className="pagination page mb-2">
                <li className="page-item">
                  <button className="page-link" onClick={() => this.setPage(1)}>
                    Đầu
                  </button>
                </li>
                {this.showPage(this.state.count_page, this.state.page)}
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => this.setPage(this.state.count_page)}
                  >
                    Cuối
                  </button>
                </li>
              </ul>
            </nav>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.onClose}
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    choiceAttachPost: (post) => {
      return dispatch(employer_action.choiceAttachPost(post));
    },
  };
};
export default connect(null, mapDispatchToProps)(ListPostModal);
