import Men1 from "./images/mens-1.webp";
import Men1Alt from "./images/mens-1-alt.webp";
import Men2 from "./images/mens-2.webp";
import Men2Alt from "./images/mens-2-alt.webp";
import Men3 from "./images/mens-3.webp";
import Men3Alt from "./images/mens-3-alt.webp";
import Men4 from "./images/mens-4.webp";
import Men4Alt from "./images/mens-4-alt.webp";
import Women1 from "./images/womens-1.webp";
import Women1Alt from "./images/womens-1-alt.webp";
import Women2 from "./images/womens-2.webp";
import Women2Alt from "./images/womens-2-alt.webp";
import Women3 from "./images/womens-3.webp";
import Women3Alt from "./images/womens-3-alt.webp";
import Women4 from "./images/womens-4.webp";
import Women4Alt from "./images/womens-4-alt.webp";

export const MENS_DATA: CollectionType[] = [
  {
    id: 1,
    href: "/",
    img: Men1,
    altImg: Men1Alt,
    description: "Men Captain Black Matte",
    style: "Captain",
    color: "Black Matte",
    price: 199,
  },
  {
    id: 2,
    href: "/",
    img: Men2,
    altImg: Men2Alt,
    description: "Men Cavalier Sandstone",
    style: "Cavalier",
    color: "Sandstone",
    price: 190,
  },
  {
    id: 3,
    href: "/",
    img: Men3,
    altImg: Men3Alt,
    description: "Men Cadet Walnut",
    style: "Cadet",
    color: "Walnut",
    price: 190,
  },
  {
    id: 4,
    href: "/",
    img: Men4,
    altImg: Men4Alt,
    description: "Men Wingtip Burgandy",
    style: "Wingtip",
    color: "Burgandy",
    price: 235,
  },
];

export const WOMENS_DATA: CollectionType[] = [
  {
    id: 1,
    href: "/",
    img: Women1,
    altImg: Women1Alt,
    description: "Women Legend Black Matte",
    style: "Legend",
    color: "Black Matte",
    price: 160,
  },
  {
    id: 2,
    href: "/",
    img: Women2,
    altImg: Women2Alt,
    description: "Women Knockout Black Matte",
    style: "Knockout",
    color: "Black Matte",
    price: 168,
  },
  {
    id: 3,
    href: "/",
    img: Women3,
    altImg: Women3Alt,
    description: "Women Captain Black Matte",
    style: "Captain",
    color: "Black Matte",
    price: 190,
  },
  {
    id: 4,
    href: "/",
    img: Women4,
    altImg: Women4Alt,
    description: "Women Combat Black",
    style: "Combat",
    color: "Black",
    price: 180,
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