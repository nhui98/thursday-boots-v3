import { SLIDESHOW_DATA } from "@constants/home/slideshow.data";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Slideshow() {
  const [slide, setSlide] = useState(1);

  const prevSlide = () => {
    slide > 1 ? setSlide((slide) => slide - 1) : setSlide(3);
  };

  const nextSlide = () => {
    slide < 3 ? setSlide((slide) => slide + 1) : setSlide(1);
  };

  return (
    <section className="relative h-screen w-full">
      {/* next and previous slide buttons */}
      <button
        onClick={prevSlide}
        className={`absolute bottom-10 z-10 ml-8 cursor-pointer text-4xl text-white sm:top-1/2 sm:bottom-[unset]`}
      >
        <AiOutlineLeft />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute bottom-10 right-0 z-10 mr-8 cursor-pointer text-4xl text-white sm:top-1/2 sm:bottom-[unset]`}
      >
        <AiOutlineRight />
      </button>

      {/* slides */}
      {SLIDESHOW_DATA.map(
        ({ buttons, description, img, imgSmall, slideNo, title }) => (
          <figure
            key={slideNo}
            className={`absolute h-full w-full transition-all ${
              slide === slideNo
                ? "visible z-0 opacity-100"
                : "invisible -z-10 opacity-0"
            }`}
          >
            {/* images */}
            <img
              src={img}
              alt={description}
              className="hidden h-full w-full object-cover lg:block"
            />
            <img
              src={imgSmall}
              alt={description}
              className="block h-full w-full object-cover lg:hidden"
            />
            {/* image info */}
            <figcaption
              className={`absolute top-0 flex h-full w-full flex-col items-center justify-center gap-y-8 px-4 text-center lg:w-1/2 ${
                slideNo % 2 === 0 ? "right-0" : "left-0"
              }`}
            >
              {title.map((t) => (
                <h2
                  className="flex flex-col gap-y-4 text-5xl font-bold text-white md:text-6xl"
                  key={t}
                >
                  {t}
                </h2>
              ))}
              <p className=" text-lg text-white md:text-xl">{description}</p>
              <div className="flex flex-col gap-x-8 gap-y-4 sm:flex-row">
                {buttons.map(({ text, href }) => (
                  <Link
                    to={href}
                    key={text}
                    className="bg-white py-3 px-10 shadow-lg transition-colors hover:bg-white/90"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </figcaption>
          </figure>
        )
      )}

      {/* slide tracker */}
      <div className="absolute bottom-10 flex w-full items-center justify-center gap-x-4">
        <div
          className={`h-4 w-4 rounded-full ${
            slide === 1 ? "bg-white" : "bg-white/50"
          }`}
        />
        <div
          className={`h-4 w-4 rounded-full ${
            slide === 2 ? "bg-white" : "bg-white/50"
          }`}
        />
        <div
          className={`h-4 w-4 rounded-full ${
            slide === 3 ? "bg-white" : "bg-white/50"
          }`}
        />
      </div>
    </section>
  );
}
