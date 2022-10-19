import { ProductType } from "@pages/products/ProductsListing/data";
import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ProductDetails({
  product,
  products,
}: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState<number>();
  const [displayColor, setDisplayColor] = useState(product.color);

  return (
    <section className="flex flex-col gap-y-2">
      <h2 className="text-3xl font-bold capitalize">{product.style}</h2>
      <p>&#163;{product.price}</p>
      <p className="flex items-center gap-x-2 text-blue">
        <BsCheckCircleFill /> Honest Pricing Guarantee
      </p>
      <p className="font-semibold capitalize">Color: {displayColor}</p>
      <ul className="flex flex-wrap">
        {products.map((p) => (
          <li
            key={p.slug}
            className={"pr-2"}
            onMouseEnter={() => setDisplayColor(p.color)}
            onMouseLeave={() => setDisplayColor(product.color)}
          >
            <Link to={`/product-details/${p.slug}`}>
              <img
                src={p.images[0]}
                alt={p.slug}
                className={`w-16 border-[1px] ${
                  p.slug === product.slug ? "border-black/40" : ""
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4">
        Size (US): Order ½ size smaller than you wear in sneakers.
      </p>
      <ul className="flex flex-wrap gap-2">
        {product.sizes.map(({ size, stock }) => (
          <li key={size}>
            <button
              className={`flex h-16 w-16 items-center justify-center border-[1px] ${
                stock === 0 ? "bg-[gray]" : "cursor-pointer hover:bg-black/10"
              } ${selectedSize === size ? "border-black/40" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col gap-y-8">
        <button className="w-full bg-blue py-3 font-semibold text-white">
          ADD TO CART
        </button>
        <div className="text-center">
          <p className="font-semibold">Free Shipping to the U.K.</p>
          <p className="text-black/70">Easy Returns & Exchanges</p>
        </div>
      </div>
    </section>
  );
}

interface ProductDetailsProps {
  product: ProductType;
  products: ProductType[];
}
