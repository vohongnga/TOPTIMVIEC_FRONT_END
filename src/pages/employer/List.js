import React, { Component } from 'react';
import Header from "../../components/employer/commom/Header";
import Footer from "../../components/employer/commom/Footer";
import List from '../../components/employer/list/List';

class Index extends Component{
  render(){
      return (
        <div>
            <Header />
            <List />                
            <Footer />
        </div>   
      );
  }
}
export default Index;


