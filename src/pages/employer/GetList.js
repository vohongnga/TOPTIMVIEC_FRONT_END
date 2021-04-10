import React, { Component } from 'react';
import CandidateList from "../../components/employer/list/CandidateList";
import ListTitle from './../../components/employer/list/ListTitle';
import {connect} from 'react-redux';
import * as actions from '../../actions/employer/list';
import * as services from './../../services/ListService';

class Index extends Component{
    constructor(props) {
        super(props);
        this.state={
            showTopButton: false
        };
    }
    onScrollDown = () => {
        let showTopButton  = window.scrollY >= 500;
        this.setState({showTopButton});
    }
    goToTop = () => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }
    componentDidMount() {
        services.getList(this.props.id).then((res) => {
            this.props.setNameList(res.data.name);
            this.props.setTitleList(res.data.name);
            this.props.setIdList(res.data._id);
        })
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
                <div className="col col-md-10 center mt-5">
                    <div className="row">
                        <ListTitle id={this.props.id} />
                        <CandidateList id={this.props.id} />
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
        setNameList: (name_list) => {
            return dispatch(actions.setNameList(name_list))
        },
        setIdList: (id) => {
            return dispatch(actions.setIdList(id))
        },
        setTitleList: (name_list) => {
            return dispatch(actions.setTitleList(name_list))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);