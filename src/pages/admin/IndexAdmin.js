import React, { Component } from "react";
import ListContent from "../../components/admin/ListContent";
import SideBar from "../../components/admin/SideBar";

class IndexAdmin extends Component {
    render() {
        document.body.style.backgroundColor = "#eceff1 ";
        return (
            <div className="col col-md-10 mt-2 ">
                <div className="row">
                    <SideBar />
                    <ListContent />
                </div>
            </div>
        )
    }
}
export default IndexAdmin;