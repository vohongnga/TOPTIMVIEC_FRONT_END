import Router from 'react-router-dom';
import IndexPage from './pages/nhatuyendung/IndexPage';
const routes=[
    {
        path:'/nha-tuyen-dung',
        exact: true,
        main: () => <IndexPage />
    },
];
export default routes;
