import React, { Component } from 'react';
import Header from "../comm/Header";
import SearchForm from "../comm/SearchForm";
import Footer from "../comm/Footer";
import Candidate_Item from "./Candidate_Item";

class Index extends Component{
  render(){
      return (
        <div>
            <Header />
            <SearchForm />
            <div class="container-fluid">
                <div class="row">
                    <Candidate_Item />                    
                </div>
            </div>  
            <Footer />
        </div>   
      );
  }
}
export default Index;


