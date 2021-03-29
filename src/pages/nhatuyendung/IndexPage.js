import React, { Component } from 'react';
import Header from './../../components/nhatuyendung/comm/Header';
import Footer from './../../components/nhatuyendung/comm/Footer'
import SearchForm from './../../components/nhatuyendung/comm/SearchForm';
import CandidateList from './../../components/nhatuyendung/Index/CandidateList';


class IndexPage extends Component{
  render(){
      return (
        <div>
            <Header />
            <SearchForm />
            <div class="container-fluid">
                <div class="row">
                    <CandidateList />                    
                </div>
            </div>  
            <Footer />
        </div>   
      );
  }
}
export default IndexPage;


