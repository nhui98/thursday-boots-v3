import Featured from "@components/home/Featured/Featured";
import FeaturedCollection from "@components/home/FeaturedCollection/FeaturedCollection";
import Prefooter from "@components/home/Prefooter/Prefooter";
import Slideshow from "@components/home/Slideshow/Slideshow";
import Testimonials from "@components/home/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Slideshow />
      <Testimonials />
      <Featured />
      <FeaturedCollection />
      <Prefooter />
    </main>
  );
}
