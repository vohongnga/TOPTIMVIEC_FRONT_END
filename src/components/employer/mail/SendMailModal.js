import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ListPostModal from "./ListPostModal";
import callApi from "../../../utils/apiCaller";
import { sendMail } from "../../../services/SendMailService";
class SendMailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      title: "",
      content: "",
      
    };
  }
  onHandleChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };
  setListPost = (page) => {
    this.setState({ loading: true });
    callApi("post/my?page=" + (page - 1), "GET").then((rs) => {
      this.setState({ listPost: rs.data.list_post });
    });
  };
  onChoosePost = () => {
    window.$("#listPostModal").modal("show");
  };
  onClose = () => {
    this.props.choiceAttachPost(null);
    window.$("#sendMaiModal").modal("hide");
    
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
    }
    return result;
  };
  onSubmit = () => {
    let receiver = this.props.get_list.list.map((re, index) => re.applicant);
    console.log(receiver);
    let attach_post = null;
    if(attach_post === null ){
      attach_post = this.props.choice_attach_post._id;
    }else {
      attach_post = ""
    }
    let attach_cv = null;
    let {title,content} = this.state;
    sendMail(receiver,title,content,attach_cv,attach_post).then(res => {
      console.log('ok');
      window.$("#sendMaiModal").modal("hide");
    })

  };
  render() {
    let show_post = this.props.choice_attach_post;
    return (
      <div
        className="modal fade"
        id="sendMaiModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="sendMaiModal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Soạn thư</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body send-mail">
              {/* {this.props.get_list.list.map((receiver,index) => 
                  <input className="mb-2" type="text" placeholder="Người nhận" size="57" name="receiver" onChange={this.onHandleChange} key={index} value={receiver._id} /> 
              )}
              */}
              <input
                className="mb-2"
                type="text"
                placeholder="Chủ đề"
                size="60"
                name="title"
                onChange={this.onHandleChange}
              />{" "}
              <br />
              <textarea
                rows="5"
                cols="63"
                placeholder="Nội dung"
                name="content"
                onChange={this.onHandleChange}
              ></textarea>
              {show_post ? (
                <div className="item row h-30 full-width mx-1 mb-3 rounded bg-white mt-2 ct_post">
                  <div className="col col-2 logo pt-1">
                    <img
                      className="mx-auto avatar "
                      src={show_post.employer.avatar}
                      alt=""
                      height="50px"
                      width="100px"
                    />
                  </div>
                  <div className="col col-10">
                    <h4 className="text-truncate">{show_post.title}</h4>
                    <div className="row mt-4 mb-1">
                      <div className="col-8 detail mb-0 pb-0">
                        <h5 className="text-truncate">
                          {show_post.employer.name}
                        </h5>
                        <div className="row pl-3 mt-3">
                          {this.showHashtag(show_post.hashtag)}
                        </div>
                      </div>
                      <div className="col-4 ml-auto city_and_posted_date h-100">
                        <p className="text-truncate text-right mt-1">
                          <i className="fa fa-dollar-sign mr-1 mb-2"></i>
                          {show_post.salary}
                        </p>
                        <br />
                        <div className="text-right mt-3">
                          <p className="text-truncate">{show_post.place}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="#" onClick={this.onChoosePost}>
                  Đính kèm file
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
  };
};
export default connect(mapStateToProps, null)(SendMailModal);
