import './style.scss';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from "./context/authContext";

function App ()
{
  const { currentUser } = useContext( AuthContext );
  const { darkMode } = useContext( DarkModeContext );


  console.log( "darMode ==>", darkMode );

  const Layout = () =>
  {
    return (
      <div className={ `theme-${ darkMode ? "dark" : "light" }` }>
        <NavBar />
        <div style={ { display: "flex" } }>
          <LeftBar />
          <div style={ { flex: 6 } }>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ( { children } ) =>  //children is home and profile
  {
    if ( !currentUser )
    {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter( [
    {
      path: "/",
      element:
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        }, {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />,
    },
  ] );


  return (
    <div>
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
