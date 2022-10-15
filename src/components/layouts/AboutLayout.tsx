import Banner from "@components/about/Banner/Banner";
import { BannerItem, ILink } from "@pages/about/data";
import { Outlet } from "react-router-dom";

interface AboutLayoutProps {
  bannerData: BannerItem;
  bannerLinks: ILink[];
}

export default function AboutLayout({
  bannerData,
  bannerLinks,
}: AboutLayoutProps) {
  return (
    <main className="mt-[5rem] w-full">
      <Banner bannerData={bannerData} bannerLinks={bannerLinks} />
      <Outlet />
    </main>
  );
}
