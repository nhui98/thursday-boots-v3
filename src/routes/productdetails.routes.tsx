import Product from "@pages/Product";
import {
  fetchProduct,
  fetchProducts,
  IProduct,
} from "@utils/api/fetchProducts";
import { queryClient } from "@utils/query-client";
import { Params } from "react-router-dom";

export default [
  {
    path: "product-details/:slug",
    element: <Product />,
    loader: async ({ params: { slug } }: { params: Params<string> }) => {
      if (!slug) throw new Error("Product Not Found");

      const product: IProduct = await queryClient
        .fetchQuery(["get-product", slug], () => fetchProduct(slug))
        .then((data) => data.json());

      const products: IProduct[] = await queryClient
        .fetchQuery(
          ["get-products", product.gender, product.category, product.style],
          () => fetchProducts(product.gender, product.category, product.style)
        )
        .then((data) => data.json());

      if (!product) throw new Error("Product Not Found");

      return { product, products };
    },
  },
];
