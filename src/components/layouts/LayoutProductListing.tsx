import { MenuData } from "@components/common/Navbar/data";
import Sidebar from "@components/products/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function LayoutProductsListing() {
  const links = useLoaderData() as MenuData[];

  return (
    <div className="container mx-auto mt-20 flex gap-x-8 py-10">
      <Sidebar links={links} />
      <Outlet />
    </div>
  );
}
