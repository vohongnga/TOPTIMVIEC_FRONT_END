import React, { Component } from 'react';
import './style.css';

class SearchForm extends Component{
  render(){
      return (
         
        <div className="jumbotron">
               <div className="inline-block">
                    <form className="form-inline">
                        <div className="form-group">
                            
                            <input className="fa fa-search mr-2" type="text" name="search" id ="tag1" placeholder="&#xf002; Search..." />
                        </div>
                        <div className="form-group ">
                            <select name="" id="">
                                <option value="0">Địa điểm</option>                      
                            </select>
                        </div>
                        <div className="form-group ">
                            <button className="btn btn-success ml-2" type="submit">Search</button>
                        </div>
                    </form>
               </div>           
        </div>
       
      );
  }
}
export default SearchForm;
