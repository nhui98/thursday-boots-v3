import Basket from "@components/common/Basket/Basket";
import Navbar from "@components/common/Navbar/Navbar";
import Overlay from "@components/common/Overlay/Overlay";
import { Outlet } from "react-router-dom";

export default function Layout({ isHome = false }: LayoutProps) {
  return (
    <>
      <Overlay />
      <Basket />
      <div className="relative min-w-[300px]">
        <Navbar isHome={isHome} />
        <Outlet />
      </div>
    </>
  );
}

export interface LayoutProps {
  isHome?: boolean;
}
