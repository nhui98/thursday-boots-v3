import { AboutLayout } from "@components/layouts";
import { BANNER_DATA, BANNER_LINKS } from "@pages/about/data";
import OurProduct from "@pages/about/OurProduct/OurProduct";
import OurStory from "@pages/about/OurStory/OurStory";
import OurValues from "@pages/about/OurValues/OurValues";

export default [
  {
    path: "about/our-story",
    element: (
      <AboutLayout bannerData={BANNER_DATA[0]} bannerLinks={BANNER_LINKS} />
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
      <AboutLayout bannerData={BANNER_DATA[1]} bannerLinks={BANNER_LINKS} />
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
      <AboutLayout bannerData={BANNER_DATA[2]} bannerLinks={BANNER_LINKS} />
    ),
    children: [
      {
        path: "",
        element: <OurValues />,
      },
    ],
  },
];
