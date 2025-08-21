import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../views/Home";
import { Detail } from "../views/Detail";
import { Search } from "../views/Search";
import Login from "../views/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
   {
    path: "/search",
    element: <Search />,
  },{
    path: "/login",
    element: <Login />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
