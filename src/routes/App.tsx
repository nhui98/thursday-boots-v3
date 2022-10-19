import Layout from "@components/layouts/Layout";
import Product from "@pages/products/Product/Product";
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
        element: <Product />,
        loader: async ({ params: { slug } }: { params: Params<string> }) => {
          if (!slug) throw new Error("Product Not Found");
          const { product, products } = await getProduct(slug);
          console.log({ product, products });

          if (!product) throw new Error("Product Not Found");
          return { product, products };
        },
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
