import Layout from "@components/layouts/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RoutesAbout from "./Routes-About";
import RoutesHelp from "./Routes-Help";
import RoutesHome from "./Routes-Home";

const router = createBrowserRouter([
  ...RoutesHome,
  {
    path: "/",
    element: <Layout />,
    children: [...RoutesAbout, ...RoutesHelp],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
