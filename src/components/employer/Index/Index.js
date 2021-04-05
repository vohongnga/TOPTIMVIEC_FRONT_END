import React, { Component } from 'react';
import Header from "../../employer/comm/Header";
import SearchForm from "../../employer/comm/SearchForm";
import Footer from "../../employer/comm/Footer";
import CandidateList from "./CandidateList";

class Index extends Component{
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
export default Index;


