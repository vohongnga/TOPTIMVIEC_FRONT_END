import axios from 'axios';
import React, { Component } from 'react'
import TestService from "../../services/TestService";

export default class TestFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hashtagList: []    
        }
    }
    componentDidMount() {
        TestService.fetchTestAPI().then((hashtagList) => {
            this.setState({hashtagList});
        });
    }
    render() {
        let {hashtagList} = this.state;
        return (
            <div>
                {hashtagList.map(hashtag => (<div>{hashtag}</div>))}
            </div>
        )
    }
}
