import LayoutProductsListing from "@components/layouts/LayoutProductListing";
import {
  MENU_LINKS_MEN,
  MENU_LINKS_WOMEN,
} from "@constants/navbar/navbar.data";
import NotFound from "@pages/NotFound";
import Products from "@pages/Products";
import { fetchProducts, IProduct } from "@utils/api/fetchProducts";
import { queryClient } from "@utils/query-client";
import { Params } from "react-router-dom";

export default [
  {
    path: "product-listing/:gender",
    element: <LayoutProductsListing />,
    errorElement: <NotFound />,
    loader: ({ params: { gender } }: { params: Params<string> }) => {
      switch (gender) {
        case "mens":
          return MENU_LINKS_MEN;
        case "womens":
          return MENU_LINKS_WOMEN;
        default:
          throw new Error("No Products Found.");
      }
    },
    children: [
      {
        path: ":category",
        element: <Products />,
        loader: async ({
          params: { gender, category },
        }: {
          params: Params<string>;
        }) => {
          if (!gender || !category) throw new Error("No Products Found.");

          const products: IProduct[] = await queryClient
            .fetchQuery(["get-products", gender, category], () =>
              fetchProducts(gender, category)
            )
            .then((data) => data.json());

          if (!products.length) throw new Error("No Products Found.");

          const styles = Array.from(
            new Set(products.map((product) => product.style))
          );

          return { products, styles };
        },
      },
      {
        path: ":category/:style",
        element: <Products />,
        loader: async ({
          params: { gender, category, style },
        }: {
          params: Params<string>;
        }) => {
          if (!gender || !category || !style)
            throw new Error("No Products Found.");

          const products: IProduct[] = await queryClient
            .fetchQuery(["get-products", gender, category, style], () =>
              fetchProducts(gender, category, style)
            )
            .then((data) => data.json());

          if (!products.length) throw new Error("No Products Found.");

          const styles = Array.from(
            new Set(products.map((product) => product.style))
          );

          return { products, styles };
        },
      },
    ],
  },
];
