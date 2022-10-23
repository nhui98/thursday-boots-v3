import { ProductCard } from "@components/products/ProductCard/ProductCard";
import { IProduct } from "@utils/api/fetchProducts";
import { useLoaderData } from "react-router-dom";

interface LoaderData {
  products: IProduct[];
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
            <div className="grid grid-cols-[repeat(1,1fr)] gap-x-4 gap-y-8 sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(4,1fr)]">
              {products.map(
                (product) =>
                  product.style === style && (
                    <ProductCard key={product._id} product={product} />
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
