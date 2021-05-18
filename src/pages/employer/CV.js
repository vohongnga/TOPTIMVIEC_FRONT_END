import React, { Component } from 'react';
import {connect} from 'react-redux';
import callApi from '../../utils/apiCaller';
import CV1 from '../../components/cv/cv1/CV1';
import ChooseCVModal from '../../components/employer/index/ChooseCVModal';
import * as employer_action from './../../actions/employer/index';
import loading_gif from './../../image/loader.gif';
import NotFoundPage from '../NotFoundPage';

class CV extends Component{
    constructor(props) {
        super(props);
        this.state = {
            "data": null,
            "loading": false
        }
    }
    onChooseCV = (e) => {
        e.stopPropagation(); 
        window.$('#chooseCVModal').modal('show');
        this.props.chooseCV(this.props.id);
    }
    componentDidMount() {
        this.setState({loading: true});
        callApi("/cv/" + this.props.id, 'GET').then(rs => {
            this.setState({loading: false});
            if (rs) {
                this.setState({"data": rs.data});
            }
        });
    }
    render(){
        document.body.style.backgroundColor = "#eceff1";
        
        return (
            <div>
                {this.state.data ? <div>
                    <div className="overflow-auto h-100">
                        <CV1 edit={false} data={this.state.data}/>
                    </div>
                    <div className="fixed-bottom mr-4 mb-4">
                        <div className="text-right">
                            <button className="btn btn-success btn-lg shadow" onClick={this.onChooseCV}>Chọn</button>
                        </div>
                        <div className="mt-2 text-right">
                            <button className="btn btn-primary btn-lg shadow">Liên hệ</button>
                        </div>
                    </div>
                    <ChooseCVModal />
                </div> : 
                this.state.loading ? <img className="center mt-5" src={loading_gif} alt="" width="50px"></img> : <NotFoundPage />}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        chooseCV: (cv) => {
            return dispatch(employer_action.chooseCV(cv));
        }
    }
}

export default connect(null, mapDispatchToProps)(CV);