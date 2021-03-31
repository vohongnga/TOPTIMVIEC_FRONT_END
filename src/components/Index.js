import React, { Component } from 'react';
import Header from "./comm/Header";
import SearchForm from "./comm/SearchForm";
import Job_list from "./comm/Job_list";
import Advertisements from "./comm/Advertisements";

// import { Route } from 'react-router';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
class Index extends Component{
    render(){
        document.body.style.backgroundColor = "#eceff1";
        return (
            <div>
                <Header hide={true} />
                <SearchForm />
                <h2 className="h2 text-center mt-5">- DANH SÁCH CÔNG VIỆC -</h2>
                <div className="col col-sm-10 center mt-5">
                    <div className="row">
                        <Job_list />
                        <Advertisements />
                    </div>
                </div>
            </div>
        );
    }
    }
export default Index;


