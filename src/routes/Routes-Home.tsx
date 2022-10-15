import { Layout } from "@components/layouts";
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
