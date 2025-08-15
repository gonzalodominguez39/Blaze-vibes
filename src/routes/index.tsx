import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../views/Home";
import { Detail } from "../views/Detail";
import { Player } from "../components/common/Player";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
