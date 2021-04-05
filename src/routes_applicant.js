import Index from './pages/common/Index';
import NotFoundPage from './pages/NotFoundPage';

const routes_applicant=[
    {
        path:'/',
        exact: true,
        main: () => <Index />
    },
    {
        path:'',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes_applicant;
