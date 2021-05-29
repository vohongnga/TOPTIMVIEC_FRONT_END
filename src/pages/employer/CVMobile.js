import React, { Component } from 'react';
import axios from 'axios';
import CV1 from '../../components/cv/cv1/CV1';
import loading_gif from './../../image/loader.gif';
import {API_URL} from './../../constants/ApiUrl';

class CVMobile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            "data": null,
            "status": 200
        }
    }
    componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const token = encodeURIComponent(params.get('token'));
        this.setState({loading: true});
        axios({
            method: "GET",
            url: API_URL + "/cv/" + this.props.id,
            headers: { Authorization: `Bearer ${token}` }
        }).then((rs) => {
            this.setState({loading: false});
            if (rs) {
                this.setState({"data": rs.data});
            }
        }).catch((e) => {
            this.setState({loading: false});
            this.setState({status: e.response.status});
        });
    }
    render(){
        document.body.style.backgroundColor = "#eceff1";
        
        return (
            <div>
                {this.state.data ?
                    <div className="overflow-auto h-100">
                        <CV1 edit={false} data={this.state.data}/>
                    </div>: 
                this.state.loading ? <img className="center mt-5" src={loading_gif} alt="" width="50px"></img> : 
                <p>{this.state.status}</p>}
            </div>
        );
    }
}

export default CVMobile;