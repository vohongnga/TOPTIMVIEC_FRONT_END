import { Component } from "react";
import { Link } from "react-router-dom";
import callApi from '../../../utils/apiCaller';
import loading_gif from '../../../image/loader.gif';
class ListMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiveMailList: [],
      "page": 1,
      "count_page": 0,
      "loading": false,
    };
  }
  setPage = (page) => {
    this.setState({ "page": page });
    this.setState({ receiveMailList: [] });
    this.setListMail(page);
  };
  setListMail = (page) => {
    this.setState({ loading: true });
    callApi("mail?page=" + (page - 1), "GET").then((rs) => {
      this.setState({receiveMailList: rs.data.list_mail});
      this.setState({ loading: false });
    });
  };
  setCountPage = () => {
    callApi("/mail/page", "GET").then((rs) => {
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

    
    this.setState({ "page": page });
    this.setListMail(1);
    this.setCountPage();
  }

  render() {
    let { receiveMailList } = this.state;

    return (
      <div className="col-lg-8 col-md-6 content jumbotron center mt-3">
        <ul className="list-group mb">
          {receiveMailList.map((list,index) => (
            <Link to={"/hop-thu/" + list._id} key={index}>
              {list.read === false ? (
                <li className="list-group-item">
                  <strong>
                    <p className="text-name">{list.name}</p>
                    <p className="text-right">{list.sent_date}</p>
                  </strong>
                </li>
              ) : (
                <li className="list-group-item">
                  <p className="text-name">{list.name}</p>
                  <p className="text-right">{list.sent_date}</p>
                </li>
              )}
            </Link>
          ))}
        </ul>
        {this.state.loading ? <img className="center" src={loading_gif} alt="" width="50px"></img> : ""}
        <nav aria-label="Page navigation example">
          <ul className="pagination page">
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
export default ListMail;
