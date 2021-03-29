import React, { Component } from 'react';
import CandidateItem from './CandidateItem';
import './style.css'
class ModalList extends Component{
  render(){
      return (
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModal-label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="myModalTitle"> Thêm vào danh sách</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-plus" aria-hidden="true"></i>Tạo danh sách mới</a>
                            <a href="#" class="list-group-item list-group-item-action ">Active item</a>
                            <a href="#" class="list-group-item list-group-item-action">Item</a>
                            <a href="#" class="list-group-item list-group-item-action ">Disabled item</a>
                        </div>                       
                    </div>   
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>  
      );
  }
}
export default ModalList;
