import { createBrowserRouter } from "react-router-dom";
import Layout from "./featured/layout";
import Home from "./pages/Home";
import GadGets from "./pages/GadGets";
import NotFound from  "./components/static-components/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gadgets",
        element: <GadGets/>
      },
    ],
  },
  {
    path: "/Pages404",
    element: <NotFound  />,
  },
]);

