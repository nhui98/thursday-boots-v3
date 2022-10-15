import { Layout } from "@components/layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RoutesAbout from "./Routes-About";
import RoutesHome from "./Routes-Home";

const router = createBrowserRouter([
  ...RoutesHome,
  {
    path: "/",
    element: <Layout />,
    children: [...RoutesAbout],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
