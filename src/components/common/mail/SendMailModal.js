import { Component } from "react";
import { Link } from 'react-router-dom';
class SendMailModal extends Component {
  render() {
    return (
      <div className="modal fade dialog1" tabIndex="-1" role="dialog" id="sendMailModal" aria-hidden="true" aria-labelledby="sendMailModal">
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
            <div className="modal-body">
              
              <input type="text" placeholder="Người nhận"/>
              <input type="text" placeholder="Chủ đề" />
              <div>
                  <input type="textarea" placeholder="Nội dung" />
                  <Link to="">Đính kèm file</Link>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary">
                Hủy
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SendMailModal;