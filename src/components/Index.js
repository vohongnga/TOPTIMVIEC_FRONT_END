import React, { Component } from 'react';
import SearchForm from "./comm/SearchForm";
import JobList from "./comm/JobList";
import Advertisements from "./comm/Advertisements";

class Index extends Component{
    render(){
        document.body.style.backgroundColor = "#eceff1";
        return (
            <div>
                <SearchForm />
                <h2 className="h2 text-center mt-5">- DANH SÁCH CÔNG VIỆC -</h2>
                <div className="col col-md-10 center mt-5">
                    <div className="row">
                        <JobList />
                        <Advertisements />
                    </div>
                </div>
            </div>
        );
    }
    }
export default Index;


