import Navbar from "@components/common/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout({ isHome = false }: LayoutProps) {
  return (
    <div className="relative w-screen min-w-[300px] overflow-x-hidden">
      <Navbar isHome={isHome} />
      <Outlet />
    </div>
  );
}

export interface LayoutProps {
  isHome?: boolean;
}
