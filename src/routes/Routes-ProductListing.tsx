import {
  MENU_LINKS_MEN,
  MENU_LINKS_WOMEN,
} from "@components/common/Navbar/data";
import LayoutProductsListing from "@components/layouts/LayoutProductListing";
import NotFound from "@pages/NotFound";
import ProductsListing from "@pages/products/ProductsListing/ProductsListing";
import {
  getProductsByGenderCategory,
  getProductsByGenderCategoryStyle,
} from "@utils/api/fetchProducts";
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
        element: <ProductsListing />,
        loader: async ({
          params: { gender, category },
        }: {
          params: Params<string>;
        }) => {
          if (!gender || !category) throw new Error("No Products Found.");
          const products = await getProductsByGenderCategory(gender, category);
          if (!products.length) throw new Error("No Products Found.");

          const styles = Array.from(
            new Set(products.map((product) => product.style))
          );

          return { products, styles };
        },
      },
      {
        path: ":category/:style",
        element: <ProductsListing />,
        loader: async ({
          params: { gender, category, style },
        }: {
          params: Params<string>;
        }) => {
          if (!gender || !category || !style)
            throw new Error("No Products Found.");
          const products = await getProductsByGenderCategoryStyle(
            gender,
            category,
            style
          );
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
