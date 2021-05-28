import React,{ Component } from "react";
import PostContent from "../../components/admin/post/PostContent";
import SideBar from "../../components/admin/SideBar";

class IndexPost extends Component {
    render () {
        document.body.style.backgroundColor = "#eceff1 ";
        return (
            <div>
                <div className="row mx-0">
                    <SideBar />
                    <PostContent />
                </div>
            </div>
        )
    }
}
export default IndexPost;