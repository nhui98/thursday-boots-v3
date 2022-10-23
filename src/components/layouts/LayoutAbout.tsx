import Banner from "@components/common/Banner/Banner";
import { BannerItem, ILink } from "@constants/about/about.data";
import { Outlet } from "react-router-dom";

interface LayoutAboutProps {
  bannerData: BannerItem;
  bannerLinks: ILink[];
}

export default function LayoutAbout({
  bannerData,
  bannerLinks,
}: LayoutAboutProps) {
  return (
    <main className="mt-[5rem] w-full">
      <Banner bannerData={bannerData} bannerLinks={bannerLinks} styledLinks />
      <Outlet />
    </main>
  );
}
