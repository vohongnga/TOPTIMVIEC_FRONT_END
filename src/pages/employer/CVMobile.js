import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
import CV1 from '../../components/cv/cv1/CV1';
import loading_gif from './../../image/loader.gif';
import NotFoundPage from '../NotFoundPage';

class CVMobile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            "data": null
        }
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
                {this.state.data ?
                    <div className="overflow-auto h-100">
                        <CV1 edit={false} data={this.state.data}/>
                    </div>: 
                this.state.loading ? <img className="center mt-5" src={loading_gif} alt="" width="50px"></img> : <NotFoundPage />}
            </div>
        );
    }
}

export default CVMobile;