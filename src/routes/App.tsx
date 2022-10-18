import Layout from "@components/layouts/Layout";
import ProductDetails from "@pages/products/ProductDetails/ProductDetails";
import { getProduct } from "@utils/api/fetchProducts";
import { createBrowserRouter, Params, RouterProvider } from "react-router-dom";

import RoutesAbout from "./Routes-About";
import RoutesHelp from "./Routes-Help";
import RoutesHome from "./Routes-Home";
import RoutesProductListing from "./Routes-ProductListing";

const router = createBrowserRouter([
  ...RoutesHome,
  {
    path: "/",
    element: <Layout />,
    children: [
      ...RoutesAbout,
      ...RoutesHelp,
      ...RoutesProductListing,
      {
        path: "product-details/:slug",
        element: <ProductDetails />,
        loader: async ({ params: { slug } }: { params: Params<string> }) => {
          if (!slug) throw new Error("Product Not Found");
          const product = await getProduct(slug);

          if (!product) throw new Error("Product Not Found");
          return product;
        },
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
