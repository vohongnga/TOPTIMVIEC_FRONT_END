import React, { Component } from 'react';
import Header from "../../components/employer/commom/Header";
import SearchForm from "../../components/employer/commom/SearchForm";
import Footer from "../../components/employer/commom/Footer";
import CandidateList from "../../components/employer/index/CandidateList";

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


