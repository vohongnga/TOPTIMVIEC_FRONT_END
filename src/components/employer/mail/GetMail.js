import { Component } from "react";
import { getMailById } from "../../../services/ReceiveMailService";

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
    };
  }
  componentDidMount() {
    var id = this.props.id;
    getMailById(id).then((detailMail) => {
      this.setState(detailMail);
    });
  }
  render() {
    return (
      <div className="col-lg-8 col-md-6 content jumbotron center mt-3 detail">
        <h2 className="title-mail">{this.state.title}</h2>
        <div className="row">
          <div className="col col-1 logo">
            <img
              className="mx-auto avatar"
              src={this.state.sender.avatar}
              alt=""
            />
          </div>
          <div className="col col-7">
            <h4 className="text-truncate">{this.state.sender.name}</h4>
            <p className="text-truncate">{this.state.sent_date}</p>
          </div>
        </div>
        <div className="row">
          <div className="col col-1"></div>
          <div className="col col-5">
            <p>{this.state.content}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default GetMail;
