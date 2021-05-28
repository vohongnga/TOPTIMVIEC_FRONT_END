import React,{ Component } from "react";
import CompanyContent from "../../components/admin/company/CompanyContent";
import SideBar from "../../components/admin/SideBar";
class IndexCompany extends Component {
    render() {
        document.body.style.backgroundColor = "#eceff1 ";
        return (
            <div>
                <div className="row mx-0">
                    <SideBar />
                    <CompanyContent/>
                </div>
            </div>
        )
    }
}
export default IndexCompany;