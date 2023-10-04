import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from "/src/components/Nav/Navbar";
import Footer from './components/Global/Footer';
import LandingPg from './pages/LandingPg/LandingPg';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Home/Home';
import ListCalendar from './components/Home/ListCalendar';
import Dashboard from './pages/Dashboard/Dashboard';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/calendar",
        element: <ListCalendar />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/welcome",
    element: <LandingPg />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {

  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App;