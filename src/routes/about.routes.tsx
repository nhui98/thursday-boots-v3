import LayoutAbout from "@components/layouts/LayoutAbout";
import { BANNER_DATA, BANNER_LINKS } from "@constants/about/about.data";
import OurProduct from "@pages/about/OurProduct";
import OurStory from "@pages/about/OurStory";
import OurValues from "@pages/about/OurValues";

export default [
  {
    path: "about/our-story",
    element: (
      <LayoutAbout bannerData={BANNER_DATA[0]} bannerLinks={BANNER_LINKS} />
    ),
    children: [
      {
        path: "",
        element: <OurStory />,
      },
    ],
  },
  {
    path: "about/our-product",
    element: (
      <LayoutAbout bannerData={BANNER_DATA[1]} bannerLinks={BANNER_LINKS} />
    ),
    children: [
      {
        path: "",
        element: <OurProduct />,
      },
    ],
  },
  {
    path: "about/our-values",
    element: (
      <LayoutAbout bannerData={BANNER_DATA[2]} bannerLinks={BANNER_LINKS} />
    ),
    children: [
      {
        path: "",
        element: <OurValues />,
      },
    ],
  },
];
