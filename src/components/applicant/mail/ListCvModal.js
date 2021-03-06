import React, { Component } from "react";
import callApi from "../../../utils/apiCaller";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../../../actions/index";
import img from './../../../image/document-256.png';

class ListCvModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCv: [],
      page: 1,
      count_page: 0,
      loading: false,
    };
  }
  setPage = (page) => {
    this.setState({ page: page });
    this.setState({ listCv: [] });
    this.setListCv(page);
  };
  setListCv = (page) => {
    if (page > 0) {
      this.setState({ loading: true });
      callApi("cv/my?page=" + (page - 1), "GET").then((rs) => {
        this.setState({ listCv: rs.data.list_cv });
        this.setState({ loading: false });
      });
    }
  };
  setCountPage = () => {
    callApi("/cv/my/page", "GET").then((rs) => {
      this.setState(rs.data);
    });
  };
  showPage = (page_count, page_choose) => {
    let result = null;
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
  showHashtag = (listHashtag) => {
    let result = null;
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

  componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    let page = params.get("page");
    if (!page) page = 1;
    this.setState({ page: page });
    this.setListCv(this.state.page);
    this.setCountPage();
  }

  onChooseCv = (list) => {
    this.props.choiceAttachCv(list);
    window.$("#listCvModal").modal("hide");
  };
  onClose() {
    window.$("#listCvModal").modal("hide");
  }
  OnCreateCv = (e) => {
    window.open("/mau-cv", "_blank");
  };
  render() {
    const { listCv } = this.state;
    return (
      <div
        className="modal fade bd-example-modal-lg dialog2"
        id="listCvModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="listCvModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Danh s??ch c??ng vi???c</h5>
              <button type="button" className="close" onClick={this.onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body overflow-auto list-cv-modal">
              {listCv.length > 0 ? (
                listCv.map((list, index) => (
                  <Link
                    to="#"
                    data-aos="fade-right"
                    key={index}
                    onClick={() => this.onChooseCv(list)}
                  >
                    <div className="item row h-30 full-width mx-1 mb-3 rounded bg-grey big-hover border border-secondary pt-2 pb-2">
                      <div className="col col-2 logo ">
                        <img
                          className="mx-auto avatar-list-modal "
                          src={list.avatar}
                          alt=""
                          height="100px"
                          width="100px"
                        />
                      </div>
                      <div className="col col-10">
                        <h4 className="text-truncate">{list.name}</h4>
                        <div className="row mt-4 mb-1">
                          <div className="col-8 detail mb-0 pb-0">
                            <h5 className="text-truncate">{list.position}</h5>
                            <div className="row pl-3 mt-3 ">
                              {this.showHashtag(list.hashtag)}
                            </div>
                          </div>
                          <div className="col-4 ml-auto city_and_posted_date h-100">
                            <div className="text-right mt-3">
                              <p className="text-truncate">{list.place}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div>
                  <div>
                    <img className="center my-5" src={img} alt="" width="200px" />
                    <h2 className="h2 text-center text-muted">Kh??ng t??m th???y CV</h2>
                  </div>
                  <button className="btn btn-success center mt-4" onClick={(e) => this.OnCreateCv(e)}>
                    T???o ngay
                  </button>
                </div>
              )}
            </div>
            <nav aria-label="Page navigation example ">
              <ul className="pagination page mb-2">
                <li className="page-item">
                  <button className="page-link" onClick={() => this.setPage(1)}>
                    ?????u
                  </button>
                </li>
                {this.showPage(this.state.count_page, this.state.page)}
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => this.setPage(this.state.count_page)}
                  >
                    Cu???i
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
                H???y
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
    choiceAttachCv: (cv) => {
      return dispatch(actions.choiceAttachCv(cv));
    },
  };
};
export default connect(null, mapDispatchToProps)(ListCvModal);
