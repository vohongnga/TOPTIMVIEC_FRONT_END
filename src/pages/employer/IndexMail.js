import { Component } from "react";
import { withRouter } from "react-router";
import MenuMail from "../../components/employer/mail/MenuMail";
import ListMail from "../../components/employer/mail/ListMail";
class IndexMail extends Component{
    render(){
        document.body.style.backgroundColor = "#eceff1 ";
        return (
            
            <div className="col col-md-10 center mt-5">
                <h1 className="title-email">Hộp thư</h1>
                <div className="row">
                    <MenuMail />
                    <ListMail />
                </div>
            </div>
        );
    }

}
export default withRouter(IndexMail);