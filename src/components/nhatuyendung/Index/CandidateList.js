import React, { Component } from 'react';
import CandidateItem from './CandidateItem';
import ModalList from './ModalList';
import './style.css'
class CandidateList extends Component{
  render(){
      return (
        <div className="col-md-8">
            <div className="job-item">
                <CandidateItem />
                <CandidateItem />
            </div>
            <ModalList />
        </div>           
      );
  }
}
export default CandidateList;
