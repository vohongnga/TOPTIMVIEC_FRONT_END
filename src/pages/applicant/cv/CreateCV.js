import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import callApi from '../../../utils/apiCaller';
import CV1 from '../../../components/cv/cv1/CV1';
import Cookies from 'universal-cookie';
import Moment from 'moment';

class CreateCV extends Component {
    constructor(props) {
        super(props);
        this.data = null
        this.state = {
            "loading": false,
        }
        this.cookies = new Cookies();
    }
    componentDidMount() {
        if (this.props.id) {
            this.setState({ loading: true });
            callApi("/cv/" + this.props.id, 'GET').then(rs => {
                
                if (rs) {
                    this.data = rs.data;
                    this.data.dob = Moment(this.data.dob).format('yyyy-MM-DD');  
                }
                this.setState({ loading: false });
            });   
        }
    }
    onSubmitCV = () => {
        callApi("/cv", 'POST', this.data).then(rs => {
            this.props.history.push('/cv/' + rs.data.id_cv)
        })
    }

    onPutCV = () => {
        callApi("/cv/" + this.props.id, 'PUT', this.data).then(rs => {
            this.props.history.push('/cv/' + this.props.id)
        })
    }

    onChangeState = (data) => {
        this.data = data;
    }

    render() {
        document.body.style.backgroundColor = "#eceff1";
        const { id } = this.props;
        return (
            <div>
                <div className="overflow-auto h-100 my-5">
                    {(!this.state.loading) ?  <CV1 edit={true} onChangeState={this.onChangeState} data={this.data} /> :"" }
                </div>
                <div className="fixed-bottom mr-4 mb-4">
                    <div className="text-right">
                        {id ? <button className="btn btn-success btn-lg shadow" onClick={this.onPutCV}>Lưu</button> :
                            <button className="btn btn-success btn-lg shadow" onClick={this.onSubmitCV}>Tạo</button>}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateCV);