import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './components/comm/Header';
import { createBrowserHistory } from "history";
import { connect } from 'react-redux';
import * as actions from './actions/index';
import routes from './routes';

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
                <Switch>{ this.showContentMenus(routes) }</Switch>
            </Router>
        );

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
