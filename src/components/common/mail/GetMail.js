import React, { Component } from "react";
import Aos from "aos";
import Cookies from 'universal-cookie';
import { getMailById } from "../../../services/ReceiveMailService";
import loading_gif from "../../../image/loader.gif";
import JobItem from "../JobItem";
import CandidateItem from "../../employer/index/CandidateItem";
import ChooseCVModal from "../../employer/index/ChooseCVModal";
import {Link} from "react-router-dom";
import SendMailModal from "../../employer/mail/SendMailModal";
import SendMailCvModal from "../../applicant/mail/SendMailCvModal";
class GetMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      attach_cv: null,
      attach_post: null,
      content: "",
      sender: {
        _id: "",
        avatar: "",
        name: "",
      },
      title: "",
      loading: false,
      receiver : [],
      reply: false
    };
    Aos.init({duration: 1000});
    this.cookies = new Cookies();
  }
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
  showReceiver = (listReceiver) => {
    let result = null;
    if(listReceiver.length > 0) {
      result = listReceiver.map((receiver,index) => {
        return (
          <button
            key={index}
            type="button"
            className="btn btn-light btn-sm mr-1 mt-1"
          >
            {receiver.name}
          </button>
        )
      })
    }
    return result;
  }
  componentDidMount() {
    this.setState({ loading: true });
    const id = this.props.id;
    getMailById(id).then((detailMail) => {
      this.setState(detailMail);
      this.setState({ loading: false });
      if (this.cookies.get('id_user') === detailMail.sender._id) {
        this.setState({reply: false});
      }
      else {
        this.setState({reply: true});
      }
    });
  }
  onReply = () => {
    this.role = this.cookies.get('role');
    if(this.role === "applicant"){
      window.$("#sendMailCvModal").modal("show");
    }else if(this.role === "employer"){
      window.$("#sendMailModal").modal("show");
    }
    
  }
  render() {
    return (
      <div className="col-lg-8 col-md-6">
        <div className=" content center ct-mail bg-white rounded p-4">
          {this.state.loading ? (
            <img className="center " src={loading_gif} alt="" width="50px"></img>
          ) : (
            <div>
              <h2 className="title-mail">{this.state.title}</h2>
              <div className="row mt-4">
                <div className="logo ml-3">
                  <img
                    className="mx-auto avatar-mail rounded-circle" 
                    height="50px" width="50px"
                    src={this.state.sender.avatar}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <h2 className="text-name-mail">{this.state.sender.name}</h2>
                  <p>Tới: {this.showReceiver(this.state.receiver)}</p>
                  <p className="">Ngày: {this.state.sent_date}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className=" col col-8">
                  <p className="my-3">{this.state.content}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        {this.state.attach_post ? <div className="job-item mt-3"><JobItem job={this.state.attach_post} /></div> : ""}
        {this.state.attach_cv ? <div className="job-item mt-3"><CandidateItem job={this.state.attach_cv} /></div> : ""}
        <ChooseCVModal/>
        {this.state.reply ? <Link to="#" className="btn btn-success text-white mt-2" role="button" onClick={this.onReply}>Trả lời</Link> : ""}
        {this.role === "employer" ? <SendMailModal id_applicant={this.state.sender._id}/> : ""}
        {this.role === "applicant" ? <SendMailCvModal id_employer={this.state.sender._id}/> : ""}
      </div>
    );
  }
}

export default GetMail;
