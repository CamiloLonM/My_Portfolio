import { createBrowserRouter, RouterProvider } from 'react-router';
import routes from '@/routes/routes';
import '@/styles/main.scss';

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
