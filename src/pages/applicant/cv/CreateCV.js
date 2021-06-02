import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import callApi from '../../../utils/apiCaller';
import CV1 from '../../../components/cv/cv1/CV1';
import Cookies from 'universal-cookie';

class CreateCV extends Component {
    constructor(props) {
        super(props);
        this.data = null
        this.state = {
            "loading": false,
            "role": "applicant",
        }
        this.cookies = new Cookies();
    }
    componentDidMount() {
        // this.setState({"role": this.cookies.get('role')});
        // this.setState({loading: true});
        // callApi("/cv/" + this.props.id, 'GET').then(rs => {
        //     this.setState({loading: false});
        //     if (rs) {
        //         this.setState({"data": rs.data});
        //     }
        // });
    }
    onSubmitCV = () => {
        callApi("/cv", 'POST', this.data).then(rs => {
            this.props.history.push('/cv/' + rs.data.id_cv)
        })
    }

    onChangeState = (data) => {
        this.data = data;
    }

    render() {
        document.body.style.backgroundColor = "#eceff1";
        return (
            <div>
                <div className="overflow-auto h-100">
                    <CV1 edit={true} onChangeState={this.onChangeState} />
                </div>
                <div className="fixed-bottom mr-4 mb-4">
                    <div className="text-right">
                        <button className="btn btn-success btn-lg shadow" onClick={this.onSubmitCV}>Tạo</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateCV);