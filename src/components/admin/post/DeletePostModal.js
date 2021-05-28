import React, { Component } from "react";

class DeletePostModal extends Component {
    render () {
        return (
            <div className="modal fade" id="deletePostModal" tabIndex="-1" role="dialog" aria-labelledby="deletePostModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Xóa tin</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Bạn có muốn xóa tin này không?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
                        <button type="button" className="btn btn-danger" onClick={this.props.onDelete}>Xóa</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DeletePostModal;