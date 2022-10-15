import Banner from "@components/about/Banner/Banner";
import { BannerItem } from "@components/about/Banner/data";
import { Outlet } from "react-router-dom";

interface AboutLayoutProps {
  bannerData: BannerItem;
}

export default function AboutLayout({ bannerData }: AboutLayoutProps) {
  return (
    <main className="mt-[5rem] w-full">
      <Banner bannerData={bannerData} />
      <Outlet />
    </main>
  );
}
