import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/employer/list';

class List extends Component {
    componentDidMount() {
        this.props.fetchSetList(0);
    }
    render() {
        document.body.style.backgroundColor = "#eceff1";
        return (
            <div>
                <h2 className="h2 text-center mt-5">- Quản lý danh sách -</h2>
                <div className="text-right col-10 mx-auto mt-3 p-0">
                    <button className="btn btn-success">Thêm danh sách</button>
                </div>
                <div className="col col-10 mx-auto bg-white rounded mt-2 px-4 pt-4 pb-1">
                    <table className="table table-hover">
                        <thead className="dark text-white">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên danh sách</th>
                                <th scope="col">Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showLists(this.props.list)}
                        </tbody>
                    </table>
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
        list: state.list
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchSetList: (page) => {
            dispatch(actions.fetchSetList(page));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);


