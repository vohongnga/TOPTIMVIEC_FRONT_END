import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import HeaderApplicant from './components/applicant/HeaderApplicant';
import { createBrowserHistory } from "history";
import { connect } from 'react-redux';
import * as actions from './actions/index';
import routes from './routes';
import routes_applicant from './routes_applicant';

const history = createBrowserHistory();

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
        if (localStorage.getItem("role") === "applicant" || sessionStorage.getItem("role") === "applicant") {
            this.props.setRole("applicant");
        } else if (localStorage.getItem("role") === "employer" || sessionStorage.getItem("role") === "employer") {
            this.props.setRole("employer");
        }
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
        if (this.props.role === "") {
            return (
                <Router history={history}>
                    { this.state.show_header && <Header /> }
                    <Switch>{ this.showContentMenus(routes) }</Switch>
                </Router>
            );
        } else if (this.props.role === "applicant") {
            return (
                <Router history={history}>
                   <HeaderApplicant />
                   <Switch>{ this.showContentMenus(routes_applicant) }</Switch>
                </Router>
            );
        } else {
            return (<div></div>);
        }

    }
    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
            return result;
        }
    }
}


const mapStateToProps = state => {
    return {
        hide_header: state.hide_header,
        role: state.role
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onHideHeader : () => {
            dispatch(actions.hideHeader())
        },
        onNotHideHeader : () => {
            dispatch(actions.notHideHeader())
        },
        setRole : (role) => {
            dispatch(actions.setRole(role))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
