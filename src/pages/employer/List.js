import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/employer/list';
import loading_gif from './../../image/loader.gif';
import AddListModal from '../../components/employer/list/AddListModal';
import DeleteDialog from './../../components/employer/list/DeleteDialog';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "loading": true
        };
    }
    onClickAddList = () => {
        this.props.setNameList("");
        this.props.setUpdateList(false);
        window.$('#addListModal').modal('show');
    }
    onClickUpdateList = (name, id) => {
        this.props.setNameList(name);
        this.props.setIdList(id);
        this.props.setUpdateList(true);
        window.$('#addListModal').modal('show');
    }
    changePage = (page) => {
        this.props.setPageList(page);
        this.props.setList([]);
        this.setState({loading: true});
        this.props.fetchSetList(page).then(res => {
            this.setState({loading: false});
        });
    }
    deleteList(id, name) {
        this.props.setIdList(id);
        this.props.setNameList(name);
        window.$('#deleteDialog').modal('show');
    }
    componentDidMount() {
        this.props.setList([]);
        this.setState({loading: true});
        this.props.fetchSetList(0).then(res => {
            this.setState({loading: false});
        });
    }
    componentWillUnmount() {
        this.props.setList([]);
    }
    render() {
        document.body.style.backgroundColor = "#eceff1";
        return (
            <div>
                <h2 className="h2 text-center mt-5">- Quản lý danh sách -</h2>
                <div className="text-right col-10 mx-auto mt-3 p-0">
                    <button className="btn btn-success" onClick={this.onClickAddList}>Thêm danh sách</button>
                </div>
                <div className="col col-10 mx-auto bg-white rounded mt-2 px-4 pt-4 pb-1">
                    <table className="table table-hover">
                        <thead className="dark text-white">
                            <tr className="d-flex">
                                <th className="col-2">#</th>
                                <th className="col-8">Tên danh sách</th>
                                <th className="col-2">Hoạt động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showLists(this.props.list)}
                        </tbody>
                    </table>
                    {this.state.loading ? <img className="center" src={loading_gif} alt="" width="50px"></img> : ""}
                    <ul className="pagination justify-content-center mb-3">
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
                <AddListModal />
                <DeleteDialog />
            </div>
        );
    }
    showLists(lists) {
        var result = null;
        if (lists.length > 0) {
            result = lists.map((list, index) => {
                return (
                    <tr key={index}  className="d-flex">
                        <th scope="row" className="col-2">{this.props.list_page.page*20+index+1}</th>
                        <td className="col-8"><Link className="text-dark" to={"/danh-sach/"+list._id}>{list.name}</Link></td>
                        <td className="col-2">
                            <Link to="#" onClick={() => this.onClickUpdateList(list.name, list._id)}><i className="fa fa-pencil-alt text-warning"></i></Link>
                            <Link className="ml-2" to="#" onClick={() => this.deleteList(list._id, list.name)}><i className="fa fa-trash text-danger"></i></Link>
                        </td>
                    </tr>
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
        setUpdateList: (update) => {
            return dispatch(actions.setUpdateList(update))
        },
        setIdList: (id) => {
            return dispatch(actions.setIdList(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);