import Layout from "@components/layouts/Layout";
import LayoutCheckout from "@components/layouts/LayoutCheckout";
import Information from "@pages/checkout/Information";
import Shipping from "@pages/checkout/Shipping";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutRoutes from "./about.routes";
import AccountRoutes from "./account.routes";
import HelpRoutes from "./help.routes";
import HomeRoutes from "./home.routes";
import ProductDetailsRoutes from "./productdetails.routes";
import ProductListingRoutes from "./productlisting.routes";

const router = createBrowserRouter([
  ...HomeRoutes,
  {
    path: "/",
    element: <Layout />,
    children: [
      ...AboutRoutes,
      ...HelpRoutes,
      ...ProductListingRoutes,
      ...ProductDetailsRoutes,
      ...AccountRoutes,
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
