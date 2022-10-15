import Banner1 from "./images/Banner1.webp";
import Banner1sm from "./images/Banner1-sm.webp";
import Banner2 from "./images/Banner2.webp";
import Banner2sm from "./images/Banner2-sm.webp";
import Banner3 from "./images/Banner3.webp";
import Banner3sm from "./images/Banner3-sm.webp";

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
    img: Banner1,
    img2: Banner1sm,
    alt: "our story",
    title: "Our Philosophy Is Simple. You Deserve It All.",
  },
  {
    id: 1,
    img: Banner2,
    img2: Banner2sm,
    alt: "our product",
    title: "Finding The Perfect Fit.",
  },
  {
    id: 2,
    img: Banner3,
    img2: Banner3sm,
    alt: "our values",
    title: "Products Made The Right Way. Always.",
  },
];

export interface ILink {
  id: number;
  slug: string;
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
