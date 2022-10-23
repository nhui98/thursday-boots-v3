import Layout from "@components/layouts/Layout";
import LayoutCheckout from "@components/layouts/LayoutCheckout";
import Information from "@pages/checkout/Information";
import Shipping from "@pages/checkout/Shipping";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProductListingRoutes from "./productlisting.routes";
import RoutesAbout from "./Routes-About";
import RoutesHelp from "./Routes-Help";
import RoutesHome from "./Routes-Home";
import RoutesProduct from "./Routes-Product";

const router = createBrowserRouter([
  ...RoutesHome,
  {
    path: "/",
    element: <Layout />,
    children: [
      ...RoutesAbout,
      ...RoutesHelp,
      ...ProductListingRoutes,
      ...RoutesProduct,
    ],
  },
  {
    path: "checkout",
    element: <LayoutCheckout />,
    children: [
      {
        path: "information",
        element: <Information />,
      },
      {
        path: "shipping",
        element: <Shipping />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
