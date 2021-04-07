import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import HeaderApplicant from './components/applicant/HeaderApplicant';
import HeaderEmployer from './components/employer/commom/HeaderEmployer';
import { createBrowserHistory } from "history";
import { connect } from 'react-redux';
import * as actions from './actions/index';
import routes from './routes';
import { refreshToken } from './services/TokenService';

const history = createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_header : true
        };
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
        //Lay thong tin nguoi dung khi khoi dong
        var key = localStorage.getItem("refresh_token");
        if (key) {
            sessionStorage.setItem("refresh_token", key);
            var id_user = localStorage.getItem("id_user");
            sessionStorage.setItem("id_user", id_user);
            var avatar = localStorage.getItem("avatar");
            sessionStorage.setItem("avatar", avatar);
            var name = localStorage.getItem("name");
            sessionStorage.setItem("name", name);
            var role = localStorage.getItem("role");
            sessionStorage.setItem("role", role);
            refreshToken();
        }
        //Thiet lap an header khi o trang chu
        if (window.location.pathname === "/") {
            if (!this.props.hide_header) {
                this.props.onHideHeader();
            }
        } else {
            if (this.props.hide_header) {
                this.props.onNotHideHeader();
            }
        }
        //Khong hien thi header khi o trang dang nhap
        this.setState({"show_header": window.location.pathname !== "/dang-nhap"});
        history.listen(this.onRouteChange);
    }

    render() {
        return (
            <Router history={history}>
                { this.state.show_header ? this.showHeader() : "" }
                <Switch>{ this.showContentMenus(routes) }</Switch>
            </Router>
        );

    }

    showHeader = () => {
        var role = sessionStorage.getItem("role");
        if (role === "employer") {
            return <HeaderEmployer />;
        }
        else if (role === "applicant") {
            return <HeaderApplicant />;
        }
        else {
            return <Header />;
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
