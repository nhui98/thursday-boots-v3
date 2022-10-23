import ProductBanner from "@components/products/ProductBanner/ProductBanner";
import ProductDetails from "@components/products/ProductDetails/ProductDetails";
import ProductFeatures from "@components/products/ProductFeatures/ProductFeatures";
import ProductImages from "@components/products/ProductImages/ProductImages";
import { IProduct } from "@utils/api/fetchProducts";
import { useLoaderData } from "react-router-dom";

export default function Product() {
  const { product, products } = useLoaderData() as {
    product: IProduct;
    products: IProduct[];
  };

  return (
    <main className="mt-20">
      <div className="flex flex-col gap-y-8 bg-lightgrey py-12">
        <div className="container mx-auto grid grid-cols-[repeat(1,1fr)] gap-y-12 gap-x-8 px-6 lg:grid-cols-[repeat(2,1fr)]">
          <ProductImages images={product.images} slug={product.slug} />
          <ProductDetails product={product} products={products} />
        </div>
        <ProductFeatures features={product.productFeatures} />
      </div>
      <ProductBanner
        img={product.bannerImg}
        imgSmall={product.bannerImgSm}
        description={product.bannerDescription}
        title={product.bannerTitle}
      />
    </main>
  );
}
