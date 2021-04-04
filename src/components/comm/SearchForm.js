import React, { Component } from 'react';
import '../../style.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import {connect} from 'react-redux';
import * as actions from './../../actions/index';

class SearchForm extends Component{
    onChangeHashtag = (e) => {
        this.props.onChangeHashtag(e);
    }
    onChangePlace = (e) => {
        this.props.onChangePlace(e.target.value);
    }
    onSubmitSearch = (e) => {
        e.preventDefault();
        this.props.fetchListJob([], this.props.search_value.tag, this.props.search_value.place).then(() => {
            window.scrollTo({ behavior: 'smooth', top: (window.innerHeight)*0.9 - 150 });
        });
    }
    componentDidMount() {
        if (this.props.list_hashtag.length === 0) {
            this.props.fetchListHashtag();
        }
        if (this.props.list_place.length === 0) {
            this.props.fetchListPlace();
        }
    }
    render(){
        var ref = React.createRef();
        return (
            <div className={this.props.header?"col center":"col center center-vertical index-search-form rounded"}>
                <form className="form-row" onSubmit={this.onSubmitSearch}>
                    <div className="col-lg-8 col-md-6 mt-1 mt-md-0">
                        <Typeahead
                            id="public-methods-example"
                            labelKey="name"
                            multiple
                            options={this.props.list_hashtag}
                            placeholder="Tên công việc, vị trí..."
                            ref={ref}
                            size="large"
                            onChange={this.onChangeHashtag}
                            selected={this.props.search_value.tag}
                        />
                    </div>
                    <div className="col-lg-2 col-md-3 mt-1 mt-md-0">
                        <select className="form-control form-control-lg" onChange={this.onChangePlace} value={this.props.search_value.place}>
                            <option value="">Địa điểm</option>
                            {this.showListPlace(this.props.list_place)}
                        </select>
                    </div>
                    <div className="col-lg-2 col-md-3 mt-1 mt-md-0">
                        <button type="submit" className="btn btn-success btn-lg btn-block word-wrap text-truncate" onClick={this.onSubmitSearch}>Tìm kiếm</button>
                    </div>
                </form>
            </div>
        );
    }
    showListPlace = (list_place) => {
        var result = null;
        if (list_place.length > 0) {
            result = list_place.map((place, index) => {
                return (
                    <option key={index} value={place}>{place}</option>
                );
            });
            return result;
        }
    }
}
const mapStateToProps = state => {
    return {
        search_value: state.search_value,
        list_hashtag: state.list_hashtag,
        list_place: state.list_place,
        jobs: state.jobs,
        list_job_ref: state.list_job_ref
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeHashtag: (hashtag) => {
            dispatch(actions.changeHashtag(hashtag));
        },
        onChangePlace: (place) => {
            dispatch(actions.changePlace(place));
        },
        fetchListHashtag: () => {
            dispatch(actions.fetchListHashtag());
        },
        fetchListPlace: () => {
            dispatch(actions.fetchListPlace());
        },
        fetchListJob: (list_id_showed, list_hashtag, place) => {
            return dispatch(actions.fetchSetListJob(list_id_showed, list_hashtag, place));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
