import React, { Component } from 'react';
import Header from "../comm/Header";
import Footer from "../comm/Footer";
import List from './List';
import './style.css';

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


