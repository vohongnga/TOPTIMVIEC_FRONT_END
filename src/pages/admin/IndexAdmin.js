import React, { Component } from "react";
import ListContent from "../../components/admin/ListContent";
import SideBar from "../../components/admin/SideBar";

class IndexAdmin extends Component {
    render() {
        document.body.style.backgroundColor = "#eceff1 ";
        return (
            <div>
                <div className="row mx-0">
                    <SideBar />
                    <ListContent />
                </div>
            </div>
        )
    }
}
export default IndexAdmin;