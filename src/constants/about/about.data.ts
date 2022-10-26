export interface BannerItem {
  id: number;
  img: string;
  img2: string;
  alt: string;
  title: string;
}

export const BANNER_DATA: BannerItem[] = [
  {
    id: 0,
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781334/thursday/about/Banner1_ah7b31.webp",
    img2: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781334/thursday/about/Banner1-sm_z2uejg.webp",
    alt: "our story",
    title: "Our Philosophy Is Simple. You Deserve It All.",
  },
  {
    id: 1,
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781334/thursday/about/Banner2_c6zond.webp",
    img2: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781334/thursday/about/Banner2-sm_tqtfca.webp",
    alt: "our product",
    title: "Finding The Perfect Fit.",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781335/thursday/about/Banner3_izf8nl.webp",
    img2: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781335/thursday/about/Banner3-sm_txgkuc.webp",
    alt: "our values",
    title: "Products Made The Right Way. Always.",
  },
];

export interface ILink {
  id: number;
  slug?: string;
  text: string;
  href: string;
}

export const BANNER_LINKS: ILink[] = [
  {
    id: 0,
    slug: "our-story",
    text: "OUR STORY",
    href: "/about/our-story",
  },
  {
    id: 1,
    slug: "our-product",
    text: "OUR PRODUCT",
    href: "/about/our-product",
  },
  {
    id: 2,
    slug: "our-values",
    text: "OUR VALUES",
    href: "/about/our-values",
  },
];
