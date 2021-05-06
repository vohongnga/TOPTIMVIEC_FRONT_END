import React, { Component } from "react";
import { withRouter } from "react-router";
import ValidateAccountService from "../../services/ValidateAccountService";


class ValidateAccount extends Component {
    componentDidMount(){
        const search = window.location.search;
        const params = new URLSearchParams(search);
        let key = encodeURIComponent(params.get('key'));
        let id = encodeURIComponent(params.get("id"));
        ValidateAccountService.fetchValidateAccountAPI(id, key).then(res => {
            this.props.history.push('/dang-nhap')
        }).catch(err => {
            this.props.history.push("/dang-ky/xac-nhan-email/loi");
        })
    }
    
    render() {
        return (
            
            <div className="col-lg-4 col-md-6 content jumbotron center mt-3">
               <p></p> 

            </div>
        );

    }
}
export default withRouter(ValidateAccount);