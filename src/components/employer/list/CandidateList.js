import React, { Component } from 'react';
import '../../../style.css';
import CandidateItem from './../index/CandidateItem';
import ChooseCVModal from './../index/ChooseCVModal';
import DeleteCVFromListDialog from './DeleteCVFromListDialog';
import Aos from "aos";
import {connect} from 'react-redux';
import img from './../../../image/document-256.png';
import loading_gif from './../../../image/loader.gif';

class CandidateList extends Component {
    constructor(props) {
        super(props);
        Aos.init({duration: 1000});
    }
    render() {
        return (
            <div className="col-lg-8 mt-3">
                <div className="job-item">
                    {this.props.get_list.list.length>0?this.showCandidates(this.props.get_list.list):(this.props.search_value.loading?"":<div><img className="center my-5" src={img} alt="" width="200px" /><h2 className="h2 text-center text-muted">Không tìm thấy ứng viên</h2></div>)}
                    {this.props.search_value.loading?<img className="center" src={loading_gif} alt="" width="50px"></img>:""}
                </div>
                <ChooseCVModal />
                <DeleteCVFromListDialog id={this.props.id} />
            </div>
        );
    }
    showCandidates(candidates) {
        var result = null;
        if (candidates.length > 0) {
            result = candidates.map((candidate, index) => {
                return (
                    <CandidateItem 
                        key={index}
                        job={candidate}
                        list={this.props.id}
                    />
                )
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        get_list: state.get_list,
        search_value: state.search_value
    }
}

export default connect(mapStateToProps, null)(CandidateList);
