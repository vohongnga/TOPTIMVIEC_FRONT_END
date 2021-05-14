import React, { Component} from 'react';
import MenuMail from "../../components/common/mail/MenuMail";
import GetMail from "../../components/common/mail/GetMail";
class DetaiMail extends Component {
  render() {
    document.body.style.backgroundColor = "#eceff1 ";
    return (
      <div className="col col-md-10 center mt-5">
        <h1 className="title-email">Hộp thư</h1>
        <div className="row">
          <MenuMail />
          <GetMail id={this.props.id} />
        </div>
      </div>
    );
  }
}
export default DetaiMail;
