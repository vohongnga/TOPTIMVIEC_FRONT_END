import React, { Component } from 'react';
import SearchForm from "../../components/common/SearchForm";
import CandidateList from "../../components/employer/index/CandidateList";

class Index extends Component {
    render() {
        document.body.style.backgroundColor = "#eceff1";
        return (
            <div>
                <div className="index-search-div">
                    <SearchForm />
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <CandidateList />
                    </div>
                </div>
            </div>
        );
    }
}
export default Index;


