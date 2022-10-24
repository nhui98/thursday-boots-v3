import Men1 from "/assets/images/mens/captain/matteblack-1.webp";
import Men1Alt from "/assets/images/mens/captain/matteblack-2.webp";
import Men2 from "/assets/images/mens/cavalier/sandstone-1.webp";
import Men2Alt from "/assets/images/mens/cavalier/sandstone-2.webp";
import Men3 from "/assets/images/mens/scout/ash-1.webp";
import Men3Alt from "/assets/images/mens/scout/ash-2.webp";
import Men4 from "/assets/images/mens/wingtip/chocolate-1.webp";
import Men4Alt from "/assets/images/mens/wingtip/chocolate-2.webp";
import Women3 from "/assets/images/womens/captain/matteblack-1.webp";
import Women3Alt from "/assets/images/womens/captain/matteblack-2.webp";
import Women2 from "/assets/images/womens/knockout/matteblack-1.webp";
import Women2Alt from "/assets/images/womens/knockout/matteblack-2.webp";
import Women1 from "/assets/images/womens/legend/matteblack-1.webp";
import Women1Alt from "/assets/images/womens/legend/matteblack-2.webp";

export const MENS_DATA: CollectionType[] = [
  {
    id: 1,
    href: "/product-details/mens-boots-captain-matteblack",
    img: Men1,
    altImg: Men1Alt,
    description: "Men Captain Black Matte",
    style: "Captain",
    color: "Black Matte",
    price: 199,
  },
  {
    id: 2,
    href: "/product-details/mens-boots-cavalier-sandstone",
    img: Men2,
    altImg: Men2Alt,
    description: "Men Cavalier Sandstone",
    style: "Cavalier",
    color: "Sandstone",
    price: 190,
  },
  {
    id: 3,
    href: "/product-details/mens-boots-scout-ash",
    img: Men3,
    altImg: Men3Alt,
    description: "Men Scout Ash",
    style: "Scout",
    color: "Ash",
    price: 149,
  },
  {
    id: 4,
    href: "/product-details/mens-boots-wingtip-chocolate",
    img: Men4,
    altImg: Men4Alt,
    description: "Men Wingtip Chocolate",
    style: "Wingtip",
    color: "Chocolate",
    price: 235,
  },
];

export const WOMENS_DATA: CollectionType[] = [
  {
    id: 1,
    href: "/product-details/womens-boots-legend-matteblack",
    img: Women1,
    altImg: Women1Alt,
    description: "Women Legend Black Matte",
    style: "Legend",
    color: "Black Matte",
    price: 160,
  },
  {
    id: 2,
    href: "/product-details/womens-boots-knockout-matteblack",
    img: Women2,
    altImg: Women2Alt,
    description: "Women Knockout Black Matte",
    style: "Knockout",
    color: "Black Matte",
    price: 168,
  },
  {
    id: 3,
    href: "/product-details/womens-boots-captain-matteblack",
    img: Women3,
    altImg: Women3Alt,
    description: "Women Captain Black Matte",
    style: "Captain",
    color: "Black Matte",
    price: 190,
  },
];

export interface CollectionType {
  id: number;
  href: string;
  img: string;
  altImg: string;
  description: string;
  style: string;
  color: string;
  price: number;
}
