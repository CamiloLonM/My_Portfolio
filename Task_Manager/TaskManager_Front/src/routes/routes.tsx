import Login from '@/components/Auth/Login';
import Home from '@/components/Home';

import { RouteObject } from 'react-router';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/register',
    // element: <Register />,
  },
];

export default routes;
