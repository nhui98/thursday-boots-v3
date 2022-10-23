import SlideShow1 from "./images/slide-1.webp";
import SlideShowSmall1 from "./images/slide-1-sm.webp";
import SlideShow2 from "./images/slide-2.webp";
import SlideShowSmall2 from "./images/slide-2-sm.webp";
import SlideShow3 from "./images/slide-3.webp";
import SlideShowSmall3 from "./images/slide-3-sm.webp";

export const SLIDESHOW_DATA = [
  {
    slideNo: 1,
    img: SlideShow1,
    imgSmall: SlideShowSmall1,
    title: ["Highest Quality.", "Honest Prices."],
    description: "Handcrafted With Integrity",
    buttons: [
      {
        text: "Shop Men",
        href: "/product-listing/mens/boots",
      },
      {
        text: "Shop Women",
        href: "/product-listing/womens/boots",
      },
    ],
  },
  {
    slideNo: 2,
    img: SlideShow2,
    imgSmall: SlideShowSmall2,
    title: ["Saddle Up"],
    description:
      "Step Into The Rodeo, A Western Boot Designed For Your Everyday",
    buttons: [
      {
        text: "Shop Women's Boots",
        href: "/product-listing/womens/boots",
      },
    ],
  },
  {
    slideNo: 3,
    img: SlideShow3,
    imgSmall: SlideShowSmall3,
    title: ["The Premier Low Top"],
    description:
      "The Essential Leather Sneaker, Now Available In Men's And Women's",
    buttons: [
      {
        text: "Shop Men",
        href: "/product-listing/mens/sneakers",
      },
      {
        text: "Shop Women",
        href: "/product-listing/womens/sneakers",
      },
    ],
  },
];
