import Product from "@pages/products/Product/Product";
import { getProduct } from "@utils/api/fetchProducts";
import { Params } from "react-router-dom";

export default [
  {
    path: "product-details/:slug",
    element: <Product />,
    loader: async ({ params: { slug } }: { params: Params<string> }) => {
      if (!slug) throw new Error("Product Not Found");
      const { product, products } = await getProduct(slug);

      if (!product) throw new Error("Product Not Found");
      return { product, products };
    },
  },
];
