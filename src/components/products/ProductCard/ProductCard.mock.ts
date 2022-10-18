import { ProductType } from "@pages/products/ProductsListing/data";

export const MOCK_PRODUCT: ProductType = {
  id: 0,
  slug: "mens-boots-captain-matteblack",
  category: "boots",
  gender: "mens",
  style: "captain",
  color: "matte black",
  price: 199.0,
  images: [
    "/assets/images/mens/captain/matteblack-1.webp",
    "/assets/images/mens/captain/matteblack-2.webp",
    "/assets/images/mens/captain/matteblack-3.webp",
    "/assets/images/mens/captain/matteblack-4.webp",
    "/assets/images/mens/captain/matteblack-5.webp",
    "/assets/images/mens/captain/matteblack-6.webp",
  ],
  sizes: [
    { size: 6, stock: 100 },
    { size: 7, stock: 100 },
    { size: 8, stock: 100 },
    { size: 9, stock: 100 },
    { size: 10, stock: 100 },
    { size: 11, stock: 100 },
    { size: 12, stock: 100 },
  ],
  productFeatures: [
    "Rugged & Resilient Leather",
    "Goodyear Welt Construction for Longevity",
    "Fully Lined Supple Glove Leather Interior",
    "Hardwearing Steel Shanks",
    "Poron® Antimicrobial Shock Absorbing Insoles",
    "Long-Lasting Kevlar® Blend Laces",
    "Custom Developed Reinforced Eyelets",
    "Cork-Bed Midsoles that Form to Your Feet",
    "Durable Studded Rubber Outsoles",
    "Handcrafted with Integrity",
  ],
  BannerImg: "/assets/images/mens/captain/matteblack-banner.webp",
  BannerTitle: "Rugged & Resilient",
  BannerDescription:
    "Built for the men who wear their boots hard. The Rugged & Resilient matte leather upper, sourced exclusively from Tier 1 USA cattle hides, was custom created to look great with years of hard wear and minimal care. From the Kevlar® blend laces to the durable steel shank, every material was carefully created so that you can go the extra mile with confidence.",
};
