import React, { Component } from 'react';
import Index from './components/Index';
import Header from './components/nhatuyendung/Index/Index';
import Footer from './components/comm/Footer';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';

class App extends Component{
  render(){
      return (
            <Router>
                <Route path="/" exact component={Index} />
                <Route path="/test" component={Footer} />
                <Route path="/nha-tuyen-dung" component={Header} />
            </Router>
      );
  }
}
export default App;
