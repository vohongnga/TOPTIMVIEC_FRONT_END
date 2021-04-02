import React, { Component } from 'react';
import Index from './components/Index';
import Employer from './components/nhatuyendung/Index/Index';
import List from './components/nhatuyendung/DanhSach/Index';
import Footer from './components/comm/Footer';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Register_NTD from './components/nhatuyendung/Register_NTD';
import Register_NTV from './components/nguoitimviec/Register_NTV';
import Header from './components/comm/Header';
import { createBrowserHistory } from "history";
import { connect } from 'react-redux';
import * as actions from './actions/index';

const history = createBrowserHistory()

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {show_header : true};
    }

    onRouteChange = (location, action) => {
        if (location.pathname === "/") {
            if (!this.props.hide_header) {
                this.props.onHideHeader();
            }
        } else {
            if (this.props.hide_header) {
                this.props.onNotHideHeader();
            }
        }
        this.setState({"show_header": window.location.pathname !== "/dang-nhap"});
    }

    componentDidMount() {
        if (window.location.pathname === "/") {
            if (!this.props.hide_header) {
                this.props.onHideHeader();
            }
        } else {
            if (this.props.hide_header) {
                this.props.onNotHideHeader();
            }
        }
        this.setState({"show_header": window.location.pathname !== "/dang-nhap"});
        history.listen(this.onRouteChange);
    }

    render() {
        return (
            <Router history={history}>
                { this.state.show_header && <Header /> }
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/test" component={Footer} />
                    <Route path="/nha-tuyen-dung" component={Employer} />
                    <Route path="/danh-sach" component={List} />
                    <Route path="/dang-nhap" component={Login} />
                    <Route path="/dang-ky" exact component={Register} />
                    <Route path="/dang-ky/nha-tuyen-dung" component={Register_NTD} />
                    <Route path="/dang-ky/nguoi-tim-viec" component={Register_NTV} />
                </Switch>

            </Router>
        );

    }
}

const mapStateToProps = state => {
    return {
        hide_header: state.hide_header
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onHideHeader : () => {
            dispatch(actions.hideHeader())
        },
        onNotHideHeader : () => {
            dispatch(actions.notHideHeader())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
