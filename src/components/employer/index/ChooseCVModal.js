import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../../actions/employer/list';
import * as services from '../../../services/ListService';
import loading_gif from './../../../image/loader.gif';
import AddListModal from './../list/AddListModal';

class ChooseCVModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "loading": false
        };
    }
    changePage = (page) => {
        this.props.setPageList(page);
        this.props.setList([]);
        this.setState({loading: true});
        this.props.fetchSetList(page).then(res => {
            this.setState({loading: false});
        });
    }
    onClickAddList = () => {
        this.props.setNameList("");
        this.props.setUpdateList(false);
        window.$('#addListModal').modal('show');
    }
    componentDidMount() {
        this.props.fetchSetList(0);
    }
    render() {
        return (
            <div className="modal fade show" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModal-label" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myModalTitle"> Thêm vào danh sách</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="list-group overflow-auto">
                                <Link to="" className="list-group-item list-group-item-action" onClick={this.onClickAddList}><i className="fa fa-plus mr-2" aria-hidden="true"></i>Tạo danh sách mới</Link>
                                {this.state.loading ? <img className="center" src={loading_gif} alt="" width="50px"></img> : ""}
                                {this.showLists(this.props.list)}
                            </div>
                            <ul className="pagination justify-content-center mt-3">
                                <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Previous" onClick={this.props.list_page.page>0 ? () => this.changePage(this.props.list_page.page-1) : () => {} }>
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </Link>
                                </li>
                                {this.showPage(this.props.list_page.page_count, this.props.list_page.page)}
                                <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Next" onClick={this.props.list_page.page<this.props.list_page.page_count-1 ? () => this.changePage(this.props.list_page.page+1) : () => {} }>
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
                <AddListModal />
            </div>
        );
    }
    showLists(lists) {
        var result = null;
        if (lists.length > 0) {
            result = lists.map((list, index) => {
                return (
                    <Link to="" className="list-group-item list-group-item-action " key={index}>{list.name}</Link>
                )
            })
        }
        return result;
    }
    showPage = (page_count, page_choose) => {
        var result = null;
        if (page_count > 0) {
            result = [...Array(page_count).keys()].map((page, index) => {
                return (
                    <li className={index === page_choose ? "page-item active" : "page-item"} key={index}>
                        <Link className="page-link" to="#" onClick={() => this.changePage(index)}>
                            {index+1}
                        </Link>
                    </li>
                )
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        list: state.list,
        list_page: state.list_page,
        choose_cv: state.choose_cv
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
export default connect(mapStateToProps, mapDispatchToProps)(ChooseCVModal);