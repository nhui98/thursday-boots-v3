import { ProductCard } from "@components/products/ProductCard/ProductCard";
import { useLoaderData } from "react-router-dom";

import { Product } from "./data";

interface LoaderData {
  products: Product[];
  styles: string[];
}

export default function ProductsListing() {
  const { products, styles } = useLoaderData() as LoaderData;

  return (
    <main className="w-full">
      <div className="flex flex-col gap-y-12">
        {styles.map((style) => (
          <div className="flex flex-col gap-y-8" key={style}>
            <h2 className="border-b-[1px] py-4 text-xl font-bold capitalize">
              {style}
            </h2>
            <div className="grid grid-cols-[repeat(4,1fr)] gap-x-4 gap-y-8">
              {products.map(
                (product) =>
                  product.style === style && (
                    <ProductCard key={product.id} product={product} />
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
