import { ProductType } from "@pages/products/ProductsListing/data";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: ProductType;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <figure className="">
      <Link to={`/product-details/${product.slug}`}>
        <img
          src={product.images[0]}
          alt={product.slug}
          className="w-full object-cover"
        />
      </Link>
      <figcaption className="mt-2 flex flex-col capitalize">
        <div className="flex justify-between">
          <Link to={`/product-details/${product.slug}`} className="font-bold">
            {product.style}
          </Link>
          <span>&#163;{product.price}</span>
        </div>
        <span className="text-black/60">{product.color}</span>
      </figcaption>
    </figure>
  );
}
