import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as services from '../../../services/ListService';
import * as actions from '../../../actions/employer/list';
import { withRouter } from 'react-router-dom'

class DeleteDialog extends Component {
    deleteList(id) {
        services.deleteList(id).then((res) => {
            if (this.props.get_list) {
                this.props.history.push("/danh-sach");
            } else {
                this.props.setPageList(0);
                this.props.setList(res.data.candidate_lists);
                this.props.setCountPageList(res.data.page);
            }
        });
        window.$('#deleteDialog').modal('hide');
    }
    render() {
        return (
            <div className="modal fade" id="deleteDialog" tabIndex="-1" role="dialog" aria-labelledby="deleteDialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Xóa danh sách</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Bạn có muốn xóa danh sách '{this.props.list_page.name_list}' không?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
                        <button type="button" className="btn btn-danger" onClick={() => this.deleteList(this.props.list_page.id_list)}>Xóa</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        list_page: state.list_page
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchSetList: (page) => {
            return dispatch(actions.fetchSetList(page));
        },
        setList: (list) => {
            return dispatch(actions.setList(list))
        },
        setPageList: (page) => {
            return dispatch(actions.setPageList(page))
        },
        setCountPageList: (page) => {
            return dispatch(actions.setCountPageList(page))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DeleteDialog));


