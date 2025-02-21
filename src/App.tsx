import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet,
} from 'react-router-dom';

import Login from './routes/Login';
import Home from './routes/Home';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <ScrollRestoration />
          <Outlet />
        </>
      ),
      children: [
        {
          path: '',
          element: <Login />,
        },
        {
          path: 'home',
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
