import React, { Component } from "react";
import LoginService from "../../../services/LoginService";
import callApi from "../../../utils/apiCaller";
import { Link } from "react-router-dom";
import loading_gif from "../../../image/loader.gif";
class CompanyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      list_employer: [],
      count_page: 0,
      page: 1,
      loading: false,
      status: ""
    };
  }
  logOut = () => {
    LoginService.logoutAPI();
  };
  searchCompany = (e) => {
    e.preventDefault();
    this.setCountPage();
    this.setPage(this.state.page);
  };
  setPage = (page) => {
    this.setState({ page: page });
    this.setState({ list_employer: [] });
    this.setListCompany(page);
  };
  setListCompany = (page) => {
    if (page > 0) {
      this.setState({ loading: true });
      callApi(
        "/admin/employer?name=" + this.state.name + "&page=" + (page - 1) + "&ban=" + this.state.status,
        "GET"
      ).then((rs) => {
        this.setState(rs.data);
        this.setState({ loading: false });
      });
    }
  };
  setCountPage = () => {
    callApi("/admin/employer/count?name=" + this.state.name + "&ban=" + this.state.status, "GET").then((rs) => {
      this.setState(rs.data);
    });
  };
  componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    let page = params.get("page");
    if (!page) {
      page = 1;
    }
    this.setState({ page: page });
    this.setListCompany(this.state.page);
    this.setCountPage();
  }
  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };
  onChangeStatus = (e) => {
    this.setState({status: e.target.checked});
  }
  onChoose = (e, id) => {
    e.stopPropagation(); 
    window.open("/cong-ty/" + id, "_blank");
  };
  onBan = (id) => {
    this.setState({ loading: true });
    callApi("/user/" + id + "/ban", "PUT").then((rs) => {
      this.setListCompany(this.state.page);
    });
  };
  onUnban = (id) => {
    this.setState({ loading: true });
    callApi("/user/" + id + "/unban", "PUT").then((rs) => {
      this.setListCompany(this.state.page);
    });
  };
  showCompany = (companies) => {
    let result = null;
    if (companies.length > 0) {
      result = companies.map((company, index) => {
        return (
          <tr key={index} className="">
            <th scope="row">{this.state.page * 8 + index - 7}</th>
            <td>
              <Link
                className="text-dark"
                to="#"
                onClick={(e) => this.onChoose(e, company._id)}
              >
                {company.name}
              </Link>
            </td>
            <td>
              {company.ban ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => this.onUnban(company._id)}
                >
                  Khóa
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={(e) => this.onBan(company._id)}
                >
                  Mở
                </button>
              )}
            </td>
          </tr>
        );
      });
      return result;
    }
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
  render() {
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
        <form className="row p-5 " onSubmit={this.searchCompany}>
          <div className="col-lg-8 col-md-6 ">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Tên công ty"
              onChange={this.onChangeName}
            />
          </div>
          <div className="col-lg-2 col-md-3 mt-1 mt-md-0 form-group form-check">
              <input type="checkbox" className="form-check-input big-checkbox mt-2 ml-2" name="status"  onChange={this.onChangeStatus} /> 
              <p className="ml-5 mt-2 text-large" >Đã khóa</p>
          </div>
          <div className="col-lg-2 col-md-3 mt-1 mt-md-0">
            <button
              type="submit"
              className="btn btn-success btn-lg btn-block word-wrap text-truncate"
              onClick={this.searchCompany}
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
                <th scope="col">Tên công ty</th>
                <th scope="col">Trạng thái</th>
              </tr>
            </thead>
            <tbody>{this.showCompany(this.state.list_employer)}</tbody>
          </table>
        </div>
        {this.state.loading ? (
          <img
            className="center mb-3"
            src={loading_gif}
            alt=""
            width="50px"
          ></img>
        ) : (
          ""
        )}
        <nav aria-label="Page navigation example ">
          <ul className="pagination page mb-5">
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
      </div>
    );
  }
}

export default CompanyContent;
