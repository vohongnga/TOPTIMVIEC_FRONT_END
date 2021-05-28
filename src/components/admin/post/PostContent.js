import React, { Component } from "react";
import LoginService from "../../../services/LoginService";
import callApi from "../../../utils/apiCaller";
import loading_gif from "../../../image/loader.gif";
import { Typeahead } from "react-bootstrap-typeahead";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";
import DeletePostModal from "./DeletePostModal";

class PostContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_post: [],
      count_post: 0,
      page: 1,
      loading: false,
      hashtag: [],
      place: "",
      job: "",
      choice_delete: ""
    };
  }
  logOut = () => {
    LoginService.logoutAPI();
  };
  setListPost = (page) => {
    if (page > 0) {
      this.setState({ loading: true });
      callApi(
        "/admin/post?title=" +
          this.state.job +
          "&page=" +
          (page - 1) +
          "&list_hashtag=" +
          this.state.hashtag +
          "&place=" +
          this.state.place,
        "GET"
      ).then((rs) => {
        this.setState(rs.data);
        this.setState({ loading: false });
      });
    }
  };
  onChangeJob = (e) => {
    this.setState({ job: e.target.value });
  };
  onChangeHashtag = (e) => {
    this.setState({ hashtag: e });
  };
  onChangePlace = (e) => {
    this.setState({ place: e.target.value });
  };
  setPage = (page) => {
    this.setState({ page: page });
    this.setState({ list_post: [] });
    this.setListPost(page);
  };
  setCountPage = () => {
    callApi(
      "/admin/post/count?title=" +
        this.state.job +
        "&list_hashtag=" +
        this.state.hashtag +
        "&place=" +
        this.state.place,
      "GET"
    ).then((rs) => {
      console.log(rs.data);
      this.setState(rs.data);
    });
  };
  componentDidMount() {
    if (this.props.list_hashtag.length === 0) {
      this.props.fetchListHashtag();
    }
    if (this.props.list_place.length === 0) {
      this.props.fetchListPlace();
    }
    const search = window.location.search;
    const params = new URLSearchParams(search);
    let page = params.get("page");
    if (!page) {
      page = 1;
    }
    this.setState({ page: page });
    this.setListPost(this.state.page);
    this.setCountPage();
  };
  onSubmitSearch = (e) => {
    e.preventDefault();
    this.setListPost(this.state.page);
    this.setCountPage();
  };
  onChoiceDelete = (e,id) => {
    e.stopPropagation();
    this.setState({choice_delete: id});
    window.$("#deletePostModal").modal('show');
  }
  onDelete = () => {
    callApi("post/" + this.state.choice_delete, "DELETE").then(rs => {
        console.log("ok");
        window.$("#deletePostModal").modal('hide');
        this.setPage(this.state.page);
    })
  }
  showPost = (posts) => {
    var result = null;
    if (posts.length > 0) {
      result = posts.map((post, index) => {
        return (
          <tr key={index} className="">
            <th scope="col">{this.state.page * 8 + index - 7}</th>
            <td>{post.title}</td>
            <td>{post.employer}</td>
            <td>{this.showHashtag(post.hashtag)}</td>
            <td>{this.showPlace(post.place)}</td>
            <td>
              <button type="button" className="btn btn-danger" onClick={(e) =>this.onChoiceDelete(e, post._id)}>
                Xóa
              </button>
            </td>
          </tr>
        );
      });
      return result;
    }
  };
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
      return result;
    }
  };
  showPlace = (listPlace) => {
    var result = null;
    if (listPlace.length > 0) {
      result = listPlace.map((place, index) => {
        return (
          <button
            key={index}
            type="button"
            className="btn btn-light btn-sm mr-1 mt-1"
          >
            {place}
          </button>
        );
      });
      return result;
    }
  };
  showListPlace = (list_place) => {
    var result = null;
    if (list_place.length > 0) {
      result = list_place.map((place, index) => {
        return (
          <option key={index} value={place}>
            {place}
          </option>
        );
      });
      return result;
    }
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
  render() {
    var ref = React.createRef();
    return (
      <div className="col-lg-9 col-md-6 px-0">
        <div className="dark py-4 text-right pr-3 sticky-top">
          <button
            className="btn btn-success text-truncate"
            onClick={this.logOut}
          >
            Đăng xuất
          </button>
        </div>
        <form className="col-lg-9 row p-5 " onSubmit={this.onSubmitSearch}>
        <div className="col-lg-8 col-md-6 mt-1 mt-md-0 mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Tên công việc"
              onChange={this.onChangeJob}
              name="job"
            />
          </div>
          <div className="col-lg-8 col-md-6 mt-1 mt-md-0">
            <Typeahead
              id="public-methods-example"
              labelKey="name"
              multiple
              options={this.props.list_hashtag}
              placeholder="Hashtag"
              ref={ref}
              size="large"
              onChange={this.onChangeHashtag}
              selected={this.state.hashtag}
            />
          </div>
          <div className="col-lg-2 col-md-3 mt-1 mt-md-0">
            <select
              className="form-control form-control-lg"
              onChange={this.onChangePlace}
              value={this.state.place}
            >
              <option value="">Địa điểm</option>
              {this.showListPlace(this.props.list_place)}
            </select>
          </div>
          <div className="col-lg-2 col-md-3 mt-1 mt-md-0">
            <button
              type="submit"
              className="btn btn-success btn-lg btn-block word-wrap text-truncate"
              onClick={this.onSubmitSearch}
            >
              Tìm kiếm
            </button>
          </div>
        </form>
        <div className="pl-5 pr-5 row m-0">
          <table className="table jumbotron content">
            <thead className="">
              <tr className="">
                <th scope="col">#</th>
                <th scope="col">Tên tin</th>
                <th scope="col">Tên công ty</th>
                <th scope="col">Hashtag</th>
                <th scope="col">Địa điểm</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>{this.showPost(this.state.list_post)}</tbody>
          </table>
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
        <nav aria-label="Page navigation example ">
          <ul className="pagination page">
            <li className="page-item">
              <button className="page-link" onClick={() => this.setPage(1)}>
                Đầu
              </button>
            </li>
            {this.showPage(this.state.count_post, this.state.page)}
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => this.setPage(this.state.count_post)}
              >
                Cuối
              </button>
            </li>
          </ul>
        </nav>
        <DeletePostModal  onDelete={this.onDelete}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list_hashtag: state.list_hashtag,
    list_place: state.list_place,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchListHashtag: () => {
      dispatch(actions.fetchListHashtag());
    },
    fetchListPlace: () => {
      dispatch(actions.fetchListPlace());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostContent);
