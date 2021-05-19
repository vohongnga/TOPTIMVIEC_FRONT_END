import React, { Component } from "react";
import { getMailById } from "../../../services/ReceiveMailService";
import loading_gif from "../../../image/loader.gif";
class GetMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      attach_cv: null,
      attact_post: null,
      content: "",
      sender: {
        _id: "",
        avatar: "",
        name: "",
      },
      title: "",
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    var id = this.props.id;
    getMailById(id).then((detailMail) => {
      this.setState(detailMail);
      this.setState({ loading: false });
    });
  }
  render() {
    return (
      <div className="col-lg-8 col-md-6 content center ct-mail bg-white rounded p-4">
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
                <p className="">{this.state.sent_date}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col col-8">
                <p>{this.state.content}</p>
              </div>
            </div>
          </div>
          
        )}
      </div>
    );
  }
}
export default GetMail;
