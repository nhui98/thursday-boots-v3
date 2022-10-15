import { BANNER_DATA } from "@components/about/Banner/data";
import { AboutLayout } from "@components/layouts";
import OurProduct from "@pages/about/OurProduct/OurProduct";
import OurStory from "@pages/about/OurStory/OurStory";
import OurValues from "@pages/about/OurValues/OurValues";

export default [
  {
    path: "about/our-story",
    element: <AboutLayout bannerData={BANNER_DATA[0]} />,
    children: [
      {
        path: "",
        element: <OurStory />,
      },
    ],
  },
  {
    path: "about/our-product",
    element: <AboutLayout bannerData={BANNER_DATA[1]} />,
    children: [
      {
        path: "",
        element: <OurProduct />,
      },
    ],
  },
  {
    path: "about/our-values",
    element: <AboutLayout bannerData={BANNER_DATA[2]} />,
    children: [
      {
        path: "",
        element: <OurValues />,
      },
    ],
  },
];
