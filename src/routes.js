import React from 'react';
import { Redirect } from 'react-router-dom';

import Index from './pages/common/Index';
import Employer from './pages/employer/Index';
import List from './pages/employer/List';
import GetList from './pages/employer/GetList';
import Login from './pages/common/Login';
import Register from './pages/common/Register';
import RegisterEmployer from './pages/common/RegisterEmployer';
import RegisterApplicant from './pages/common/RegisterApplicant';
import NotFoundPage from './pages/NotFoundPage';
import VerifyAccount from './pages/common/VerifyAccount';
import ValidateAccount from './pages/common/ValidateAccount';
import AccountSettingApplicant from './pages/applicant/AccountSetting';
import AccountSettingEmployer from './pages/employer/AccountSetting';
import Company from './pages/common/Company';
import CompanyDetail from './pages/common/CompanyDetail';
import ErrorValidate from './pages/common/ErrorValidate';
import IndexMail from './pages/common/IndexMail';
import DetailMail from './pages/common/DetailMail';
import IndexMailSend from './pages/common/IndexMailSend';
import CV from './pages/employer/CV';


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
        path:'/hop-thu',
        exact: true,
        main: () => { 
            var role = sessionStorage.getItem("role");
            if (role === "employer") {
                return <IndexMail />;
            }
            else if (role === "applicant") {
                return <IndexMail />;
            }
            else {
                return <Redirect to="/dang-nhap" />;
            }
        }
    },
    {
        path:'/hop-thu/gui',
        exact: true,
        main: () => { 
            var role = sessionStorage.getItem("role");
            if (role === "employer") {
                return <IndexMailSend />;
            }
            else if (role === "applicant") {
                return <IndexMailSend />;
            }
            else {
                return <Redirect to="/dang-nhap" />;
            }
        }
    },
    {
        path:'/hop-thu/gui/:id',
        exact: false,
        main: (match) => {
            var role = sessionStorage.getItem("role");
            if (role === "employer") {
                return <DetailMail id={match.match.params.id}/>;
            }
            else if (role === "applicant") {
                return <DetailMail id={match.match.params.id} />;
            }
            else {
                return <Redirect to="/dang-nhap" />;
            }
        }
    },
    {
        path:'/hop-thu/:id',
        exact: false,
        main: (match) => {
            var role = sessionStorage.getItem("role");
            if (role === "employer") {
                return <DetailMail id={match.match.params.id}/>;
            }
            else if (role === "applicant") {
                return <DetailMail id={match.match.params.id} />;
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
        main: () => { return !sessionStorage.getItem("role") ? <VerifyAccount /> : <Redirect to="/" />}
    },
    {
        path:'/dang-ky/xac-nhan-email',
        exact: true,
        main: () => { return !sessionStorage.getItem("role") ? <ValidateAccount /> : <Redirect to="/" />}
    },
    {
        path:'/dang-ky/xac-nhan-email/loi',
        exact: true,
        main: () => { return !sessionStorage.getItem("role") ? <ErrorValidate /> : <Redirect to="/" />}
    },
    {
        path:'/tai-khoan',
        exact: true,
        main: (match) => {
            var role = sessionStorage.getItem("role");
            if (role === "employer") {
                return <AccountSettingEmployer />;
            }
            else if (role === "applicant") {
                return <AccountSettingApplicant />;
            }
            else {
                return <Redirect to="/dang-nhap" />;
            }
        }
    },
    {
        path:'/cong-ty',
        exact: true,
        main: () => { return <Company />}
    },
    {
        path:'/cong-ty/:id',
        exact: true,
        main: (props) => <CompanyDetail {...props} />
    },
    {
        path:'/cv/:id',
        exact: true,
        main: (match) => {
            var role = sessionStorage.getItem("role");
            if (role === "employer") {
                return <CV  id={match.match.params.id}/>;
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
        path:'',
        exact: false,
        main: () => <NotFoundPage />
    }
    

];
export default routes;
