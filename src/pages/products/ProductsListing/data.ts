export interface ProductType {
  id: number;
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
  BannerImg: string;
  BannerImgSm: string;
  BannerTitle: string;
  BannerDescription: string;
}

export const MOCK_DB: ProductType[] = [
  {
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
      { size: 9, stock: 0 },
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
    BannerImgSm: "/assets/images/mens/captain/matteblack-banner-sm.webp",
    BannerTitle: "Rugged & Resilient",
    BannerDescription:
      "Built for the men who wear their boots hard. The Rugged & Resilient matte leather upper, sourced exclusively from Tier 1 USA cattle hides, was custom created to look great with years of hard wear and minimal care. From the Kevlar® blend laces to the durable steel shank, every material was carefully created so that you can go the extra mile with confidence.",
  },
  {
    id: 1,
    slug: "mens-boots-captain-blue",
    category: "boots",
    gender: "mens",
    style: "captain",
    color: "blue",
    price: 199.0,
    images: [
      "/assets/images/mens/captain/blue-1.webp",
      "/assets/images/mens/captain/blue-2.webp",
      "/assets/images/mens/captain/blue-3.webp",
      "/assets/images/mens/captain/blue-4.webp",
      "/assets/images/mens/captain/blue-5.webp",
      "/assets/images/mens/captain/blue-6.webp",
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
    BannerImg: "/assets/images/mens/captain/blue-banner.webp",
    BannerImgSm: "",
    BannerTitle: "Rugged & Resilient",
    BannerDescription:
      "Built for the men who wear their boots hard. The Rugged & Resilient matte leather upper, sourced exclusively from Tier 1 USA cattle hides, was custom created to look great with years of hard wear and minimal care. From the Kevlar® blend laces to the durable steel shank, every material was carefully created so that you can go the extra mile with confidence.",
  },
  {
    id: 2,
    slug: "mens-boots-captain-canyon",
    category: "boots",
    gender: "mens",
    style: "captain",
    color: "canyon",
    price: 199.0,
    images: [
      "/assets/images/mens/captain/canyon-1.webp",
      "/assets/images/mens/captain/canyon-2.webp",
      "/assets/images/mens/captain/canyon-3.webp",
      "/assets/images/mens/captain/canyon-4.webp",
      "/assets/images/mens/captain/canyon-5.webp",
      "/assets/images/mens/captain/canyon-6.webp",
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
    BannerImg: "/assets/images/mens/captain/canyon-banner.webp",
    BannerImgSm: "",
    BannerTitle: "Rugged & Resilient",
    BannerDescription:
      "Built for the men who wear their boots hard. The Rugged & Resilient matte leather upper, sourced exclusively from Tier 1 USA cattle hides, was custom created to look great with years of hard wear and minimal care. From the Kevlar® blend laces to the durable steel shank, every material was carefully created so that you can go the extra mile with confidence.",
  },
  {
    id: 3,
    slug: "mens-boots-captain-grey",
    category: "boots",
    gender: "mens",
    style: "captain",
    color: "grey",
    price: 199.0,
    images: [
      "/assets/images/mens/captain/grey-1.webp",
      "/assets/images/mens/captain/grey-2.webp",
      "/assets/images/mens/captain/grey-3.webp",
      "/assets/images/mens/captain/grey-4.webp",
      "/assets/images/mens/captain/grey-5.webp",
      "/assets/images/mens/captain/grey-6.webp",
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
    BannerImg: "/assets/images/mens/captain/grey-banner.webp",
    BannerImgSm: "",
    BannerTitle: "Rugged & Resilient",
    BannerDescription:
      "Built for the men who wear their boots hard. The Rugged & Resilient matte leather upper, sourced exclusively from Tier 1 USA cattle hides, was custom created to look great with years of hard wear and minimal care. From the Kevlar® blend laces to the durable steel shank, every material was carefully created so that you can go the extra mile with confidence.",
  },
  {
    id: 4,
    slug: "mens-boots-captain-tobacco",
    category: "boots",
    gender: "mens",
    style: "captain",
    color: "tobacco",
    price: 199.0,
    images: [
      "/assets/images/mens/captain/tobacco-1.webp",
      "/assets/images/mens/captain/tobacco-2.webp",
      "/assets/images/mens/captain/tobacco-3.webp",
      "/assets/images/mens/captain/tobacco-4.webp",
      "/assets/images/mens/captain/tobacco-5.webp",
      "/assets/images/mens/captain/tobacco-6.webp",
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
    BannerImg: "/assets/images/mens/captain/tobacco-banner.webp",
    BannerImgSm: "",
    BannerTitle: "Rugged & Resilient",
    BannerDescription:
      "Built for the men who wear their boots hard. The Rugged & Resilient matte leather upper, sourced exclusively from Tier 1 USA cattle hides, was custom created to look great with years of hard wear and minimal care. From the Kevlar® blend laces to the durable steel shank, every material was carefully created so that you can go the extra mile with confidence.",
  },
  {
    id: 5,
    slug: "mens-boots-president-matteblack",
    category: "boots",
    gender: "mens",
    style: "president",
    color: "matte black",
    price: 199.0,
    images: [
      "/assets/images/mens/president/matteblack-1.webp",
      "/assets/images/mens/president/matteblack-2.webp",
      "/assets/images/mens/president/matteblack-3.webp",
      "/assets/images/mens/president/matteblack-4.webp",
      "/assets/images/mens/president/matteblack-5.webp",
      "/assets/images/mens/president/matteblack-6.webp",
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
    BannerImg: "/assets/images/mens/president/matteblack-banner.webp",
    BannerImgSm: "",
    BannerTitle: "The President",
    BannerDescription:
      "Clean and timeless design built for longevity. This release of the boot that started it all has been streamlined for a dressier silhouette that's every bit as versatile as you expect from Thursday Boot Company. Whether at work, on a date, or in stormy weather, step forward in confidence in the President boot.",
  },
];
