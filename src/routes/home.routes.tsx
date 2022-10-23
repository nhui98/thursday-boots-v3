import Layout from "@components/layouts/Layout";
import Home from "@pages/Home";

export default [
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
];
