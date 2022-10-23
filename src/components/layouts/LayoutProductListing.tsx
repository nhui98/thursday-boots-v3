import Sidebar from "@components/products/Sidebar/Sidebar";
import { MenuData } from "@constants/navbar/navbar.data";
import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function LayoutProductsListing() {
  const links = useLoaderData() as MenuData[];

  return (
    <div className="container mx-auto mt-20 flex gap-x-8 py-10 px-6 lg:px-10 xl:px-20">
      <Sidebar links={links} />
      <Outlet />
    </div>
  );
}
