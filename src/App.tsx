import { useContext } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet,
} from 'react-router-dom';

import { AuthContext } from './components/context/AuthContext';

import Login from './routes/Login';
import Home from './routes/Home';

function App() {
  const { isLogged } = useContext(AuthContext);

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
          element: isLogged ? <Home /> : <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
