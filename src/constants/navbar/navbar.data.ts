export interface PromotionItem {
  id: number;
  img: string;
  title: string;
  description: string;
}

export interface MenuData {
  id: number;
  category: string;
  href: string;
  styles: {
    id: number;
    style: string;
    href: string;
  }[];
}

export const MENU_LINKS_MEN: MenuData[] = [
  {
    id: 0,
    category: "Boots",
    href: "/product-listing/mens/boots",
    styles: [
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
        href: "/product-listing/mens/boots/cavalier",
      },
      {
        id: 4,
        style: "Chukka",
        href: "/product-listing/mens/boots/scout",
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
    href: "/product-listing/mens/sneakers",
    styles: [
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
    href: "/product-listing/mens/shoes",
    styles: [
      {
        id: 1,
        style: "Dress Shoes",
        href: "/product-listing/mens/shoes/executive",
      },
      {
        id: 2,
        style: "Loafers",
        href: "/product-listing/mens/shoes/loafer",
      },
      {
        id: 3,
        style: "Boat Shoes",
        href: "/product-listing/mens/shoes/boat",
      },
    ],
  },
];

export const MENU_LINKS_WOMEN: MenuData[] = [
  {
    id: 1,
    category: "Boots",
    href: "/product-listing/womens/boots",
    styles: [
      {
        id: 1,
        style: "Chelsea",
        href: "/product-listing/womens/boots/legend",
      },
      {
        id: 2,
        style: "High Heels",
        href: "/product-listing/womens/boots/knockout",
      },
      {
        id: 3,
        style: "Captain",
        href: "/product-listing/womens/boots/captain",
      },
    ],
  },
  {
    id: 2,
    category: "Sneakers",
    href: "/product-listing/womens/sneakers",
    styles: [
      {
        id: 1,
        style: "Classic Low Top",
        href: "/product-listing/womens/sneakers/lowtop",
      },
    ],
  },
];

export const MENS_PROMOTION_DATA: PromotionItem[] = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781779/thursday/navbar/men-promo-1_rbs8oo.webp",
    title: "Rugged & Resilient",
    description: "Thoughtfully handcrafted to go the extra mile.",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781779/thursday/navbar/men-promo-2_iuss8q.webp",
    title: "Year-round Essentials",
    description: "Meet the premier low top, your new go-to leather sneaker.",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781780/thursday/navbar/men-promo-3_v8plyv.webp",
    title: "Dress To Impress",
    description: "The saint in hickory hand-finished full-grain leather.",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781780/thursday/navbar/men-promo-4_u1365o.webp",
    title: "Leather Belts",
    description: "The perfect finishing touch.",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781780/thursday/navbar/men-promo-5_aqyeyb.webp",
    title: "So Fresh & So Clean",
    description: "Premium shoe care for your favourite pair of boots.",
  },
];

export const WOMENS_PROMOTION_DATA: PromotionItem[] = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781780/thursday/navbar/women-promo-1_gbqbux.webp",
    title: "Be Legendary",
    description: "Thoughtfully handcrafted to go the extra mile.",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781780/thursday/navbar/women-promo-2_aszca9.webp",
    title: "Saddle Up With The Rodeo",
    description: "Our latest western boot, now available in 4 colors.",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781781/thursday/navbar/women-promo-3_azlo77.webp",
    title: "The Premier Low Top",
    description: "Now available in 6 new colors.",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781781/thursday/navbar/women-promo-4_ddluim.webp",
    title: "Leather Belts",
    description: "The perfect finishing touch to any outfit.",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781781/thursday/navbar/women-promo-5_n59maz.webp",
    title: "So Fresh & So Clean",
    description: "Premium shoe care for your favourite pair of boots.",
  },
];
