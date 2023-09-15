import { createBrowserRouter } from 'react-router-dom';
import Pages from '../pages';
import AppLayout from '../AppLayout';

const AllRoutes = () => {
  const routes = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [{ path: '/', element: <Pages /> }]
    }
  ]);

  return routes;
};

export default AllRoutes;
