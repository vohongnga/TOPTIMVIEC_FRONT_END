import React from 'react';
import Index from './pages/common/Index';
import Employer from './pages/employer/Index';
import List from './pages/employer/List';
import GetList from './pages/employer/GetList';
import Login from './pages/common/Login';
import Register from './pages/common/Register';
import RegisterEmployer from './pages/common/RegisterEmployer';
import RegisterApplicant from './pages/common/RegisterApplicant';
import NotFoundPage from './pages/NotFoundPage';
import { Redirect } from 'react-router-dom';
import VerifyAccount from './pages/common/VerifyAccount';
import ValidateAccount from './pages/common/ValidateAccount';
import ErrorValidate from './pages/common/ErrorValidate';

const routes=[
    {
        path:'/',
        exact: true,
        main: () => { 
            var role = sessionStorage.getItem("role");
            if (role === "employer") {
                return <Employer />;
            }
            else if (role === "applicant") {
                return <Index />;
            }
            else {
                return <Index />;
            }
        }
    },
    {
        path:'/danh-sach',
        exact: true,
        main: () => {
            var role = sessionStorage.getItem("role");
            if (role === "employer") {
                return <List />;
            }
            else if (role === "applicant") {
                return <Redirect to="/" />;
            }
            else {
                return <Redirect to="/dang-nhap" />;
            }
        }
    },
    {
        path:'/danh-sach/:id',
        exact: false,
        main: (match) => {
            var role = sessionStorage.getItem("role");
            if (role === "employer") {
                return <GetList id={match.match.params.id}/>;
            }
            else if (role === "applicant") {
                return <Redirect to="/" />;
            }
            else {
                return <Redirect to="/dang-nhap" />;
            }
        }
    },
    {
        path:'/dang-nhap',
        exact: true,
        main: () => { return !sessionStorage.getItem("role") ? <Login /> : <Redirect to="/" />}
    },
    {
        path:'/dang-ky',
        exact: true,
        main: () => { return !sessionStorage.getItem("role") ? <Register /> : <Redirect to="/" />}
    },
    {
        path:'/dang-ky/nha-tuyen-dung',
        exact: true,
        main: () => { return !sessionStorage.getItem("role") ? <RegisterEmployer /> : <Redirect to="/" />}
    },
    {
        path:'/dang-ky/nguoi-tim-viec',
        exact: true,
        main: () => { return !sessionStorage.getItem("role") ? <RegisterApplicant /> : <Redirect to="/" />}
    },
    {
        path:'/dang-ky/xac-nhan',
        exact: true,
        main: () => <VerifyAccount/>
    },
    {
        path:'/dang-ky/xac-nhan-email',
        exact: true,
        main: () => <ValidateAccount/>
    },
    {
        path:'/dang-ky/xac-nhan-email/loi',
        exact: true,
        main: () => <ErrorValidate/>
    },
    {
        path:'',
        exact: false,
        main: () => <NotFoundPage />
    }
    

];
export default routes;
