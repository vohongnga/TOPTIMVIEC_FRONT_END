import React from 'react';
import Index from './pages/common/Index';
import Employer from './pages/employer/Index';
import List from './pages/employer/List';
import Login from './pages/common/Login';
import Register from './pages/common/Register';
import RegisterEmployer from './pages/common/RegisterEmployer';
import RegisterApplicant from './pages/common/RegisterApplicant';
import NotFoundPage from './pages/NotFoundPage';
import { Redirect } from 'react-router-dom';

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
        path:'',
        exact: false,
        main: () => <NotFoundPage />
    }
];
export default routes;
