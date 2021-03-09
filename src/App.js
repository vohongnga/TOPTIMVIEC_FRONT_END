import React, { Component } from 'react';
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import JOB_ITEM from "./components/JOB_ITEM";
import Advertisements from "./components/Advertisements";
import './App.css';
class App extends Component{
  render(){
      return (
          <div>
            <Header />
            <SearchForm />
            <div class="container-fluid">
                <div class="row">
                    <JOB_ITEM />
                    <Advertisements />
                </div>
            </div>    
        </div>
      );
  }
}
export default App;
