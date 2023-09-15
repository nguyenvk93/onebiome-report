import { RouterProvider } from 'react-router-dom';
import AllRoutes from './routes/routes';

const App = () => {
  return <RouterProvider router={AllRoutes()} />;
};

export default App;
