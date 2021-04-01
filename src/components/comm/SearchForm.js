import React, { Component } from 'react';
import '../../style.css';

class SearchForm extends Component{
  render(){
      return (
        <div className="index-search-div">
            <div className="col center center-vertical index-search-form rounded">
                <div className="form-row">
                    <div className="col-lg-8 col-md-6 mt-1 mt-md-0">
                        <input type="text" className="form-control form-control-lg" placeholder="Tên công việc, vị trí..."></input>
                    </div>
                    <div className="col-lg-2 col-md-3 mt-1 mt-md-0">
                        <select className="form-control form-control-lg">
                            <option defaultValue>Địa điểm</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-lg-2 col-md-3 mt-1 mt-md-0">
                        <button type="submit" className="btn btn-success btn-lg btn-block word-wrap text-truncate">Tìm kiếm</button>
                    </div>
                </div>
            </div>
        </div>
       
      );
  }
}
export default SearchForm;
