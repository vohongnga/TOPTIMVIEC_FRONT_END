import React, { Component } from 'react';

class CompanyItem extends Component {
    render() {
        var company = this.props.company;
        return (
            <div className="col-lg-3 col-md-6 w-100 my-3">
                <div className="card h-100 company-card">
                    <div className="company-logo mx-4">
                        <img src={company.avatar} alt="" width="100%"/>
                    </div>
                    <div className="card-body">
                        <h4 className="h4 card-title">{company.name}</h4>
                        <p className="card-text">{company.bio}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompanyItem;
