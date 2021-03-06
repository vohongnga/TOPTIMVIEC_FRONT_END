import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import HeaderApplicant from './components/applicant/HeaderApplicant';
import HeaderEmployer from './components/employer/commom/HeaderEmployer';
import HeaderAdmin from './components/admin/HeaderAdmin';
import { createBrowserHistory } from "history";
import { connect } from 'react-redux';
import * as actions from './actions/index';
import routes from './routes';
import { refreshToken } from './services/TokenService';
import logo_img from "./image/LogoMakr-87TXng_pnsj0a.png";
import loading_gif from './image/loader.gif';

const history = createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_header : true,
            getting_data: true
        };
        this.cookies = new Cookies();
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
        this.setShowHeader();
    }

    setShowHeader = () => {
        const hide_header_paths = [
            "/dang-nhap",
            "/admin/quan-ly-cong-ty",
            "/admin/quan-ly-tin",
            "/admin/quan-ly-cv",
            "/admin/quan-ly-nguoi-tim-viec",
            "/mobile/cv"
        ];
        let show_header = true;
        if (window.location.pathname === "/") {
            const role = this.cookies.get('role');
            if (role === "admin") {
                show_header = false;
            }
        }
        else {
            for (const path of hide_header_paths) {
                if (window.location.pathname.substring(0, path.length) === path) {
                    show_header = false;
                    break;
                }
            }
        }
        
        this.setState({"show_header": show_header});
    }

    componentDidMount() {
        //Lay thong tin nguoi dung khi khoi dong
        this.setState({getting_data: true});
        const key = this.cookies.get('refresh_token');
        const token = this.cookies.get('token');
        if (key && !token) {
            refreshToken().then(() => {
                this.setState({getting_data: false});
            });
        } else {
            this.setState({getting_data: false});
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
        this.setShowHeader();
        history.listen(this.onRouteChange);
    }

    render() {
        if (this.state.getting_data) {
            document.body.style.backgroundColor = "#394141";
            return (
                <div className="pt-5 mt-5">
                    <img className="center mt-5" src={logo_img} height='300px' width='300px' alt=""/>
                    <img className="center" src={loading_gif} alt="" width="50px"></img>
                </div>
                
            );
        } else {
            return (
                <Router history={history}>
                    { this.state.show_header ? this.showHeader() : "" }
                    <Switch>{ this.showContentMenus(routes) }</Switch>
                </Router>
            );
        }
    }

    showHeader = () => {
        const role = this.cookies.get('role');
        if (role === "employer") {
            return <HeaderEmployer />;
        }
        else if (role === "applicant") {
            return <HeaderApplicant />;
        }
        else if(role === "admin"){
            return <HeaderAdmin />;
        }
        else {
            return <Header />;
        }
    }

    showContentMenus = (routes) => {
        let result = null;
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
