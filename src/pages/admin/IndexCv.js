import React,{ Component } from "react";
import CvContent from "../../components/admin/cv/CvContent";
import SideBar from "../../components/admin/SideBar";

class IndexCv extends Component {
    render () {
        document.body.style.backgroundColor = "#eceff1 ";
        return (
            <div>
                <div className="row mx-0">
                    <SideBar />
                    <CvContent />
                </div>
            </div>
        )
    }
}
export default IndexCv;