import Navbar from "@components/common/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="relative min-w-[300px]">
      <Navbar />
      <Outlet />
    </div>
  );
}
