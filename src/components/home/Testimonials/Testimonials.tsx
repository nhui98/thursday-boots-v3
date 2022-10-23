import { TESTIMONIALS_DATA } from "@constants/home/testimonials.data";
import { useRef, useState } from "react";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Testimonials() {
  const [active, setActive] = useState(1);
  const testimonialContainerRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (testimonialContainerRef.current && testimonialRef.current)
      testimonialContainerRef.current.scrollLeft -=
        testimonialRef.current.clientWidth;
    if (active > 1) setActive((active) => active - 1);
  };

  const scrollRight = () => {
    if (testimonialContainerRef.current && testimonialRef.current)
      testimonialContainerRef.current.scrollLeft +=
        testimonialRef.current.clientWidth;
    if (active < 6) setActive((active) => active + 1);
  };

  return (
    <section className="my-4 flex flex-col items-center justify-center gap-y-4 bg-offwhite py-20 sm:gap-y-12">
      <h2 className="text-center tracking-[0.15em] text-black/70">
        WHAT PEOPLE ARE SAYING
      </h2>

      {/* Company Testimonials */}
      <div className="relative flex w-full items-center justify-center overflow-hidden">
        <button className="absolute left-4 hidden cursor-pointer text-4xl sm:block">
          <AiOutlineLeft onClick={scrollLeft} />
        </button>
        <button className="absolute right-4 hidden cursor-pointer text-4xl sm:block">
          <AiOutlineRight onClick={scrollRight} />
        </button>

        <div
          ref={testimonialContainerRef}
          className="grid snap-x snap-mandatory grid-cols-[repeat(6,1fr)] overflow-x-scroll scroll-smooth sm:overflow-hidden"
        >
          {TESTIMONIALS_DATA.map(({ id, testimony, alt, img }) => (
            <figure
              ref={testimonialRef}
              key={id}
              className="flex w-screen min-w-[300px] snap-start flex-col items-center justify-center gap-y-4 md:w-[calc(100vw-1rem)]"
            >
              <blockquote className="w-full px-2 text-center text-2xl font-medium before:content-[open-quote] after:content-[close-quote] sm:w-3/5">
                {testimony}
              </blockquote>
              <figcaption className="block sm:hidden">
                <img src={img} alt={alt} />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Company Logos */}
      <div className="hidden w-full justify-center px-8 sm:flex">
        <div className="flex justify-center gap-x-4">
          {TESTIMONIALS_DATA.map(({ img, alt, id }) => (
            <div
              key={id}
              className={` transition-opacity duration-500 ${
                active === id ? "opacity-100" : "opacity-50"
              }`}
            >
              <img src={img} alt={alt} />
            </div>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="flex flex-col items-center gap-y-4 px-4">
        <h2 className="text-center">Over 75,000 5-star Customer Reviews</h2>
        <div className="flex">
          {new Array(5).fill(1).map((_, i) => (
            <AiFillStar key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
