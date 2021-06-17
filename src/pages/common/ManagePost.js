import React, { Component } from 'react';
import PostList from "../../components/common/PostList";
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class ManagePost extends Component{
    constructor(props) {
        super(props);
        this.state={
            showTopButton: false
        };
    }

    onScrollDown = () => {
        const showTopButton  = window.scrollY >= 500;
        this.setState({showTopButton});
    }
    goToTop = () => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScrollDown);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollDown);
    }
    render(){
        document.body.style.backgroundColor = "#eceff1";

        return (
            <div>
                {this.state.showTopButton?<button className="floating-btn btn btn-success fixed-bottom ml-auto rounded-circle mr-4 mb-4 shadow" onClick={this.goToTop}><i className="fa fa-arrow-up fa-w-20"></i></button>:""}
                <h2 className="h2 text-center mt-5" ref={this.props.list_job_ref}>- DANH SÁCH CÔNG VIỆC -</h2>
                <div className="col col-md-10 center mt-5">
                    <div className="row">
                        <PostList />
                    </div>
                    </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        list_job_ref: state.list_job_ref
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        setListJobRef: (ref) => {
            dispatch(actions.changeHashtag(ref));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePost);