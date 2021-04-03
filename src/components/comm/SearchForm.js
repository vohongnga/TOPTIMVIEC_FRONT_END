import React, { Component } from 'react';
import '../../style.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import {connect} from 'react-redux';
import * as actions from './../../actions/index';

class SearchForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hashtag: ["Python", "Java", "PHP"]
        }
    }
    onChangeHashtag = (e) => {
        this.props.onChangeHashtag(e);
    }
    onChangePlace = (e) => {
        this.props.onChangePlace(e.target.value);
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
                                options={this.state.hashtag}
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
                                <option value="Hà Nội">Hà Nội</option>
                                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                <option value="Đà Nẵng">Đà Nẵng</option>
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
}
const mapStateToProps = state => {
    return {
        search_value: state.search_value
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeHashtag: (hashtag) => {
            dispatch(actions.changeHashtag(hashtag));
        },
        onChangePlace: (place) => {
            dispatch(actions.changePlace(place));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
