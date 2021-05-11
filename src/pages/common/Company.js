import React, { Component } from 'react';
import CompanyItem from '../../components/common/CompanyItem';
import callApi from '../../utils/apiCaller';
import loading_gif from './../../image/loader.gif';

class Company extends Component{
    constructor(props) {
        super(props);
        this.state={
            "name": "",
            "list_employer": [],
            "count_page": 0,
            "page": 1,
            "loading": false
        };
    }
    searchCompany = (e) => {
        e.preventDefault();
        this.setCountPage();
        this.setPage(1);
    }
    setPage = (page) => {
        this.setState({"page": page});
        this.setState({"list_employer": []});
        this.setListCompany(page);
    }
    setListCompany = (page) => {
        this.setState({loading: true});
        callApi("employer?name=" + this.state.name + "&page=" + (page - 1), 'GET').then(rs => {
            this.setState(rs.data);
            this.setState({loading: false});
        });
    }
    setCountPage = () => {
        callApi("/employer/page?name=" + this.state.name, 'GET').then(rs => {
            this.setState(rs.data)
        });
    }
    componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        let page = params.get('page');
        if (!page) {
            page = 1;
        }
        this.setState({"page": page});
        this.setListCompany(1);
        this.setCountPage();
    }
    onChangeName = (e) => {
        this.setState({"name": e.target.value})
    }
    render(){
        document.body.style.backgroundColor = "#eceff1";
        
        return (
            <div>
                <div className="company-search-div pb-5 pt-3">
                    <form className="col-lg-10 row py-5 mx-auto" onSubmit={this.searchCompany}>
                        <div className="col-lg-10 col-md-9">
                            <input type="text" className="form-control form-control-lg" placeholder="Tên công ty" onChange={this.onChangeName}/>
                        </div>
                        <div className="col-lg-2 col-md-3 mt-1 mt-md-0">
                            <button type="submit" className="btn btn-success btn-lg btn-block word-wrap text-truncate" onClick={this.searchCompany}>Tìm kiếm</button>
                        </div>
                    </form>
                </div>
                <h2 className="h2 text-center mt-5">- DANH SÁCH CÔNG TY -</h2>
                <div className="row col-lg-10 mx-auto mt-5">
                    {this.showCompanies(this.state.list_employer)}
                </div>
                {this.state.loading ? <img className="center" src={loading_gif} alt="" width="50px"></img> : ""}
                <ul className="pagination justify-content-center mb-5 mt-3">
                    <li className="page-item">
                        <button className="page-link" onClick={() => this.setPage(1)}>
                            Đầu
                        </button>
                    </li>
                    {this.showPage(this.state.count_page, this.state.page)}
                    <li className="page-item">
                        <button className="page-link" onClick={() => this.setPage(this.state.count_page)}>
                            Cuối
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
    showCompanies(companies) {
        var result = null;
        if (companies.length > 0) {
            result = companies.map((company, index) => {
                return (
                    <CompanyItem 
                        key={index}
                        company={company}
                    />
                )
            })
        }
        return result;
    }
    showPage = (page_count, page_choose) => {
        var result = null;
        if (page_count > 0) {
            const begin_page = (+page_choose - 2 > 0) ? (+page_choose -2) : 1;
            const end_page = (begin_page + 5 < page_count) ? (begin_page + 5) : page_count 
            const page_array = Array(end_page - begin_page + 1).fill().map((_, idx) => begin_page + idx - 1)
            result = page_array.map((page, index) => {
                return (
                    <li className={page + 1 === +page_choose ? "page-item active" : "page-item"} key={page}>
                        <button className="page-link" onClick={() => this.setPage(page+1)}>
                            {page+1}
                        </button>
                    </li>
                )
            })
        }
        return result;
    }
}


export default Company;
