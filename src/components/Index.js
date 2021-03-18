import React, { Component } from 'react';
import Header from "./comm/Header";
import SearchForm from "./comm/SearchForm";
import JOB_ITEM from "./comm/JOB_ITEM";
import Advertisements from "./comm/Advertisements";
import Footer from "./comm/Footer";

// import { Route } from 'react-router';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
class Index extends Component{
  render(){
      return (
                //<Tooltips />
               
        <div>
            <Header />
            <SearchForm />
            <div class="container-fluid">
                <div class="row">
                    <JOB_ITEM />
                    <Advertisements />
                </div>
            </div>  
           
            <Footer/>
            
          </div>
         
        
      );
  }
}
export default Index;


