const BASE_URL = "http://localhost:8080/api";

export interface IProduct {
  _id: string;
  slug: string;
  category: string;
  gender: string;
  style: string;
  color: string;
  price: number;
  images: string[];
  sizes: {
    size: number;
    stock: number;
  }[];
  productFeatures: string[];
  bannerImg: string;
  bannerImgSm: string;
  bannerTitle: string;
  bannerDescription: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function fetchProduct(slug: string) {
  return await fetch(`${BASE_URL}/product/getproduct/${slug}`);
}

export async function fetchProducts(
  gender: string,
  category: string,
  style?: string
) {
  let paramString = `/${gender}`;

  if (category) paramString += `/${category}`;
  if (style) paramString += `/${style}`;

  return await fetch(`${BASE_URL}/product/getproducts${paramString}`);
}
