import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as services from '../../../services/ListService';
import * as actions from '../../../actions/employer/list';
import * as actions_index from './../../../actions/index';
import { withRouter } from 'react-router-dom'

class DeleteCVFromListDialog extends Component {
    deleteList = () => {
        this.props.setLoadingJob(true);
        this.props.setListCandidate([]);
        services.deleteCV(this.props.id, this.props.choose_cv).then((res) => {
            this.props.setLoadingJob(false);
            this.props.setListCandidate(res.data.list);
        })
        window.$('#deleteCVFromListDialog').modal('hide');
    }
    render() {
        return (
            <div className="modal fade" id="deleteCVFromListDialog" tabIndex="-1" role="dialog" aria-labelledby="deleteCVFromListDialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Xóa danh sách</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Bạn có muốn xóa ứng viên này khỏi '{this.props.get_list.title}' không?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
                        <button type="button" className="btn btn-danger" onClick={this.deleteList}>Xóa</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        get_list: state.get_list,
        choose_cv: state.choose_cv
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        setListCandidate: (list) => {
            return dispatch(actions.setListCandidate(list))
        },
        setLoadingJob: (loading) => {
            return dispatch(actions_index.setLoadingJob(loading));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DeleteCVFromListDialog));


