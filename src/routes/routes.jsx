import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Details from '../pages/Details';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/details/:id',
                element: <Details />,

            },
        ],
    },
]);

export default routes;
