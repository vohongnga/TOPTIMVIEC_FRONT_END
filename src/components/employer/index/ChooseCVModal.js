import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';

class ChooseCVModal extends Component{
  render(){
      return (
        <div className="modal fade show" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModal-label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="myModalTitle"> Thêm vào danh sách</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="list-group">
                            <Link to="" className="list-group-item list-group-item-action"><i className="fa fa-plus mr-2" aria-hidden="true"></i>Tạo danh sách mới</Link>
                            <Link to="" className="list-group-item list-group-item-action ">Active item</Link>
                            <Link to="" className="list-group-item list-group-item-action">Item</Link>
                            <Link to="" className="list-group-item list-group-item-action ">Disabled item</Link>
                        </div>                       
                    </div>   
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>  
      );
  }
}
const mapStateToProps = state => {
    return {
        choose_cv: state.choose_cv
    }
}
export default connect(mapStateToProps, null)(ChooseCVModal);