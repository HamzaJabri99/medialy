import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import NavBar from "./components/navbar/NavBar";

function App() {
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
