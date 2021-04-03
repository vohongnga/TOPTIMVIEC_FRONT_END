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
            <div className="index-search-div">
                <div className="col center center-vertical index-search-form rounded">
                    <div className="form-row">
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
                                defaultSelected={this.props.search_value.tag}
                            />
                        </div>
                        <div className="col-lg-2 col-md-3 mt-1 mt-md-0">
                            <select className="form-control form-control-lg" onChange={this.onChangePlace} defaultValue={this.props.search_value.place}>
                                <option value="">Địa điểm</option>
                                {this.showListPlace(this.props.list_place)}
                            </select>
                        </div>
                        <div className="col-lg-2 col-md-3 mt-1 mt-md-0">
                            <button type="submit" className="btn btn-success btn-lg btn-block word-wrap text-truncate">Tìm kiếm</button>
                        </div>
                    </div>
                </div>
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
        list_place: state.list_place
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
