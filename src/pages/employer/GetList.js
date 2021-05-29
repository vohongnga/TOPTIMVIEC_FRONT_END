import React, { Component } from 'react';
import CandidateList from "../../components/employer/list/CandidateList";
import ListTitle from './../../components/employer/list/ListTitle';
import {connect} from 'react-redux';
import * as actions from '../../actions/employer/list';
import * as actions_index from './../../actions/index';
import * as services from './../../services/ListService';

class GetList extends Component{
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
        this.props.setLoadingJob(true);
        services.getList(this.props.id).then((res) => {
            this.props.setLoadingJob(false);
            this.props.setNameList(res.data.name);
            this.props.setTitleList(res.data.name);
            this.props.setIdList(res.data._id);
            this.props.setListCandidate(res.data.list);
        })
        window.addEventListener('scroll', this.onScrollDown);
    }
    componentWillUnmount() {
        this.props.setNameList("");
        this.props.setTitleList("");
        this.props.setIdList("");
        this.props.setListCandidate([]);
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
        get_list: state.get_list
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
        },
        setListCandidate: (list) => {
            return dispatch(actions.setListCandidate(list))
        },
        setLoadingJob: (loading) => {
            return dispatch(actions_index.setLoadingJob(loading));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetList);