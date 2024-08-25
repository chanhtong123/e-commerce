import React from "react";
import { useRoutes } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ECommerceHomePagePage from "./pages/ECommerceHomePage";
import LogInPage from "./pages/LogIn";
import ProductDetailspagePage from "./pages/ProductDetailspace";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <ECommerceHomePagePage />,
    },
    {
      path: "login",
      element: <LogInPage />,
    },
    {
      path: "productdetail",
      element: <ProductDetailspagePage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;



