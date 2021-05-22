import React, { Component } from 'react';
import '../../../style.css';
import { Link } from 'react-router-dom';
import AddListModal from './AddListModal';
import DeleteDialog from './DeleteDialog';
import * as actions from '../../../actions/employer/list';
import {connect} from 'react-redux';

class ListTitle extends Component {
    onClickUpdateList = () => {
        this.props.setUpdateList(true);
        window.$('#addListModal').modal('show');
    }
    deleteList() {
        window.$('#deleteDialog').modal('show');
    }
    onContact(){
        window.$('#sendMailModal').modal('show');
    }
    render() {
        return (
            <div className="col-lg-4 mt-3">
                <div className="container position-sticky list-title bg-white rounded row p-3 mx-auto">
                    <div className="col-12 text-center mt-2"><p className="text-muted">Danh sách</p></div>
                    <div className="col-12 mt-3"><h1 className="h2 text-break text-center">{this.props.get_list.title}<Link to="#"><i className="fa fa-pencil-alt text-primary ml-3 size-icon" onClick={() => this.onClickUpdateList()}></i></Link></h1></div>
                    <div className="col-12 mt-3 text-center">
                        <button className="btn btn-primary" onClick={this.onContact}>Liên hệ</button>
                        <button className="btn btn-danger ml-2" onClick={this.deleteList}>Xóa</button>
                    </div>
                </div>
                <AddListModal get_list={true} />
                <DeleteDialog get_list={true} />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        get_list: state.get_list
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
        setUpdateList: (update) => {
            return dispatch(actions.setUpdateList(update))
        },
        setIdList: (id) => {
            return dispatch(actions.setIdList(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListTitle);
