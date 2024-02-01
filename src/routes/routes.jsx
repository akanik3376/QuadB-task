import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Details from '../pages/Details';
import MyBooking from '../pages/MyBooking';

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
            {
                path: '/my-booking',
                element: <MyBooking />,

            },
        ],
    },
]);

export default routes;
