import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ListPostModal from "./ListPostModal";
import { sendMail } from "../../../services/SendMailService";
import * as employer_action from "./../../../actions/employer/index";
class SendMailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
    this.sendMailRef = React.createRef();
  }
  onHandleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onChoosePost = () => {
    window.$("#listPostModal").modal("show");
  };
  onClose = () => {
    this.setState({
      title: "",
      content: "",
    });
    this.props.choiceAttachPost(null);
    window.$("#sendMailModal").modal("hide");
  };
  onClosePost = (e) => {
    e.stopPropagation();
    this.props.choiceAttachPost(null);
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
  onSubmit = () => {
    let receiver;
    if(this.props.id_applicant){
       receiver = [this.props.id_applicant];
    }else {
       receiver = this.props.get_list.list.map((re, index) => re.applicant);
    }
    
    let attach_post;
    if (this.props.choice_attach_post) {
      attach_post = this.props.choice_attach_post._id;
    } else {
      attach_post = "";
    }
    let attach_cv;
    if (this.props.choice_attach_cv) {
      attach_cv = this.props.choice_attach_cv._id;
    } else {
      attach_cv = "";
    }
    const { title, content } = this.state;
    sendMail(receiver, title, content, attach_post, attach_cv).then((res) => {
      this.onClose();
    });
  };
  handleClick = (e) => {
    const { target } = e;
    if (
      window.$("#sendMailModal").is(":visible") &&
      !window.$("#listPostModal").is(":visible") &&
      !this.sendMailRef.current.contains(target)
    ) {
      this.onClose();
    }
  };
  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }
  render() {
    const show_post = this.props.choice_attach_post;
    return (
      <div
        className="modal fade bd-example-modal-lg"
        id="sendMailModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="sendMailModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content" ref={this.sendMailRef}>
            <div className="modal-header">
              <h5 className="modal-title">Soạn thư</h5>
              <button type="button" className="close" onClick={this.onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body send-mail">
              <div className="form-group">
                <label htmlFor="title">Chủ đề</label>
                <input
                  className="mb-2 form-control"
                  type="text"
                  placeholder="Chủ đề"
                  size="60"
                  name="title"
                  id="title"
                  value={this.state.title}
                  onChange={this.onHandleChange}
                />{" "}
              </div>
              <div className="form-group">
                <label htmlFor="content">Nội dung</label>
                <textarea
                  className="form-control"
                  rows="5"
                  cols="63"
                  placeholder="Nội dung"
                  id="content"
                  name="content"
                  value={this.state.content}
                  onChange={this.onHandleChange}
                ></textarea>
              </div>
              {show_post ? (
                <div className="item row h-30 full-width mx-1 mb-3 rounded bg-white mt-2 border border-secondary p-3">
                  <div className="col col-2 logo pt-1">
                    <img
                      className="mx-auto avatar-list-modal "
                      src={show_post.employer.avatar}
                      alt=""
                      height="100px"
                      width="100px"
                    />
                  </div>
                  <div className="col col-10">
                    <div className="row mb-1">
                      <div className="col-8 detail mb-0 pb-0">
                        <h4 className="h4 text-truncate">{show_post.title}</h4>
                        <h5 className="text-truncate mt-3">
                          {show_post.employer.name}
                        </h5>
                        <div className="row pl-3 mt-3">
                          {this.showHashtag(show_post.hashtag)}
                        </div>
                      </div>
                      <div className="col-4 ml-auto city_and_posted_date h-100 text-right">
                        <Link
                          to="#"
                          className="btn btn-danger text-white"
                          role="button"
                          onClick={this.onClosePost}
                        >
                          Xóa
                        </Link>
                        <p className="text-truncate text-right mt-3">
                          <i className="fa fa-dollar-sign mr-1"></i>
                          {show_post.salary}
                        </p>
                        <br />
                        <div className="text-right">
                          <p className="text-truncate">{show_post.place}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="#" onClick={this.onChoosePost}>
                  Đính kèm
                </Link>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.onClose}
              >
                Hủy
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={this.onSubmit}
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
        <ListPostModal />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    get_list: state.get_list,
    choice_attach_post: state.choice_attach_post,
    choice_attach_cv: state.choice_attach_cv,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    choiceAttachPost: (post) => {
      return dispatch(employer_action.choiceAttachPost(post));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SendMailModal);
