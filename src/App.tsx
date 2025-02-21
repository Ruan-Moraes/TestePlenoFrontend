import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet,
} from 'react-router-dom';

import Login from './routes/Login';

import './styles/index.css';

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
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
