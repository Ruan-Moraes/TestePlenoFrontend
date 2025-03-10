import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet,
  Navigate,
} from 'react-router-dom';

import Login from './routes/Login';
import Register from './routes/Register';
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
          index: true,
          element: <Navigate to="/login" replace />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'register',
          element: <Register />,
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
