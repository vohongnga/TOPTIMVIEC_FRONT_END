import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ListCvModal from "./ListCvModal";
import { sendMail } from "../../../services/SendMailService";
import * as actions from "./../../../actions/index";

class SendMailCvModal extends Component {
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

  onChooseCv = () => {
    window.$("#listCvModal").modal("show");
  };
  onClose = () => {
    this.setState({
      title: "",
      content: "",
    });
    this.props.choiceAttachCv(null);
    window.$("#sendMailCvModal").modal("hide");
  };
  onCloseCv = (e) => {
    e.stopPropagation();
    this.props.choiceAttachCv(null);
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
    const receiver = [this.props.id_employer];
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
      window.$("#sendMailCvModal").is(":visible") &&
      !window.$("#listCvModal").is(":visible") &&
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
    const show_cv = this.props.choice_attach_cv;
    return (
      <div
        className="modal fade bd-example-modal-lg"
        id="sendMailCvModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="sendMailCvModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content" ref={this.sendMailRef}>
            <div className="modal-header">
              <h5 className="modal-title">So???n th??</h5>
              <button type="button" className="close" onClick={this.onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body send-mail">
              <div className="form-group">
                <label htmlFor="title">Ch??? ?????</label>
                <input
                  className="mb-2 form-control"
                  type="text"
                  placeholder="Ch??? ?????"
                  size="60"
                  name="title"
                  id="title"
                  value={this.state.title}
                  onChange={this.onHandleChange}
                />{" "}
              </div>
              <div className="form-group">
                <label htmlFor="content">N???i dung</label>
                <textarea
                  className="form-control"
                  rows="5"
                  cols="63"
                  placeholder="N???i dung"
                  id="content"
                  name="content"
                  value={this.state.content}
                  onChange={this.onHandleChange}
                ></textarea>
              </div>

              {show_cv ? (
                <div className="item row h-30 full-width mx-1 mb-3 py-3 rounded bg-white mt-2 border border-secondary">
                  <div className="col col-2 logo pt-1">
                    <img
                      className="mx-auto avatar-list-modal "
                      src={show_cv.avatar}
                      alt=""
                      height="100px"
                      width="100px"
                    />
                  </div>
                  <div className="col col-10">
                    <h4 className="text-truncate">{show_cv.name}</h4>
                    <div className="row mt-4 mb-1">
                      <div className="col-8 detail mb-0 pb-0">
                        <h5 className="text-truncate">{show_cv.position}</h5>
                        <div className="row pl-3 mt-3">
                          {this.showHashtag(show_cv.hashtag)}
                        </div>
                      </div>
                      <div className="col-4 ml-auto city_and_posted_date h-100 text-right">
                        <Link
                          to="#"
                          className="btn btn-danger text-white"
                          role="button"
                          onClick={this.onCloseCv}
                        >
                          X??a
                        </Link>
                        <div className="text-right mt-3">
                          <p className="text-truncate">{show_cv.place}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="#" onClick={this.onChooseCv}>
                  ????nh k??m CV
                </Link>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.onClose}
              >
                H???y
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={this.onSubmit}
              >
                G???i
              </button>
            </div>
          </div>
        </div>
        <ListCvModal />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    choice_attach_post: state.choice_attach_post,
    choice_attach_cv: state.choice_attach_cv,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    choiceAttachCv: (cv) => {
      return dispatch(actions.choiceAttachCv(cv));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SendMailCvModal);
