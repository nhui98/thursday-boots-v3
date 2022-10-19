import { MOCK_DB } from "@pages/products/ProductsListing/data";

export async function getProductsByGenderCategory(
  gender: string,
  category: string
) {
  const products = MOCK_DB.filter(
    (product) => product.gender === gender && product.category === category
  );

  return products;
}

export async function getProductsByGenderCategoryStyle(
  gender: string,
  category: string,
  style: string
) {
  const products = MOCK_DB.filter(
    (product) =>
      product.gender === gender &&
      product.category === category &&
      product.style === style
  );

  return products;
}

export async function getProduct(slug: string) {
  const product = MOCK_DB.find((p) => p.slug === slug);
  const products = MOCK_DB.filter((p) => product?.style === p.style);

  return { product, products };
}
