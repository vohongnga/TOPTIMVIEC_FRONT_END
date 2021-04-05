import React from 'react';
import Index from './pages/common/Index';
import Employer from './pages/employer/Index';
import List from './pages/employer/List';
import Login from './pages/common/Login';
import Register from './pages/common/Register';
import RegisterEmployer from './pages/common/RegisterEmployer';
import RegisterApplicant from './pages/common/RegisterApplicant';
import NotFoundPage from './pages/NotFoundPage';

const routes=[
    {
        path:'/',
        exact: true,
        main: () => <Index />
    },
    {
        path:'/nha-tuyen-dung',
        exact: true,
        main: () => <Employer />
    },
    {
        path:'/danh-sach',
        exact: true,
        main: () => <List />
    },
    {
        path:'/dang-nhap',
        exact: true,
        main: () => <Login />
    },
    {
        path:'/dang-ky',
        exact: true,
        main: () => <Register />
    },
    {
        path:'/dang-ky/nha-tuyen-dung',
        exact: true,
        main: () => <RegisterEmployer />
    },
    {
        path:'/dang-ky/nguoi-tim-viec',
        exact: true,
        main: () => <RegisterApplicant />
    },
    {
        path:'',
        exact: false,
        main: () => <NotFoundPage />
    }
];
export default routes;
