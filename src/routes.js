import React from 'react';
import Index from './components/Index';
import Employer from './components/nhatuyendung/Index/Index';
import List from './components/nhatuyendung/DanhSach/Index';
import Login from './components/Login';
import Register from './components/Register';
import Register_NTD from './components/nhatuyendung/Register_NTD';
import Register_NTV from './components/nguoitimviec/Register_NTV';
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
        main: () => <Register_NTD />
    },
    {
        path:'/dang-ky/nguoi-tim-viec',
        exact: true,
        main: () => <Register_NTV />
    },
    {
        path:'',
        exact: false,
        main: () => <NotFoundPage />
    }
];
export default routes;
