import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../../actions/employer/list';
import * as services from '../../../services/ListService';

class AddListModal extends Component {
    onChangeListName = (e) => {
        this.props.setNameList(e.target.value);
    }
    onAddNewList = (e) => {
        e.preventDefault();
        services.newList(this.props.list_page.name_list).then((res) => {
            this.props.setList(res.data.candidate_lists);
            this.props.setCountPageList(res.data.page);
            this.props.setPageList(0);
        });
        window.$('#addListModal').modal('hide');
    }
    onUpdateList = (e) => {
        e.preventDefault();
        services.updateList(this.props.list_page.id_list, this.props.list_page.name_list).then((res) => {
            if (this.props.get_list) {
                this.props.setTitleList(this.props.list_page.name_list);
            } else {
                this.props.setList(res.data.candidate_lists);
                this.props.setCountPageList(res.data.page);
                this.props.setPageList(0);
            }
        });
        window.$('#addListModal').modal('hide');
    }
    onClose = () => {
        window.$('#addListModal').modal('hide');
    }
    render() {
        return (
            <div className="modal fade dialog2" id="addListModal" tabIndex="-1" role="dialog" aria-labelledby="addListModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.props.list_page.update ? "Sửa danh sách" : "Thêm danh sách"}</h5>
                        <button type="button" className="close" onClick={this.onClose}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={this.props.list_page.update ? this.onUpdateList : this.onAddNewList}>
                        <div className="form-group">
                            <label htmlFor="list-name" className="col-form-label">Tên danh sách:</label>
                            <input type="text" className="form-control" id="list-name" onChange={this.onChangeListName} value={this.props.list_page.name_list} />
                        </div>
                    </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={this.onClose}>Hủy</button>
                        <button type="button" className="btn btn-success" onClick={this.props.list_page.update ? this.onUpdateList : this.onAddNewList}>{this.props.list_page.update ? "Sửa danh sách" : "Thêm danh sách"}</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
    showLists(lists) {
        var result = null;
        if (lists.length > 0) {
            result = lists.map((list, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{list.name}</td>
                        <td><Link to="#"><i className="fa fa-trash text-danger"></i></Link></td>
                    </tr>
                )
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        list: state.list,
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
        setNameList: (name_list) => {
            return dispatch(actions.setNameList(name_list))
        },
        setTitleList: (name_list) => {
            return dispatch(actions.setTitleList(name_list))
        },
        setCountPageList: (page) => {
            return dispatch(actions.setCountPageList(page))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddListModal);


