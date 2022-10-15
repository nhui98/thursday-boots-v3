import { BANNER_DATA } from "@components/about/Banner/data";
import { AboutLayout, Layout } from "@components/layouts";
import { OurProduct, OurStory, OurValues } from "@pages/about";
import Home from "@pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout isHome />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
