export const MENS_DATA: CollectionType[] = [
  {
    id: 1,
    href: "/product-details/mens-boots-captain-matteblack",
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666710723/mens/captain/matteblack-1_onvfdl.webp",
    altImg:
      "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666710723/mens/captain/matteblack-2_pljyme.webp",
    description: "Men Captain Black Matte",
    style: "Captain",
    color: "Black Matte",
    price: 199,
  },
  {
    id: 2,
    href: "/product-details/mens-boots-cavalier-sandstone",
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666710729/mens/cavalier/sandstone-1_kfmlsf.webp",
    altImg:
      "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666710729/mens/cavalier/sandstone-2_z5hg9m.webp",
    description: "Men Cavalier Sandstone",
    style: "Cavalier",
    color: "Sandstone",
    price: 190,
  },
  {
    id: 3,
    href: "/product-details/mens-boots-scout-ash",
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666710743/mens/scout/ash-1_dfks04.webp",
    altImg:
      "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666710743/mens/scout/ash-2_fxieww.webp",
    description: "Men Scout Ash",
    style: "Scout",
    color: "Ash",
    price: 149,
  },
  {
    id: 4,
    href: "/product-details/mens-boots-wingtip-chocolate",
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666710747/mens/wingtip/chocolate-1_vvllfm.webp",
    altImg:
      "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666710747/mens/wingtip/chocolate-2_lkomdn.webp",
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
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666710756/womens/legend/matteblack-1_e1j1v9.webp",
    altImg:
      "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666710757/womens/legend/matteblack-2_lsgew0.webp",
    description: "Women Legend Black Matte",
    style: "Legend",
    color: "Black Matte",
    price: 160,
  },
  {
    id: 2,
    href: "/product-details/womens-boots-knockout-matteblack",
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666710754/womens/knockout/matteblack-1_damtwg.webp",
    altImg:
      "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666710754/womens/knockout/matteblack-2_pykbd8.webp",
    description: "Women Knockout Black Matte",
    style: "Knockout",
    color: "Black Matte",
    price: 168,
  },
  {
    id: 3,
    href: "/product-details/womens-boots-captain-matteblack",
    img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666710750/womens/captain/matteblack-1_chqccg.webp",
    altImg:
      "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666710750/womens/captain/matteblack-2_mbgvbz.webp",
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
