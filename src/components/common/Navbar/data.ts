import MenPromo1 from "./images/men-promo-1.webp";
import MenPromo2 from "./images/men-promo-2.webp";
import MenPromo3 from "./images/men-promo-3.webp";
import MenPromo4 from "./images/men-promo-4.webp";
import MenPromo5 from "./images/men-promo-5.webp";
import WomenPromo1 from "./images/women-promo-1.webp";
import WomenPromo2 from "./images/women-promo-2.webp";
import WomenPromo3 from "./images/women-promo-3.webp";
import WomenPromo4 from "./images/women-promo-4.webp";
import WomenPromo5 from "./images/women-promo-5.webp";

export const MENU_LINKS_MEN: MenuData[] = [
  {
    id: 0,
    category: "Boots",
    styles: [
      {
        id: 0,
        style: "All Styles",
        href: "/product-listing/mens/boots",
      },
      {
        id: 1,
        style: "Captain",
        href: "/product-listing/mens/boots/captain",
      },
      {
        id: 2,
        style: "President",
        href: "/product-listing/mens/boots/president",
      },
      {
        id: 3,
        style: "Chelsea",
        href: "/product-listing/mens/boots/chelsea",
      },
      {
        id: 4,
        style: "Chukka",
        href: "/product-listing/mens/boots/chukka",
      },
      {
        id: 5,
        style: "Wingtip",
        href: "/product-listing/mens/boots/wingtip",
      },
    ],
  },
  {
    id: 1,
    category: "Sneakers",
    styles: [
      {
        id: 0,
        style: "All Styles",
        href: "/product-listing/mens/sneakers",
      },
      {
        id: 1,
        style: "Low Top",
        href: "/product-listing/mens/sneakers/lowtop",
      },
      {
        id: 2,
        style: "High Top",
        href: "/product-listing/mens/sneakers/hightop",
      },
    ],
  },
  {
    id: 2,
    category: "Shoes",
    styles: [
      {
        id: 0,
        style: "All Styles",
        href: "/product-listing/mens/sneakers",
      },
      {
        id: 1,
        style: "Dress Shoes",
        href: "/product-listing/mens/sneakers/dressshoes",
      },
      {
        id: 2,
        style: "Loafers",
        href: "/product-listing/mens/sneakers/loafers",
      },
      {
        id: 3,
        style: "Boat Shoes",
        href: "/product-listing/mens/sneakers/boatshoes",
      },
    ],
  },
];

export const MENU_LINKS_WOMEN: MenuData[] = [
  {
    id: 1,
    category: "Boots",
    styles: [
      {
        id: 1,
        style: "Chelsea",
        href: "/",
      },
      {
        id: 2,
        style: "High Heels",
        href: "/",
      },
      {
        id: 3,
        style: "Captain",
        href: "/",
      },
    ],
  },
  {
    id: 2,
    category: "Sneakers",
    styles: [
      {
        id: 1,
        style: "Classic Low Top",
        href: "/",
      },
      {
        id: 2,
        style: "Classic High Top",
        href: "/",
      },
    ],
  },
];

export const MENS_PROMOTION_DATA: PromotionItem[] = [
  {
    id: 1,
    img: MenPromo1,
    title: "Rugged & Resilient",
    description: "Thoughtfully handcrafted to go the extra mile.",
  },
  {
    id: 2,
    img: MenPromo2,
    title: "Year-round Essentials",
    description: "Meet the premier low top, your new go-to leather sneaker.",
  },
  {
    id: 3,
    img: MenPromo3,
    title: "Dress To Impress",
    description: "The saint in hickory hand-finished full-grain leather.",
  },
  {
    id: 4,
    img: MenPromo4,
    title: "Leather Belts",
    description: "The perfect finishing touch.",
  },
  {
    id: 5,
    img: MenPromo5,
    title: "So Fresh & So Clean",
    description: "Premium shoe care for your favourite pair of boots.",
  },
];

export const WOMENS_PROMOTION_DATA: PromotionItem[] = [
  {
    id: 1,
    img: WomenPromo1,
    title: "Be Legendary",
    description: "Thoughtfully handcrafted to go the extra mile.",
  },
  {
    id: 2,
    img: WomenPromo2,
    title: "Saddle Up With The Rodeo",
    description: "Our latest western boot, now available in 4 colors.",
  },
  {
    id: 3,
    img: WomenPromo3,
    title: "The Premier Low Top",
    description: "Now available in 6 new colors.",
  },
  {
    id: 4,
    img: WomenPromo4,
    title: "Leather Belts",
    description: "The perfect finishing touch to any outfit.",
  },
  {
    id: 5,
    img: WomenPromo5,
    title: "So Fresh & So Clean",
    description: "Premium shoe care for your favourite pair of boots.",
  },
];

export interface PromotionItem {
  id: number;
  img: string;
  title: string;
  description: string;
}

export interface MenuData {
  id: number;
  category: string;
  styles: {
    id: number;
    style: string;
    href: string;
  }[];
}
