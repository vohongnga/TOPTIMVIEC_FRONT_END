import React, { Component } from 'react';

class List extends Component{
  render(){
      return (
        <div class="container">
            <h1>Danh sách</h1>  
            <table class="table">
                <thead>
                    <tr class = "row">
                        <th class="col-md-4">Tên</th>
                        <th class="col-md-4">Số lượng</th>
                        <th class="col-md-4">Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>  
        </div>   
      );
  }
}
export default List;

