import React, { Component} from 'react';
import MenuMail from "../../components/common/mail/MenuMail";
import ListMailSend from "../../components/common/mail/ListMailSend";
class IndexMailSend extends Component {
  render() {
    document.body.style.backgroundColor = "#eceff1 ";
    return (
      <div className="col col-md-10 center mt-5">
        <h1 className="title-email">Hộp thư</h1>
        <div className="row">
          <MenuMail />
          <ListMailSend />
        </div>
      </div>
    );
  }
}
export default IndexMailSend;
