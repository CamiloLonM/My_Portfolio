import Login from '@/components/Auth/Login';
import Home from '@/components/Home';

import { RouteObject } from 'react-router';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    // element: <Register />,
  },
];

export default routes;
